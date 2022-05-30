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
      date: new Date(data.date),
      type: data.type
    }
    return this.apiService.sendPostRequest('appointment', params)
  }

  public appointmentDataForSearchMechanic(appointmentId) {
    const params = {
      appointmentForSearch: true,
      appointment_id: appointmentId
    }
    return this.apiService.sendGetRequestParams('appointment', params)
  }

  public getAppointmentDetail(id, status) {
    const params = {
      appointmentDetail: true,
      appointment_id: id,
      appointment_status: status
    }
    return this.apiService.sendGetRequestParams('appointment', params)
  }

  public acceptAppointmentRequest(appointmentId) {
    const params = {
      acceptAppointment: true,
      appointment_id: appointmentId
    }
    return this.apiService.sendUpdateRequest('appointment', params)
  }

  public updateAppointmentStatus(appointmentId, status) {
    const params = {
      updateAppointmentStatus: true,
      status: status,
      appointment_id: appointmentId
    }
    return this.apiService.sendUpdateRequest('appointment', params)
  }

  public getAppointmentLocation(appointmentId) {
    const params = {
      getAppointmentLocation: true,
      appointment_id: appointmentId
    }
    return this.apiService.sendGetRequestParams('appointment', params)
  }

  public getUserRecentAppointments() {
    const params = {
      getUserRecentAppointments: true
    }
    return this.apiService.sendGetRequestParams('appointment', params)
  }

  public getDetailsForRating(appointmentId) {
    const params = {
      detailsForRating: true,
      appointment_id: appointmentId
    }
    return this.apiService.sendGetRequestParams('appointment', params)
  }
}
