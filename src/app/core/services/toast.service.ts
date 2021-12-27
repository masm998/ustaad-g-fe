import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }


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
      duration: 2000,
      position: "top",
      cssClass: "hd-general-toast"   // general middle, theme colors white/purple
    });

    toast.present();
  }

  async generalCenterToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
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
      cssClass: "hd-faliure-toast"
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