import {Component, OnInit} from '@angular/core';
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  todoList: any[] = [];

  constructor(private todoService: TodoService) {
  }
 ngOnInit(): void {
    this.todoService.firestoreCollection.valueChanges({idField : 'id'}).subscribe(
      item => {
        this.todoList = item.sort((a:any, b:any) =>
        { return a.isCompleted - b.isCompleted});
      })
 }
  onClick(titleInput: HTMLInputElement) {
    if (titleInput.value){
      this.todoService.addTodo(titleInput.value);
      titleInput.value = '';
    }
  }

  onStatusChange(id: string, newStatus: boolean) {
    this.todoService.updateStatus(id, newStatus);
  }

  onDelete(id:string) {
    this.todoService.deleteTask(id);
  }
}
