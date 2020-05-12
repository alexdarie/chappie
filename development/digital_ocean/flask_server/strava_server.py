import json
from stravaio import strava_oauth2, StravaIO
from google.cloud import bigquery
from google.cloud import bigquery_storage_v1beta1
from google.oauth2 import service_account
from flask import Flask, request, jsonify
from flask_cors import CORS
import time
import requests
from datetime import datetime
import swagger_client
app = Flask(__name__)
cors = CORS(app)

@app.route('/weather-graph')
def weather_graph():
    query_job = client.query("""
        SELECT * FROM `savage2251.bachelor.weather`
        WHERE TIMESTAMP_DIFF(CURRENT_TIMESTAMP(), event_time, HOUR) <= 24
        ORDER BY event_time
    """)
    results = list(query_job.result())
    res = []
    row = results[0]
    res.append(
        {"temperature": row.temperature, "location": row.location, "air_pressure": row.air_pressure, "light": row.light,
         "event_time": row.event_time.isoformat(), "color": row.color})
    n = len(results)
    last = results[0].event_time
    i = 1
    while i < n:
        while i < n and ((results[i].event_time - last).total_seconds() / 60) < 60:
            # print(i)
            i += 1
        # print(" ")
        if i < n:
            row = results[i]
            last = results[i].event_time
            res.append({"temperature": row.temperature, "location": row.location, "air_pressure": row.air_pressure, "light": row.light, "event_time": row.event_time.isoformat(), "color": row.color})
            i += 1
    return json.dumps({"data": res})


@app.route('/user-strava', methods=['GET', 'POST'])
def user_strava():
    credentials = request.get_json()
    if credentials is None:
        credentials = renew_credentials()

    with open('tokens.json', 'w', encoding='utf-8') as f:
        json.dump(credentials, f, ensure_ascii=False, indent=4)
    client = StravaIO(access_token=credentials['access_token'])
    athlete = client.get_logged_in_athlete()
    athlete = athlete.to_dict()
    ath = client.athletes_api.get_stats(athlete['id'])
    ath = ath.__dict__
    for x in ath:
        print(x, ath[x])
        if not isinstance(ath[x], int) and not isinstance(ath[x], str) and not isinstance(ath[x], float)\
                and ath[x] is not None:
            ath[x] = ath[x].__dict__
    athlete['stats'] = ath
    return json.dumps(athlete)


def update_credentials():
    with open('credentials.json') as json_file:
        client = json.load(json_file)

    with open('tokens.json') as json_file:
        credentials = json.load(json_file)

    if credentials['expires_at'] <= int(time.time()):
        credentials = strava_oauth2(client_id=client['Client ID'], client_secret=client['Client Secret'])
        print('new credentials: ', credentials)
        with open('tokens.json', 'w', encoding='utf-8') as f:
            json.dump(credentials, f, ensure_ascii=False, indent=4)

    return credentials


def renew_credentials():
    print('renew credentials')
    with open('credentials.json') as json_file:
        client = json.load(json_file)

    with open('tokens.json') as json_file:
        credentials = json.load(json_file)

    url = 'https://www.strava.com/api/v3/oauth/token?client_id=' + client['Client ID'] + \
        '&client_secret=' + client['Client Secret'] + '&refresh_token=' + credentials['refresh_token'] + '&grant_type=refresh_token'
    r = requests.post(url, None)
    json_data = r.json()
    return json_data


