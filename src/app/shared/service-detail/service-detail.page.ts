import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/core/services/service.service';
import { config } from 'src/environments/environment';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {
  prefix = config.backend_url
  serviceId
  serviceDetail
  slideOpts = {
    initialSlide: 0.5,
    speed: 600
  };

  constructor(private activatedRoute: ActivatedRoute, private serviceService: ServiceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param)=>{
      this.serviceId = param.id;
    })
    this.getServiceDetails()
  }

  getServiceDetails() {
    this.serviceService.getServiceDetails(this.serviceId)
    .subscribe((res: any) => {
      if(res.success) {
        this.serviceDetail = res.data[0]
      }
    })
  }

}
