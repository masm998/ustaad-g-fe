import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit {
  role
  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.role = this.localStorage.getUserRole()
  }

}
