import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
@Input('logo') logo: boolean;
@Input('back') back: boolean;

  constructor() { }

  ngOnInit() {
    console.log('logo: ', this.logo)
  }

}
