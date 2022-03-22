import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit {
  role
  currentLocation = {
    latitude: 33.645227,
    longitude: 72.963179
  }
  constructor(private localStorage: LocalStorageService, private router: Router, private geolocation: Geolocation) { }

  ngOnInit() {
    this.role = this.localStorage.getUserRole()
    console.log('role: ', this.role)
    if(!this.role) {
      this.router.navigate(['auth/sign-in'])
    }
    else if(this.role === 2) {
      this.router.navigate(['base/tabs/UstaadHome'])
    }
    else if(this.role === 3) {
      this.router.navigate(['base/tabs/UserHome'])
    }
    this.getCurrentCoordinates()
  }

  getCurrentCoordinates() {
    console.log('inside get current position')
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.currentLocation.latitude = resp.coords.latitude;
      this.currentLocation.longitude = resp.coords.longitude;
      console.log('location: ', this.currentLocation)
      this.localStorage.setLocation(this.currentLocation.latitude, this.currentLocation.longitude)
     }).catch((error) => {
       console.log('Error getting location', error);
       console.log('location: ', this.currentLocation)
       this.localStorage.setLocation(this.currentLocation.latitude, this.currentLocation.longitude)
     });
  }

}
