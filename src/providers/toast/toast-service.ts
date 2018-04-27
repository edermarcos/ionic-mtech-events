import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  constructor(private readonly toastCtrl: ToastController) { }

  showToast(msg: string, duration: number = 2500, position: string = 'top', dismissOnPageChange: boolean = false) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration,
      position,
      dismissOnPageChange,
    });
    toast.present();
  }

}
