import { Injectable } from '@angular/core';
import { UserDetail } from '../modle/user-details';

@Injectable()
export class ExampleService {

  constructor() { }

  // example Service
  userDetails: UserDetail[]=[]

  addUser(userdetail: UserDetail)
  {
    this.userDetails.push(userdetail);
  }

  getUsers():UserDetail[]
  {
    console.log(this.userDetails);
    
    return this.userDetails;
  }
}
