import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
isLoggedIn:boolean= false

toggleLogin(){
  this.isLoggedIn=!false
}

skills:String[]=["angular","TypeScript", "HTML", "CSS"]


userRole : string = "admin"
}
