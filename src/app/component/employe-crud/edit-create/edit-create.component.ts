import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginservicesService } from 'src/app/services/loginservices.service';

@Component({
  selector: 'app-edit-create',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.css']
})
export class EditCreateComponent implements OnInit {
  employe_name:string = ''
  designation:string = ''
  employe_id:string = ''
  email:string = ''
  mobile_number = ''
  last_name:string=''
  showError:boolean = false
  comment :string = 'cheack the email given'
  constructor(private service:LoginservicesService, private route :Router) { }

  ngOnInit(): void {
  }
  createEmploye()
  {
    let ob = {
      designation:this.designation,
      employe_name:this.employe_name +' ' + this.last_name,
      
      email:this.email,
      mobile_number:this.mobile_number    
    }
    
    this.service.CreateEmploye(ob).subscribe(data=>{
      
      if(data=='employe created')
      {
        this.route.navigate(['/employe-crud'])
      }
      
        
        
      
    },
    error=>{
     
      this.showError = true
    }
    )
  
  
  }

}


