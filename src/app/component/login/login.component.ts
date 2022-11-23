import { Component, OnInit } from '@angular/core';
import { LoginInterface } from 'src/app/interfaces/inter';
import { LoginservicesService } from 'src/app/services/loginservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string=''
password:string = ''

  constructor(private login:LoginservicesService, private route:Router) { 
    document.body.style.backgroundImage = "url('path/to/your/image.jpg')";
  }

  ngOnInit(): void {
  }
Login()
{
var log:LoginInterface = {
  email:this.username,
  password:this.password
}
this.login.LoginServices(log).subscribe(data=>{
  console.log(data);
  
  localStorage.setItem('access',data.access)
  localStorage.setItem('refresh',data.refresh)
  this.toggleAddTask()
  this.route.navigate([''])
})

}
toggleAddTask(){
  this.login.toggleAddTask()
  // this.usernames = localStorage.getItem()
  
}
}
