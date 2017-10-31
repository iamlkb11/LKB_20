import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string;
  firstName:string;
  lastName:string;
  fullName:string;
  ngOnInit(){
  	this.firstName="Kiran";
  	this.lastName="Reddy";
  	this.title="Mr.";
  	this.fullName="";
  }
   getFullName(fname,lname){
   	// debugger;
   	this.fullName= this.title+fname+" "+lname
  }
}
