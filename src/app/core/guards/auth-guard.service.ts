import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthService, private router: Router, private localStrageService: LocalStorageService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      // if(this.checkRole() == '3') {
      //   this.router.navigate(['base/tabs/UserHome'])
      // }
      // else if(this.checkRole() == '2') {
      //   this.router.navigate(['base/tabs/UstaadHome'])
      // }
        return true;
    }

    // navigate to login page
    this.router.navigate(['/auth/sign-in']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }

  checkRole() {
    let role = this.localStrageService.getUserRole()
    return role
  }
}
