import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
studentName:string="Manar"
imgSrc:string="./assets/Nature.jpeg"
isDisabled:boolean=true
message:string=""
ButtonClick(){
  this.message="Button was clicked!"
}
}
