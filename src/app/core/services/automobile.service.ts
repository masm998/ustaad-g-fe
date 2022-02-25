import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AutomobileService {

  constructor(private apiService: ApiService) { }

  public getAutomobileForAppointment() {
    const params = {
      userAutomobile: true
    }
    return this.apiService.sendGetRequestParams('automobile', params)
  }
  public getCarType(){
    const params = {
      automobileType: true
    }
    return this.apiService.sendGetRequestParams("automobile", params)
  }

  public addAutomobile(input) {
    return this.apiService.sendPostRequest('automobile', input)
  }

  public getUserAutomobile() {
    const params = {
      userAutomobileList: true
    }
    return this.apiService.sendGetRequestParams('automobile', params)
  }

  public getAutomobileDetails(carId) {
    const params = {
      car_id: carId,
      automobileDetails: true
    }
    return this.apiService.sendGetRequestParams('automobile', params)
  }
}