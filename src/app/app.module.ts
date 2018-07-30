import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListTasksPage } from '../pages/list-tasks/list-tasks';
import { TasksServices } from '../services/tasks.service';
import { DetailTaskPage } from '../pages/detail-task/detail-task';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ListTasksPage,
    DetailTaskPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ListTasksPage,
    DetailTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksServices
  ]
})
export class AppModule {}
