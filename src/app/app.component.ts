import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ToDo : string = "";
  ToDoList : object[] = [];
  Completed : boolean = false;

  AddToDo () : void {
    if (this.ToDo != "") {

      var obj : object;

      if (this.ToDoList.length != 0) {
        var lastId = this.ToDoList[this.ToDoList.length - 1]["id"];
        obj = { "id" : lastId + 1,  "todo" : this.ToDo, "deleted" : false, "completed" : false };
      }
      else {
        obj = { "id" : 1,  "todo" : this.ToDo, "deleted" : false, "completed" : false };
      }

      this.ToDoList.push(obj);
      this.ToDo = "";

      console.log(this.ToDoList);

    }
  }

  GetData() : object[]{
    var newList : object[] = [];
    
    for (var i = 0; i < this.ToDoList.length; i++) {
      
      var todo = this.ToDoList[i];
      if ( ! todo["deleted"]) {
        newList.push(todo);
      }

      // if (todo["deleted"] == false) {
      //   newList.push(todo);
      // }z

      // var angka = 10;
      // var hasil = (angka % 2 == 0) ? "genap" : "ganjil";
    }
    
    return newList;
  }

  DeleteToDo(id) : void {

    for (var i = 0; i < this.ToDoList.length; i++) {
      if (this.ToDoList[i]["id"] == id) {
        this.ToDoList[i]["deleted"] = true;
        break;
      }
    }
    console.log(this.ToDoList);
    //this.ToDoList[index]["deleted"] = true;
    //this.ToDoList.splice(index, 1);
  }

  CompleteToDo(e, id){

    for (var i = 0; i < this.ToDoList.length; i++) {
      if (this.ToDoList[i]["id"] == id) {
        
        if (e.target.checked) {
          this.ToDoList[i]["completed"] = true;
          this.Completed = true;
        }
        else{
          this.ToDoList[i]["completed"] = false;
          this.Completed = false;
        }
        
        break;
      }
    }

    console.log(this.ToDoList);
  }

}
