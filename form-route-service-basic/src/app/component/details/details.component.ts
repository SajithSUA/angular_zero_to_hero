import { Component, OnInit } from '@angular/core';
import { UserDetail } from '../../modle/user-details';
import { ExampleService } from '../../service/example.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  users: UserDetail[];

  constructor(
    private exampleService: ExampleService,
  ) { }

  ngOnInit() {    
    this.users = this.exampleService.getUsers();
  }


}
