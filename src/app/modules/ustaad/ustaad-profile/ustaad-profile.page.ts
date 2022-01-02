import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './ustaad-profile.page.html',
  styleUrls: ['./ustaad-profile.page.scss'],
})
export class UstaadProfilePage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onClickSignOut() {
    this.authService.logout()
    this.router.navigate(['auth/sign-in'])
  }

}
