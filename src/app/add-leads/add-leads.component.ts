import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-leads',
  templateUrl: './add-leads.component.html',
  styleUrls: ['./add-leads.component.scss']
})
export class AddLeadsComponent implements OnInit {
  styleprop='purple';
  stylecolor='#fff';
  txtColor='blue';
  styleclsprop='c3';
  conditionalclsprop='c4';
 

  pageHeading="Welcome To Angular 10";
  pageCount=10;
  userObject={'firstname':'santhiya','lastname':'santhosh'};
  isUserLoggedIn=true;


  imgUrl="angular.png";
  imgAlt="This Is Missing Image Text";

  txtColorVal='green';

  colVal=2;

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(){
    console.log("Hello From SANTHIYA");
  }

  highlightBGcolor(){
    console.log("Hi, I am being hightlighted");
  }

  inputBox()
  {
    console.log("This Is Input Box");
  }


  myfunction(){
    alert('Show Alert');
  }

  getClsName()
  {
    return 'c3';
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
