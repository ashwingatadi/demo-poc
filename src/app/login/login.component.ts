import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') form: NgForm; 
  submitClicked: boolean = false;
  message:string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitClicked = true;
    this.message =  this.form.valid ? "Logged in user with email " + this.form.value.email: '';
  }
}
