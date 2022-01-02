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
    if (this.authService.isAuthenticatedUser()) {
      if(this.checkRole() == "3")
        {return true;}
        this.router.navigate(['base/tabs/UstaadHome'])
        return false;
    }

    this.router.navigate(['/auth/sign-in']);
    return false;
  }

  checkRole() {
    let role = this.localStrageService.getUserRole()
    return role
  }
}
