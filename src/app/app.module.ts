import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListTasksPage } from '../pages/list-tasks/list-tasks';
import { TasksServices } from '../services/tasks.service';
import { DetailTaskPage } from '../pages/detail-task/detail-task';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Geolocation } from "@ionic-native/geolocation";
import { LaunchNavigator } from '@ionic-native/launch-navigator';


export const firebaseConfig = {
  apiKey: "AIzaSyA0UhW0TltoirXwtY1S1tNa-gx0iwJhql8",
  authDomain: "appgt-561dc.firebaseapp.com",
  databaseURL: "https://appgt-561dc.firebaseio.com",
  projectId: "appgt-561dc",
  storageBucket: "appgt-561dc.appspot.com",
  messagingSenderId: '884474354866'
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListTasksPage,
    DetailTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListTasksPage,
    DetailTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksServices,
    Geolocation,
    LaunchNavigator
  ]
})
export class AppModule {}
