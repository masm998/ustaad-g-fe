import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router'
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sign-up-ustaad',
  templateUrl: './sign-up-ustaad.page.html',
  styleUrls: ['./sign-up-ustaad.page.scss'],
})
export class SignUpUstaadPage implements OnInit {
  signUpForm: FormGroup
  services
  constructor(private authService: AuthService, private router: Router, private toastService: ToastService, private userService: UserService) { }

  ngOnInit() {
    this.getServices()

    this.signUpForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl(''),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required]),
      cnic: new FormControl('', [Validators.required]),
      expertise: new FormControl('', [Validators.required]),
      useas: new FormControl('', [Validators.required]),
    }, this.passwordMatchValidator)
  }

  passwordMatchValidator(fg: FormGroup) {
    if (fg.get('password') && fg.get('confirm_password') && fg.get('password').value === fg.get("confirm_password").value) {
      return null;
    } else {
      return {
        mismatch: true
      };
    }
  }

  getServices() {
    this.userService.getServices()
    .subscribe((res: any) => {
      if(res.success) {
       this.services = res.data[0] 
      }
    })
  }

  onSubmit() {
    if(this.signUpForm.valid) {
      let data = this.signUpForm.value
      data.role = 'ustaad'
      this.authService.createUser(data)
      .subscribe((res: any) => {
        if(res.success){
          this.toastService.loginSuccessToast('Ustaad created Successfully')
          this.router.navigate(['auth/sign-in'])
        }
      })
    }
    else {
      const controlsKeys = Object.keys(this.signUpForm.controls);
      controlsKeys.forEach((controlKey) => {
        if (this.signUpForm.controls[controlKey].errors && this.signUpForm.controls[controlKey].errors.required) {
          this.toastService.loginFailureToast(`Please fill all form fields. Missing value for ${controlKey.replace("_", " ")} field`);
        }
      })
      if (this.signUpForm && this.signUpForm.errors && this.signUpForm.errors.mismatch) {
        this.toastService.loginFailureToast("Password and confirm password fields have different values");
      }
      if (!this.signUpForm.controls['password'].valid) {
        this.toastService.loginFailureToast("Password must have atleast 8 characters");
      }
      if(!this.signUpForm.controls['mobile'].valid) {
        this.toastService.loginFailureToast("Invalid Mobile Number");
      }
      if(!this.signUpForm.controls['cnic'].valid) {
        this.toastService.loginFailureToast("CNIC should have 13 characters without '-'");
      }
    }
  }
}
