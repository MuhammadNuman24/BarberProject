import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'
import { DialogComponent } from '../dialog/dialog.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";
  
  constructor(public dialog: MatDialog, private router: Router,
    public cookiesservice: CookieService
  ) { }
  ngOnInit(): void {
  }

  dologin() {
    if(this.email == "ali@gmail.com" && this.password == "numan"){
     this.router.navigateByUrl('/first')}
    else {
      alert("Enter Valid Details.")}
  };
  opendialog() {
    this.dialog.open(DialogComponent)
  }
  clickme() {

  }
}