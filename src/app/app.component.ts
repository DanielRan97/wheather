import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private activeRouter:ActivatedRoute, private router:Router) { }
  b1():void{
    document.getElementById(`BcityList`).style.background="white";
    document.getElementById(`BbyCity`).style.background="darkgray";
  }
  b2():void{
    document.getElementById(`BcityList`).style.background="darkgray";
    document.getElementById(`BbyCity`).style.background="white";
  }
  ngOnInit(): void {
   if(this.router.navigate([`cityList/`],)){
    document.getElementById(`BcityList`).style.background="white";
   }
   else{
    document.getElementById(`BbyCity`).style.background="white";
   }

  }
}
