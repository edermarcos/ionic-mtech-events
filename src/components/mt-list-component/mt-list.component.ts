import { Component, Input, SimpleChange } from '@angular/core';
import { ModalController, NavController } from "ionic-angular";

import { MtFormFeedbackPage } from "../../pages/mt-form-feedback/mt-form-feedback";
import { EventInterface } from "../../interfaces/event-interface";
import { MtDetailEventPage } from "../../pages/mt-detail-event/mt-detail-event";
import { SwitchEventService } from "../../providers/switch-event/switch-event-service";

@Component({
  selector: 'mt-list',
  templateUrl: 'mt-list.component.html'
})
export class MtListComponent {

  constructor(
    private readonly navCtrl: NavController,
    private readonly switchEvent: SwitchEventService,
    private readonly modalCtrl: ModalController) {
  }

  @Input() events: EventInterface[];
  @Input() onNullImage: string = 'https://picsum.photos/80/80';
  @Input() typeDate: string = 'shortTime';

  onItemClick(event: EventInterface) {
    if (event.breakFast) {
      return;
    }
    if (event.surveyEnable) {
      let modal = this.modalCtrl.create(MtFormFeedbackPage, { event: event });
      return modal.present();
    }
    this.navCtrl.push(MtDetailEventPage, { event });
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (this.events) {
      this.switchEvent.getCurrentOrLastEvent(this.events, true)
        .subscribe(event => {
          if (event.id) {
            this.events.find(f => f.id === event.id).available = false;
          }
        });
    }
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }
  ionViewCanEnter() {
    console.log('ionViewCanEnter');
  }
  ionViewCanLeave() {
    console.log('ionViewCanLeave');
  }
}
