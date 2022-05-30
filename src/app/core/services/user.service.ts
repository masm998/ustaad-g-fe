import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  public getServices() {
    return this.apiService.sendGetRequest('service')
  }

  public getUserProfile() {
    const params = {
      getCustomerData: true
    }
    return this.apiService.sendGetRequestParams('user', params)
  }

  public uploadPicture(data) {
    const formData: FormData = new FormData();
    formData.append('file', data);
    return this.apiService.sendUpdateRequest('user', formData)
  }
}
