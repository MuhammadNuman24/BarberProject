import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'
import { DialogComponent } from '../dialog/dialog.component';
import {FormBuilder, FormGroup} from  '@angular/forms';
import {LoginForm} from '../../Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  @Output()
  login = new EventEmitter <LoginForm> ();
  email: any;
  password: any;

   constructor(public dialog: MatDialog, private router: Router, private fb: FormBuilder) { }

   ngOnInit(): void { 
   }
   
 dologin(){
  if( this.email=="numanrazzaq24@gmail.com" && this.password == "numan24"){
    this.router.navigateByUrl('./first')}
    else {
      alert("Enter Valid Details.")
    }
  
 }
  opendialog() {
    this.dialog.open(DialogComponent)
  }
}