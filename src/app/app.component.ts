import { Component, OnInit ,OnChanges, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginservicesService } from './services/loginservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges  {
  title = 'Tracker app';

  loggedIn:boolean = false
  subscription:Subscription;
  due_books:any
 count:any
  constructor(private service:LoginservicesService,private route:Router )
  {
    this.subscription = this.service
    .onToggle()
    .subscribe((value)=>{this.loggedIn=value
    console.log(this.loggedIn);
    
    })
  }


  ngOnChanges():void{
    console.log("CHANGES")
  }


  ngOnInit(): void {
    console.log("jjjj");
    
    if(localStorage.getItem('access'))
    {
      this.loggedIn = true
      
       
  
    }
    else
    {
      this.loggedIn = false
    }
    
        
    // this.refresh()
  }

  logout()
{
  localStorage.clear();
  this.loggedIn = false
  // this.refresh()
  this.route.navigate(['login'])

}
  

}
