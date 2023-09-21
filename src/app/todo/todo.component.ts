import { Component } from '@angular/core';
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private todoService: TodoService) {
  }

  onClick(titleInput: HTMLInputElement) {
    this.todoService.addTodo(titleInput.value);
    titleInput.value = '';
  }
}
