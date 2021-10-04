import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetail } from '../../modle/user-details';
import { ExampleService } from '../../service/example.service';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {

  userdetail: UserDetail;
  constructor(
    private exampleService: ExampleService,
  ) 
  { }

  ngOnInit() {
  }

  onSubmit(myform: NgForm) {
    this.userdetail = {
      name: myform.value.name,
      email: myform.value.email,
      phoneNo: myform.value.phoneNo,
    }

    this.exampleService.addUser(this.userdetail)
    myform.reset();
  }
}
