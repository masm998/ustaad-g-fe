import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private apiService: ApiService) { }

  public getServiceDetails(serviceId) {
    const params = {
      service_id: serviceId,
      serviceDetails: true
    }
    return this.apiService.sendGetRequestParams('service', params)
  }
}
