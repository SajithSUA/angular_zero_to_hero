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

  styleDiv = 'output-s1';
  styleButton = 'style-button-s1'
  constructor() { }

  ngOnInit() {
  }


  onDelete(selected)
  {
    // children to parent data pass
    this.delete.emit(selected);
  }


  // style change class (we can bind html element style)
  onchange()
  {
    if(this.styleDiv == 'output-s2')
    {
      this.styleDiv = 'output-s1'
      this.styleButton = 'style-button-s1'
    }
    else
    {
      this.styleDiv = 'output-s2'
      this.styleButton = 'style-button-s2'
    }
    
  }
}
