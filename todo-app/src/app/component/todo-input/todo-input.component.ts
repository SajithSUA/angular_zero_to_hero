import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  userName = ''
  todos = []

  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    this.todos.push(this.userName)
  }

  onDelete(selectname: string)
  {
    console.log(selectname);

    this.todos.forEach((element,index)=>{
      if(element == selectname) this.todos.splice(index,1);
   });
  }

}
