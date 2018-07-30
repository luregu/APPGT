import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksServices } from '../../services/tasks.service';

/**
 * Generated class for the DetailTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-task',
  templateUrl: 'detail-task.html',
})
export class DetailTaskPage {
  task = {id:null, title:null, description:null};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public taskService:TasksServices) {
    this.id = navParams.get('id');
    this.task = taskService.getNote(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTaskPage');
  }

}
