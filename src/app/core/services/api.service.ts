import { Injectable } from '@angular/core';
import { config } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  prefix = config.backend_url
  token = localStorage.getItem('token')
  headers = {
    Authorization: `Bearer ${this.token}`
  }

  constructor(private http: HttpClient) { }

  public sendGetRequest(path: string) {
    return new Observable((observer) => {
      this.http.get(this.prefix + path, {headers: this.headers})
      .subscribe((res) => {
        observer.next(res)
      }, (err) => {
        console.log('Error in getting response: ', err)
        observer.error(err)
      })
    })
  }

  public sendGetRequestParams(path, data) {
    return new Observable((observer) => {
      this.http.get(this.prefix + path, {params: data, headers: this.headers})
      .subscribe((res) => {
        observer.next(res)
      }, (err) => {
        console.log('Error in getting response: ', err)
        observer.error(err)
      })
    })

  }

  public sendPostRequest(path, data) {
    return new Observable((observer) => {
      console.log('headers: ', this.headers)
      this.http.post(this.prefix + path, data, {headers: this.headers})
      .subscribe((res) => {
        observer.next(res)
      }, (err) => {
        console.log('Error in getting response: ', err)
        observer.error(err)
      })
    })

  }

  public sendUpdateRequest(path, data) {
    return new Observable((observer) => {
      this.http.patch(this.prefix + path, data, {headers: this.headers})
      .subscribe((res) => {
        observer.next(res)
      }, (err) => {
        console.log('Error in getting response: ', err)
        observer.error(err)
      })
    })
  }
}