def processed_activities():
    """
    :return: A list o Strava activities joined with the min, max and average values for temperature, light and
    air pressure measurements.
    """

    query_job = bigquery_client.query("""
        select start_date from `savage2251.bachelor.activities` order by start_date desc limit 1
    """)

    results = list(query_job.result())
    last_saved_activity_start_date = results[0][0]

    strava_credentials = renew_credentials()
    with open('json/tokens.json', 'w', encoding='utf-8') as f:
        json.dump(strava_credentials, f, ensure_ascii=False, indent=4)

    client = StravaIO(access_token=strava_credentials['access_token'])
    activities = client.get_logged_in_athlete_activities(last_saved_activity_start_date)

    processed_activities = []
    for activity in activities:
        strava_format_activity = client.get_activity_by_id(activity.id)
        activity = strava_format_activity.to_dict()

        date_left_bound = datetime.strptime(activity['start_date'], "%Y-%m-%dT%H:%M:%SZ")
        date_right_bound = datetime.strptime(activity['start_date'], "%Y-%m-%dT%H:%M:%SZ") + \
                           timedelta(0, int(activity["elapsed_time"]))
        q = "select MIN(temperature) as min_temp, MAX(temperature) as max_temp, AVG(temperature) as avg_temp, " + \
            "MIN(air_pressure) as min_air_pressure, MAX(air_pressure) as max_air_pressure, AVG(air_pressure) " + \
            "as avg_air_pressure, MIN(light) as min_light, MAX(light) as max_light, AVG(light) as avg_light " + \
            "from `savage2251.bachelor.weather` " + \
            "where date(event_time) = '" + str(date_left_bound)[:10] + \
            "' and time(event_time) > '" + str(date_left_bound)[11:19] + \
            "' or date(event_time) = '" + str(date_right_bound)[:10] + \
            "' and time(event_time) < '" + str(date_right_bound)[11:19] + "'"
        try:
            query_job = bigquery_client.query(q)
            results = list(query_job.result())
            activity_related_weather_values = results[0]
            x = activity
            x['avg_temperature'] = activity_related_weather_values.avg_temp
            x['min_temperature'] = activity_related_weather_values.min_temp
            x['max_temperature'] = activity_related_weather_values.max_temp

            x['avg_light'] = activity_related_weather_values.avg_light
            x['min_light'] = activity_related_weather_values.min_light
            x['max_light'] = activity_related_weather_values.max_light

            x['avg_air_pressure'] = activity_related_weather_values.avg_air_pressure
            x['min_air_pressure'] = activity_related_weather_values.min_air_pressure
            x['max_air_pressure'] = activity_related_weather_values.max_air_pressure

            x.pop('photos', None)
            x.pop('map', None)
            x.pop('segment_efforts', None)
            x.pop('highlighted_kudosers', None)
            x.pop('splits_standard', None)
            x.pop('laps', None)
            x.pop('upload_id', None)
            x.pop('external_id', None)
            x.pop('splits_metric', None)
            x.pop('splits_standard', None)
            x.pop('gear_id', None)
            x.pop('weighted_average_watts', None)
            x.pop('segment_efforts', None)
            x.pop('embed_token', None)
            x.pop('device_watts', None)
            x.pop('max_watts', None)
            x.pop('average_watts', None)
            x.pop('kilojoules', None)
            x.pop('has_kudoed', None)
            x.pop('trainer', None)
            x.pop('commute', None)
            x.pop('manual', None)
            x.pop('private', None)
            x.pop('flagged', None)
            x.pop('start_date_local', None)
            x.pop('photo_count', None)
            x.pop('id', None)
            x.pop('description', None)
            x.pop('gear', None)
            x.pop('workout_type', None)
            x.pop('athlete', None)

            aux = []
            if x['best_efforts'] is not None:
                for effort in x['best_efforts']:
                    aux.append({
                        "moving_time": effort['moving_time'],
                        "name": effort['name'],
                        "start_date": effort['start_date'],
                    })
            x['best_efforts'] = aux
            x['athlete_id'] = x['athlete']['id']

            processed_activities.append(x)
        except Exception as exc:
            print(exc)

    return processed_activities


credentials = service_account.Credentials.from_service_account_file(
    'savage2251-a452ea028c0a.json')
project_id = 'savage2251'
client = bigquery.Client(credentials= credentials,project=project_id)
bqstorageclient = bigquery_storage_v1beta1.BigQueryStorageClient(credentials=credentials)
