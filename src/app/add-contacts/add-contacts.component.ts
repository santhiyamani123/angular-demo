import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss']
})
export class AddContactsComponent implements OnInit {
  title = 'simplecrm';
  success_msg=true;


  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.success_msg=!this.success_msg;
  }
}
