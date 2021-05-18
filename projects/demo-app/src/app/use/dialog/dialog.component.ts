import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  

  constructor( public router:Router, public dialogref:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }
   close() {
    this.dialogref.close()
   }
}
