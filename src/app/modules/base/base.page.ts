import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit {
  role
  currentLocation = {
    latitude: '33.65185793190505',
    longitude: '72.96050130523034',
  }
  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.role = this.localStorage.getUserRole()
    console.log('role: ', this.role)
    this.localStorage.setLocation(this.currentLocation.latitude, this.currentLocation.longitude)
  }

}
