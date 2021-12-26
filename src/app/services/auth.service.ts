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
      this.apiService.sendGetRequestParams('/user', request)
      .subscribe((res: any) => {
        if(res.success) {
          this.localStorageService.saveCredentials(res.user_id, res.first_name, res.last_name, res.mobile, res.email, res.token, res.role, res.profile_pic)
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

  public createUser() {

  }

  public logout() {
    this.localStorageService.clearLocalStorage()
  }
}
