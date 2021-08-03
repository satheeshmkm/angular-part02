import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { zipValidator,pwdValidator } from './custom-validator'; 


@Component({
  selector: 'app-basic-reactive-form',
  templateUrl: './basic-reactive-form.component.html',
  styleUrls: ['./basic-reactive-form.component.css']
})
export class BasicReactiveFormComponent implements OnInit {

  reactiveFrm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.reactiveFrm=this.fb.group({
      userName:['',[Validators.required,Validators.minLength(3)]],
      password:'',
      cnfPassword:['',pwdValidator],
      zip:['',zipValidator]

    })
    this.reactiveFrm.controls.password.valueChanges.subscribe(x=> this.reactiveFrm.controls.cnfPassword.updateValueAndValidity);// Promis to accept the failure case
   }

  ngOnInit(): void {
  }

  regFrmSubmit(){
    this.reactiveFrm.markAsTouched();
  }

}
