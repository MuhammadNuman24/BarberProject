import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { CatComponent } from '../cat/cat.component';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor( public dialog:MatDialog) { }

  ngOnInit(): void {
  }
open(){
  this.dialog.open(CatComponent);
}

}
