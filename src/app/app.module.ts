import { BrowserModule } from '@angular/platform-browser';
import { BackgroundMode } from "@ionic-native/background-mode";
import { Network } from "@ionic-native/network";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from "../config/firebase.config";

// Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AgmCoreModule } from '@agm/core';
import { Ionic2RatingModule } from "ionic2-rating";

// Components
import { MyApp } from './app.component';
import { MtListComponent } from "../components/mt-list-component/mt-list.component";
import { MtCardComponent } from "../components/mt-card-component/mt-card-component";
import { MtTabsComponent } from "../components/mt-tabs-component/mt-tabs.component";
import { MtSlideComponent } from "../components/mt-slide-component/mt-slide.component";

// Pages
import { MtEventPage_1Page } from "../pages/mt-event-page-1/mt-event-page-1";
import { MtEventPage_2Page } from "../pages/mt-event-page-2/mt-event-page-2";
import { MtEventPage_3Page } from "../pages/mt-event-page-3/mt-event-page-3";
import { MtMapsPage } from "../pages/mt-maps-page/mt-maps-page";
import { MtFormFeedbackPage } from "../pages/mt-form-feedback/mt-form-feedback";
import { MtDetailEventPage } from "../pages/mt-detail-event/mt-detail-event";
import { MtSigninPage } from "../pages/mt-signin/mt-signin";
import { MtAboutPage } from "../pages/mt-about-page/mt-about-page";

// Services
import { DataService } from '../providers/data/data-service';
import { ToastService } from '../providers/toast/toast-service';
import { AlertService } from "../providers/alert/alert-service";
import { LoaderService } from "../providers/loader/loader-service";
import { NetworkService } from "../providers/network/network-service";
import { StorageService } from "../providers/storage/storage-service";
import { SwitchEventService } from "../providers/switch-event/switch-event-service";
import { LocalNotifications } from "@ionic-native/local-notifications";
import { NotificationService } from "../providers/notification/notification-service";

@NgModule({
  declarations: [
    MyApp,
    MtTabsComponent,
    MtSlideComponent,
    MtEventPage_1Page,
    MtEventPage_2Page,
    MtEventPage_3Page,
    MtMapsPage,
    MtAboutPage,
    MtFormFeedbackPage,
    MtDetailEventPage,
    MtSigninPage,
    MtListComponent,
    MtCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPxN_-ncHex7P1JpCYZjpJnMSD5ytiyBA'
    }),
    Ionic2RatingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MtTabsComponent,
    MtSlideComponent,
    MtEventPage_1Page,
    MtEventPage_2Page,
    MtEventPage_3Page,
    MtMapsPage,
    MtAboutPage,
    MtFormFeedbackPage,
    MtDetailEventPage,
    MtSigninPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataService,
    BarcodeScanner,
    ToastService,
    StorageService,
    AlertService,
    LoaderService,
    SwitchEventService,
    LocalNotifications,
    NotificationService,
    BackgroundMode,
    Network,
    NetworkService
  ]
})
export class AppModule {}
