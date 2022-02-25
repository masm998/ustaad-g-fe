import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AutomobileService } from 'src/app/core/services/automobile.service';

@Component({
  selector: 'app-automobile-details',
  templateUrl: './automobile-details.page.html',
  styleUrls: ['./automobile-details.page.scss'],
})
export class AutomobileDetailsPage implements OnInit {
  carId: number;
  automobileDetails: any
  constructor(private automobileService: AutomobileService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.carId = params.carId;
    })
    this.getAutomobileDetails()
  }

  getAutomobileDetails() {
    this.automobileService.getAutomobileDetails(this.carId)
    .subscribe((result: any) => {
      if(result.success) {
        this.automobileDetails = result.data[0]
      }
    })
  }

}
