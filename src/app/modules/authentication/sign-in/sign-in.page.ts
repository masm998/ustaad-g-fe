import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router'
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  signInForm: FormGroup
  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    if(this.signInForm.valid) {
      this.authService.login(this.signInForm.value.username, this.signInForm.value.password)
      .subscribe((res) => {
        if(res.success){
          console.log(res)
          if(res.user.role === 3){
            console.log('role is 3')
            this.router.navigate(['/base/tabs/UserHome'])
          }
          else if(res.user.role === 2) {
            this.router.navigate(['/base/tabs/UstaadHome'])
          }
        }
        else {
          console.log('not success: ', res)
        }
      })
    }
    else {
      if(!this.signInForm.value.username.valid) {
        console.log('Mobile number is invalid')
        this.toastService.loginFailureToast('Invalid Mobile Number')
      }
      else if(!this.signInForm.value.password.valid) {
        console.log('Password is invalid')
        this.toastService.loginFailureToast('Invalid Password')
      }
      else {
        console.log(this.signInForm.valid)
        this.toastService.loginFailureToast('Please Fill all Fields')
      }
    }
  }
}
