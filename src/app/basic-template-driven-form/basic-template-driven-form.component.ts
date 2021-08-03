import { Component, OnInit } from '@angular/core';
import {User} from './user-data-model'

@Component({
  selector: 'app-basic-template-driven-form',
  templateUrl: './basic-template-driven-form.component.html',
  styleUrls: ['./basic-template-driven-form.component.css']
})
export class BasicTemplateDrivenFormComponent implements OnInit {
  userObj= new User(22,"Satheesh","CK","satheeshmkm@gmail.com")

  constructor() { }

  ngOnInit(): void {
  }

}
