import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PairNewComponent } from './pair-new.component';

describe('PairNewComponent', () => {
  let component: PairNewComponent;
  let fixture: ComponentFixture<PairNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairNewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PairNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
