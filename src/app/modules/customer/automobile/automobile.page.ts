import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AutomobileService } from 'src/app/core/services/automobile.service';

@Component({
  selector: 'app-automobile',
  templateUrl: './automobile.page.html',
  styleUrls: ['./automobile.page.scss'],
})
export class AutomobilePage implements OnInit {
  automobileList: any;

  constructor(private router: Router, private automobileService: AutomobileService) { }

  ngOnInit() {
    this.getUserAutomobiles()
  }

  getUserAutomobiles() {
    this.automobileService.getUserAutomobile()
    .subscribe((res: any) => {
      if(res.success) {
        this.automobileList = res.data
      }
    })
  }

  onclick(car_id){
    this.router.navigate(['customer/automobile/automobile-details', car_id])
  }
   
  onAdd(){
    this.router.navigate(['customer/automobile/add-automobile'])
  }
}
