import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { config } from 'src/environments/environment';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.page.html',
  styleUrls: ['./user-dashboard.page.scss'],
})
export class UserDashboardPage implements OnInit {
  home = false
  prefix = config.backend_url
  servicesList: any

  constructor(private authService: AuthService, private userService: UserService) {
   }

  ngOnInit() {
    this.getServices()
  }

  getServices() {
    this.userService.getServices()
    .subscribe((res: any) => {
      if(res.success) {
        this.servicesList = res.data
        console.log(this.servicesList)
      }
    })
  }
}
