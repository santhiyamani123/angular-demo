import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {

  addLoanTypesForm !: FormGroup;

  constructor(private fb:FormBuilder) { }

  trackloanName(): void {
    // console.log("value Changed");

    // this.addLoanTypesForm.valueChanges.subscribe(data=>{
    //   console.log(data);
    // })


    // this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe(data=>{
    //   console.log(data);
    // })


  }

  ngOnInit(): void {

    let users=new FormArray([
      new FormControl('santhiya'),
      new FormControl('sandy'),
      new FormControl('san')
    ]);

    console.log(users);
    console.log(users.value);

    // this.addLoanTypesForm.get('loanName')?.valueChanges.subscribe(data=>{
    //   console.log(data);
    // })

    // this.addLoanTypesForm=new FormGroup({
    //   'loanType' : new FormControl(),
    //   'loanName' : new FormControl(),
    //   'loanDescription' : new FormControl()
    // })


    // Direct way of setting the form values at form creations

    // this.addLoanTypesForm=this.fb.group({
    //   'loanType' : new FormControl('Personal Loan'),
    //   'loanName' : new FormControl('Santhiya Loan'),
    //   'loanDescription' : new FormControl('This Is A Laptop')
    // })

   //Two Way

    this.addLoanTypesForm=this.fb.group({
      'loanType' : new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ]),
      'loanName' : new FormControl('',Validators.required),
      'loanDescription' : new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ]))
      
    })

    //  const newLoanObj={

    //   'loanType' : 'Personal Loan san',
    //   'loanName' : 'Santhiya Loan okay',
    //   'loanDescription' : 'This Is A Loan Application'

    //  }

     // Another way of setting values of forms
      // this.addLoanTypesForm.setValue(newLoanObj);

     //The only difference is -> you do not have to pass all "fields/keys"
    //  this.addLoanTypesForm.patchValue(newLoanObj);

  

    // this.addLoanTypesForm.statusChanges.subscribe(data=>{
    //   console.log("Form Status");
    //   console.log(data);
    // })


    // this.addLoanTypesForm.get('loanName')?.statusChanges.subscribe(data=>{
    //   console.log(data);
    // })

  }

  addLoanType(){

    console.log(this.addLoanTypesForm.valid);
    console.log(this.addLoanTypesForm.invalid);
    console.log(this.addLoanTypesForm.pending);
    console.log(this.addLoanTypesForm.pristine);
    console.log(this.addLoanTypesForm.dirty);
    console.log(this.addLoanTypesForm.touched);
    console.log(this.addLoanTypesForm.untouched);
    


    //you can get form state
    // console.log(this.addLoanTypesForm.valid);


    console.log(this.addLoanTypesForm.value);
    // console.log(this.addLoanTypesForm.get('loanName')?.value);
    // this.addLoanTypesForm.valueChanges.subscribe
    // (data=>
    //   {console.log(data);
    // })
  
  }

  resetForm()
  {
    this.addLoanTypesForm.reset();
  }


}
