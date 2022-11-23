import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginservicesService } from 'src/app/services/loginservices.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-employe-crud',
  templateUrl: './employe-crud.component.html',
  styleUrls: ['./employe-crud.component.css']
})
export class EmployeCrudComponent implements OnInit {
  details:any
  constructor(private service : LoginservicesService, private router:Router) { }

  ngOnInit(): void {
this.service.employedetails().subscribe(
  data=>{
    console.log(data);
    this.details = data
    
  }
)
  }

  deleteEmploye(id:any,index:any)
  {
    this.service.DeleteEmploye(id).subscribe(data=>{
      console.log(data);
       if(data == 'employee deleted' )
      {
        console.log('waiting');
        
          this.details.splice(index,1)
      }
      
    })
  }
  create()
  {
    this.router.navigate(['edit-create'])
  }


}

