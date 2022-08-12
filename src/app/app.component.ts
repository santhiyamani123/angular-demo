import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simplecrm';
  success_msg=true;

  contacts = [
  {
    'firstname':'santhiya',
    'lastname':'murugesan',
    'contactid':'1234'
  },
  {
    'firstname':'sangeetha',
    'lastname':'kandavel',
    'contactid':'12345'
  },
  {
    'firstname':'santhosh',
    'lastname':'kumar',
    'contactid':'123456'
  }
  ]
  
  toggle(){
    this.success_msg=!this.success_msg;
  }
}
