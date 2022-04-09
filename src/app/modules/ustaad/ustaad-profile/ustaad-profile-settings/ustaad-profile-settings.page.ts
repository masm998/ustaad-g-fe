import { Component, OnInit } from '@angular/core';
import { config } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router'
import { ToastService } from 'src/app/core/services/toast.service';
import { ModalController } from '@ionic/angular';
import { ChangePasswordPage } from 'src/app/shared/change-password/change-password.page';
import { MechanicService } from 'src/app/core/services/mechanic.service';

@Component({
  selector: 'app-ustaad-profile-settings',
  templateUrl: './ustaad-profile-settings.page.html',
  styleUrls: ['./ustaad-profile-settings.page.scss'],
})
export class UstaadProfileSettingsPage implements OnInit {
  updateProfileForm: FormGroup
  ustaadData: any
  prefix = config.backend_url
  editMode = false

  constructor(private ustaadService: MechanicService, private authService: AuthService, private router: Router,
    private toastService: ToastService, private modalController: ModalController) { }

  ngOnInit() {
    this.getProfileInfo()
    this.updateProfileForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      expertise: new FormControl('', [Validators.required])
    })
  }

  getProfileInfo() {
    this.ustaadService.getProfile()
    .subscribe((res: any) => {
      if(res.success) {
        this.ustaadData = res.data[0]
      }
    })
  }

  onClickEdit() {
    this.editMode = !this.editMode;
  }

  async onChangePassword() {
    const modal = await this.modalController.create({
      component: ChangePasswordPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log('change password result: ', dataReturned)
    });

    return await modal.present();
  }

  onSave() {
    if(this.updateProfileForm.valid) {
      this.authService.updateUstaadProfile(this.updateProfileForm.value)
      .subscribe((res: any) => {
        if(res.success) {
          this.toastService.generalToast('Updated Successfully!')
          this.editMode = false
        }
      })
    }
    else {
      this.toastService.loginFailureToast('Invalid Data')
    }
  }
}
