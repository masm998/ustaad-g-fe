import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AppointmentService } from 'src/app/core/services/appointment.service';
import { config } from 'src/environments/environment';
import { io } from 'socket.io-client'

@Component({
  selector: 'app-searching-mechanic',
  templateUrl: './searching-mechanic.page.html',
  styleUrls: ['./searching-mechanic.page.scss'],
})
export class SearchingMechanicPage implements OnInit {
  socket = io('ws://localhost:3000')
  appointmentId: number
  prefix = config.backend_url
  appointmentData: any
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.appointmentId = params.appointmentId;
    })

    this.getAppointmentData();
    this.socket.on('acceptAppointment', (arg) => {
      if(arg.socketId) {
        console.log('arg: ', arg)
        this.router.navigate(['accepted-appointment', this.appointmentId])
      }
    })
  }

  getAppointmentData() {
    this.appointmentService.appointmentDataForSearchMechanic(this.appointmentId)
    .subscribe((res: any) => {
      if(res.success) {
        this.appointmentData = res.data[0]
        this.appointmentData.address = this.appointmentData.address.replaceAll('undefined','');
      }
    })
  }

  onCancel() {
    console.log('cancel clicked')
  }
}
