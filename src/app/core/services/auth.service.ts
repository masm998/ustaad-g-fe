import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService, private localStorageService: LocalStorageService) { }

  public login(username: string, password: string): Observable<any> {
    let request = {
      username: username,
      password: password
    }
    return new Observable((observer) => {
      this.apiService.sendGetRequestParams('user', request)
      .subscribe((res: any) => {
        if(res.success) {
          this.localStorageService.saveCredentials(res.user.user_id, res.user.first_name, res.user.last_name, res.user.mobile, res.user.email, res.user.token, res.user.role, res.user.profile_pic)
          observer.next(res)
        }
        else {
          observer.next(res)
        }
      }, (err) => {
        console.log('Error while logging in: ', err)
        observer.error(err)
      })
    })
  }

  public createUser(userData) {
    return new Observable((observer) => {
      this.apiService.sendPostRequest('user', userData)
      .subscribe((res: any) => {
        if(res.success) {
          // this.localStorageService.saveCredentials(res.user_id, res.first_name, res.last_name, res.mobile, res.email, res.token, res.role, res.profile_pic)
          observer.next(res)
        }
        else {
          observer.next(res)
        }
      }, (err) => {
        console.log('Error while logging in: ', err)
        observer.error(err)
      })
    })
  }

  public isAuthenticatedUser(): boolean {
    const credentials = this.localStorageService.getCredentials();

    if (credentials.mobile && credentials.token) {
      return true;
    }

    return false;
  }

  public isAuthenticatedUstaad(): boolean {
    const credentials = this.localStorageService.getCredentials();

    if (credentials.mobile && credentials.token) {
      return true;
    }
    
    
    return false;
  }

  public logout() {
    this.localStorageService.clearLocalStorage()
  }
}
