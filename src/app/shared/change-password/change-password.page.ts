import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  changePasswordForm: FormGroup

  constructor(public modalController: ModalController, private router: Router, private toastService: ToastService, private authService: AuthService) { }

  ngOnInit() {
    this.changePasswordForm = new FormGroup({
      old_pass: new FormControl('', [Validators.required]),
      new_pass: new FormControl('', [Validators.required]),
      confirm_pass: new FormControl('', [Validators.required])
    }, this.passwordMatchValidator)
  }

  onBack() {
    this.modalController.dismiss()
  }

  passwordMatchValidator(fg: FormGroup) {
    if (fg.get('old_pass') && fg.get('new_pass') && fg.get('old_pass').value === fg.get("new_pass").value) {
      return {
        passMatch: true
      }
    }
    if (fg.get('new_pass') && fg.get('confirm_pass') && fg.get('new_pass').value === fg.get("confirm_pass").value) {
      return null;
    } else {
      return {
        mismatch: true
      };
    }
  }

  onUpdate() {
    if(this.changePasswordForm.valid) {
      this.authService.changePassword(this.changePasswordForm.value)
      .subscribe((res: any) => {
        if(res.success) {
          this.toastService.generalToast('Password Updated!')
          this.onBack()
        }
        else {
          if(res.validated == false) {
            this.toastService.loginFailureToast(res.err)
          }
          else {
            console.log('error in changing pass: ', res.err)
          }
        }
      })
    }
    else {
      const controlsKeys = Object.keys(this.changePasswordForm.controls);
      controlsKeys.forEach((controlKey) => {
        if (this.changePasswordForm.controls[controlKey].errors && this.changePasswordForm.controls[controlKey].errors.required) {
          this.toastService.loginFailureToast(`Please fill all form fields. Missing value for ${controlKey.replace("_", " ")} field`);
        }
      })
      if (this.changePasswordForm && this.changePasswordForm.errors && this.changePasswordForm.errors.mismatch) {
        this.toastService.loginFailureToast("Password and confirm password fields have different values");
      }
      if (this.changePasswordForm && this.changePasswordForm.errors && this.changePasswordForm.errors.passMatch) {
        this.toastService.loginFailureToast("Old Password and New password is same");
      }
      if (!this.changePasswordForm.controls['new_pass'].valid) {
        this.toastService.loginFailureToast("Password must have atleast 8 characters");
      }
    }
  }
}
