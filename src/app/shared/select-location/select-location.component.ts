import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss'],
})
export class SelectLocationComponent implements OnInit {
  location: any
  constructor(public modalController: ModalController, private router: Router) { }

  ngOnInit() {}

  async returnedResult(event) {
    console.log('event11111 ',event)
    this.location = event
  }

  async onAddLocation() {
    console.log('lllllll: ', this.location)
  }

}
