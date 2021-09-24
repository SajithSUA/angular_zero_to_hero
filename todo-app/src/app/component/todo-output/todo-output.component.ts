import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-output',
  templateUrl: './todo-output.component.html',
  styleUrls: ['./todo-output.component.css']
})
export class TodoOutputComponent implements OnInit {

  // parent to child data pass
  @Input() toDo

  // children to parent data pass
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  
  onDelete(selected)
  {
    // children to parent data pass
    this.delete.emit(selected);
  }
}
