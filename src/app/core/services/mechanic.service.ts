import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private apiService: ApiService) { }

  public getProfile() {
    const params = {
      getUstaadProfile: true
    }
    return this.apiService.sendGetRequestParams('mechanic', params)
  }
}
