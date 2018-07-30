import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailTaskPage } from './detail-task';

@NgModule({
  declarations: [
    DetailTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailTaskPage),
  ],
})
export class DetailTaskPageModule {}
