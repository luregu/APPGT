import { Injectable  } from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
//import { Observable } from 'rxjs/Observable';

@Injectable()

export class TasksServices{
    constructor(public afDB: AngularFireDatabase){}
    tasks = [];
    //tasks: Observable<any[]>;
    /**
     * getTasks
  
     */
    public getTasks() {
        
            //return this.tasks;
            //return this.afDB.list('Tareas/');
            //return this.tasks = this.afDB.list('Tareas/').valueChanges();
            return this.afDB.list("Tareas/").valueChanges();
            
    }

    public getTask(id){
        //return this.tasks.filter(function(e,i){return e.id == id})[0] || {id:null,title:null,description:null};
        return this.afDB.object('Tareas/' + id).valueChanges();
    }

    public createTask(task){
        this.afDB.database.ref('Tareas/'+ task.id).set(task);
        //this.tasks.push(task);

    }

    public editTask(task){
        /*this.tasks.forEach(element => {
            if(element.id == task.id){
                element = task;
            }
        });*/
        this.afDB.database.ref('Tareas/'+ task.id).set(task);

    }

    /**
     * name
     */
    public deleteTask(task) {
        /*for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == task.id) {
                this.tasks.splice(i,1);
            }
            
        }*/
        this.afDB.database.ref('Tareas/'+ task.id).remove();

        
    }
}

