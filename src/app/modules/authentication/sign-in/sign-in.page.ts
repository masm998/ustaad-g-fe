import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  signInForm: FormGroup
  username;
  password;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  onInputChange(e){
    console.log(e.detail.value)
  }

  onSubmit(){
    this.authService.login(this.signInForm.value.username, this.signInForm.value.password)
    .subscribe((res) => {
      if(res.success){
        if(res.data.role == 3){
          this.router.navigate(['customer/'])
        }
        else if(res.data.role == 2) {
          this.router.navigate(['ustaad/'])
        }
      }
    })
  }
}
