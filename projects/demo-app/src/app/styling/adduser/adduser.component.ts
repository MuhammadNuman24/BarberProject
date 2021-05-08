import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 img = "../../../assets/face.png";

  ngOnInit(): void {
  }
  onselect(event:any){
    if (event.target.file){
      var reader= new FileReader();
      reader.readAsDataURL(event.target.file[0]);
      reader.onload=(event:any)=>{
        this.img=event.target.result;
      }

    }
  }
}
