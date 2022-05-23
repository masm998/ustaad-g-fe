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

  public getActiveAppointmentRequests() {
    const params = {
      activeAppointments: true
    }
    return this.apiService.sendGetRequestParams('mechanic', params)
  }

  public getActiveAppointmentRequestsCount() {
    const params = {
      activeAppointmentsCount: true
    }
    return this.apiService.sendGetRequestParams('mechanic', params)
  }
}
