import { Component, OnInit } from '@angular/core';
import{MatDialog} from '@angular/material/dialog'
import { LoginComponent } from '../../use/login/login.component';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( public dialog:MatDialog) { }

  ngOnInit(): void {
  }
onclick(){
  this.dialog.open(LoginComponent)
}
}
