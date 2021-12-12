import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-role',
  templateUrl: './sign-up-role.page.html',
  styleUrls: ['./sign-up-role.page.scss'],
})
export class SignUpRolePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickCustomer(){
    this.router.navigate(["auth/sign-up-customer"])
  }
  
  onClickUstaad(){
    this.router.navigate(["auth/sign-up-ustaad"])
  }
}
