import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController, private router: Router) { }


  //by default toasts are top
  //success green top
  //success general center
  //faliure red top
  //faliure general
  //general middle

  async successToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top",
      cssClass: "hd-success-toast"
    });

    toast.present();
  }

  async generalToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: "top",
      cssClass: "hd-general-toast"   // general middle, theme colors white/purple
    });

    toast.present();
  }

  async generalCenterToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: "middle",
      cssClass: "hd-general-toast"
    });

    toast.present();
  }

  async failureToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top",
      cssClass: "hd-red-toast"
    });

    toast.present();
  }


  async loginSuccessToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top",
      cssClass: "hd-green-toast"
    });

    toast.present();
  }

  async requestToast(message: string, id: number) {
    console.log('id: ', id)
    const toast = await this.toastController.create({
      message: message,
      duration: 10000,
      position: "top",
      buttons: [{
        text: 'Open',
        handler: () => {
          this.router.navigate(['ustaad/appointment-request', id])
        }
      }],
      cssClass: "hd-green-toast"
    });

    toast.present();
  }

  async loginFailureToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top",
      cssClass: "hd-red-toast"
    });

    toast.present();
  }

  async middlelFailureRedToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "middle",
      cssClass: "hd-red-toast"
    });

    toast.present();
  }

  async warningToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top",
      cssClass: "hd-red-toast"
    });

    toast.present();
  }
}