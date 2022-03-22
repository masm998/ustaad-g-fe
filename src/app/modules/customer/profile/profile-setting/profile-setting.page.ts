import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { config } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router'
import { ToastService } from 'src/app/core/services/toast.service';
import { ModalController } from '@ionic/angular';
import { ChangePasswordPage } from 'src/app/shared/change-password/change-password.page';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.page.html',
  styleUrls: ['./profile-setting.page.scss'],
})
export class ProfileSettingPage implements OnInit {
  updateProfileForm: FormGroup
  userData: any
  prefix = config.backend_url
  editMode = false
  constructor(private userService: UserService, private authService: AuthService, private router: Router,
    private toastService: ToastService, private modalController: ModalController) { }

  ngOnInit() {
    this.getUserInfo()
    this.updateProfileForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })
  }

  getUserInfo() {
    this.userService.getUserProfile()
    .subscribe((res: any) => {
      if(res.success) {
        this.userData = res.data[0]
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
      this.authService.updateUserProfile(this.updateProfileForm.value)
      .subscribe((res: any) => {
        console.log('result of updating: ', res)
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
