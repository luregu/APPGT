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
  task = {};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, public taskService:TasksServices) {
    this.id = navParams.get('id');
    if(this.id != 0){
      //this.task = taskService.getTask(this.id);      
      taskService.getTask(this.id).subscribe(task => this.task = task );
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailTaskPage');
  }

  public saveTask(){
    if (this.id != 0) {
      console.log('Editando una tarea');
        this.taskService.editTask(this.task);
        alert('Tarea modificada con exito');
       }
    else{
      console.log('Guardando una tarea');
      this.task.id = Date.now();
      this.taskService.createTask(this.task);
      alert('Tarea creada con exito');
    }  
    this.navCtrl.pop();
  }

  public deleteTask() {
    console.log('Eliminando una tarea');
    this.taskService.deleteTask(this.task);
    this.navCtrl.pop();
  }

}
