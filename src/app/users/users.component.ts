import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title="This Is User Component";

  constructor() { }

  ngOnInit(): void {
  }

  updateValue()
  {
    
  }

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
}
