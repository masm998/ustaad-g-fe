import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onClickProfile(){
    this.router.navigate(['customer/profile/profile-setting']);
  }

  onClickAutomobile(){
    this.router.navigate(['customer/automobile'])
  }
  onClickAppointment(){
    this.router.navigate(['customer/appointment'])
  }
  onClickSignOut(){
    this.authService.logout()
    this.router.navigate(['auth/sign-in'])

  }
}
