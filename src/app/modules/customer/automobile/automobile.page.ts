import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.page.html',
  styleUrls: ['./automobile.page.scss'],
})
export class AutomobilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onclick(){
    this.router.navigate(['customer/automobile/automobile-details'])
  }

}
