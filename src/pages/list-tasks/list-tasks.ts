import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksServices } from '../../services/tasks.service';
import { DetailTaskPage } from '../detail-task/detail-task';

/**
 * Generated class for the ListTasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-tasks',
  templateUrl: 'list-tasks.html',
})
export class ListTasksPage {
  @ViewChild('myNav') nav: NavController;
  tasks = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public tasksService: TasksServices) {
    this.tasks = tasksService.getTasks();
  }

  public goToDetail(id){
    this.navCtrl.push(DetailTaskPage,{id:id} );
  } 
  public createTask(){
    this.navCtrl.push(DetailTaskPage,{id:0});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTasksPage');
  }

}
