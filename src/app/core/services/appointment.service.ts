import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private apiService: ApiService) { }

  public createAppointment(data) {
    return this.apiService.sendPostRequest('appointment', data)
  }
}
