import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private apiService: ApiService) { }

  public SubmitRating(input) {
    return this.apiService.sendPostRequest('rating', input)
  }
}
