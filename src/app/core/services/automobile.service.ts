import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AutomobileService {

  constructor(private apiService: ApiService) { }

  public getAutomobileForAppointment() {
    return this.apiService.sendGetRequest('automobile')
    
  }
}
