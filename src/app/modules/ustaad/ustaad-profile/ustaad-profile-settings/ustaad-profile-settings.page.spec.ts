import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UstaadProfileSettingsPage } from './ustaad-profile-settings.page';

describe('UstaadProfileSettingsPage', () => {
  let component: UstaadProfileSettingsPage;
  let fixture: ComponentFixture<UstaadProfileSettingsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UstaadProfileSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UstaadProfileSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
