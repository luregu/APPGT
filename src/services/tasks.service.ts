import { Injectable  } from "@angular/core";
//import { getNonHydratedSegmentIfLinkAndUrlMatch } from "../../node_modules/ionic-angular/umd/navigation/url-serializer";

@Injectable()

export class TasksServices{
    tasks = [
        {id:1, title:'Tarea 1', description:'Descripcion Tarea 1'},
        {id:2, title:'Tarea 2', description:'Descripcion Tarea 2'},
        {id:3, title:'Tarea 3', description:'Descripcion Tarea 3'}
      ];
    /**
     * getTasks
  
     */
    public getTasks() {
        
            return this.tasks;
    }

    public getTask(id){
        return this.tasks.filter(function(e,i){return e.id == id})[0] || {id:null,title:null,description:null};

    }

    public createTask(task){
        this.tasks.push(task);

    }

    public editTask(task){
        this.tasks.forEach(element => {
            if(element.id == task.id){
                element = task;
            }
        });

    }

    /**
     * name
     */
    public deleteTask(task) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == task.id) {
                this.tasks.splice(i,1);
            }
            
        }
    }
}

