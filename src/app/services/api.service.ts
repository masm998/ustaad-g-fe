import { Injectable } from '@angular/core';
import { config } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  prefix = config.backend_url
  headers = {
    // Authorization: `Bearer ${token}`
  }

  constructor(private http: HttpClient) { }

  public sendGetRequest(path) {
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
