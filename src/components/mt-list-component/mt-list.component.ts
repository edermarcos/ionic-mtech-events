import { Component, Input, SimpleChange } from '@angular/core';
import { NavController } from "ionic-angular";

import { EventInterface } from "../../interfaces/event-interface";
import { MtFormFeedbackPage } from "../../pages/mt-form-feedback/mt-form-feedback";
import { MtDetailEventPage } from "../../pages/mt-detail-event/mt-detail-event";
import { SwitchEventService } from "../../providers/switch-event/switch-event-service";
import { NotificationService } from "../../providers/notification/notification-service";

@Component({
  selector: 'mt-list',
  templateUrl: 'mt-list.component.html'
})
export class MtListComponent {

  constructor(
    private readonly navCtrl: NavController,
    private readonly switchEvent: SwitchEventService,
    private readonly notification: NotificationService) {
  }

  @Input() events: EventInterface[];
  @Input() onNullImage: string = 'https://picsum.photos/80/80';
  @Input() typeDate: string = 'shortTime';

  onItemClick(event: EventInterface) {
    if (event.breakFast) {
      return;
    }
    this.navCtrl.push(event.surveyEnable ? MtFormFeedbackPage : MtDetailEventPage, { event });
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (this.events) {
      this.switchEvent.getCurrentOrLastEvent(this.events, true)
        .subscribe(event => {
          if (event.id && !event.available) {
            return this.events.find(f => f.id === event.id).available = false;
          } else if (event.available && event.surveyEnable) {
            this.notification.showNotification({ id: event.date, text: 'Hola', title: event.eventName })
          }
        });
    }
  }
}
