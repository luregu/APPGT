import { Injectable  } from "@angular/core";
import { getNonHydratedSegmentIfLinkAndUrlMatch } from "../../node_modules/ionic-angular/umd/navigation/url-serializer";

@Injectable()

export class TasksServices{
    tasks = [
        {id:1, title:'Tarea 1', description:'Descripcion Tarea 1'},
        {id:2, title:'Tarea 2', description:'Descripcion Tarea 2'},
        {id:1, title:'Tarea 3', description:'Descripcion Tarea 3'}
      ];
    /**
     * getTasks
  
     */
    public getTasks() {
        
            return this.tasks;
    }

    public getNote(id){
        return this.tasks.filter(function(e,i){return e.id == id})[0] || {id:null,title:null,description:null};

    }
}

