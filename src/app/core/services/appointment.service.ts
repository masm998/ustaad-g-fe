import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private apiService: ApiService) { }

  public createAppointment(data, location) {
    const params = {
      car: data.car,
      description: data.description,
      address: data.address,
      latitude: location.latitude,
      longitude: location.longitude,
      service: data.service,
      type: data.type
    }
    return this.apiService.sendPostRequest('appointment', params)
  }
}
