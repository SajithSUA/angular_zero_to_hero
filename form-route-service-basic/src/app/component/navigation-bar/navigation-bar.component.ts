import { Component, OnInit } from '@angular/core';
import { NavigationType } from '../../enum/navigation-type.enum';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  navigationType
  home = 'acvtive'
  angularForm =''
  reactiveForm = ''
  details = ''

  ngOnInit() {
    this.navigationType = NavigationType;
    this.onChangeActiveState(NavigationType.HOME)
  }

  onChangeActiveState(type:any)
  {
    console.log(type);
    
    if(type == NavigationType.HOME)
    {
      this.home = 'active'
      this.angularForm = ''
      this.reactiveForm = ''
      this.details = ''
    }
    else if(type == NavigationType.ANGULAR_FORM)
    {
      this.home = ''
      this.angularForm = 'active'
      this.reactiveForm = ''
      this.details = ''
    }
    else if(type == NavigationType.REACTIVE_FORM)
    {
      this.home = ''
      this.angularForm = ''
      this.reactiveForm = 'active'
      this.details = ''
    }
    else if(type == NavigationType.DETAILS)
    {
      this.home = ''
      this.angularForm = ''
      this.reactiveForm = ''
      this.details = 'active'
    }
    
  }
}
