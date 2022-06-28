import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { RatingService } from 'src/app/core/services/rating.service';
import { ToastService } from 'src/app/core/services/toast.service';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  app_id: number;
  appointmentDetail
  userRole: string;
  feedback: string = null;
  points: number = 0
  stars = [{id: 1, value: false}, {id: 2, value: false}, {id: 3, value: false}, {id: 4, value: false}, {id: 5, value: false}]
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private appointmentService: AppointmentService,
    private localStorageService: LocalStorageService, private toastService: ToastService, private ratingService: RatingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.app_id = param.app_id;
    }) 
    this.userRole = this.localStorageService.getUserRole()
    this.getUsersDetails()
  }

  getUsersDetails() {
    this.appointmentService.getDetailsForRating(this.app_id)
    .subscribe((res: any) => {
      this.appointmentDetail = res.data[0];
      console.log('res: ', this.appointmentDetail)
    })
  }

  onClickStar(id) {
    for(let i = 0; i < id; i++) {
      this.stars[i].value = true
    }
    for(let i = id; i < 5; i++) {
      this.stars[i].value = false
    }
    this.points = id
  }

  onClickSubmit() {
    if(this.points > 0) {
      const input = {
        points: this.points,
        feedback: this.feedback,
        user_id: this.userRole === '2' ? this.appointmentDetail.customer_id : this.appointmentDetail.mechanic_id,
        appointment_id: this.app_id
      }
      this.ratingService.SubmitRating(input)
      .subscribe((res: any) => {
        if(res.success) {
          this.toastService.generalToast('Feedback Submitted!')
          this.router.navigate([''])
        }
      })
    }
    else {
      this.toastService.failureToast('Please give a star rating!')
    }
  }

}
