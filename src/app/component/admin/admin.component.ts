import { Component, OnInit } from '@angular/core';
import { LoginservicesService } from 'src/app/services/loginservices.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
details:any
key:any
  constructor(private service:LoginservicesService) { }

  ngOnInit(): void {
    this.service.leaveReport().subscribe(data=>{
      console.log(data);
      this.details = data
      
    })
  }
  search()
  {
    let ob = {
      key:this.key
    }
    this.service.Search(ob).subscribe(data=>{
      
      this.details = data
      
    })
  }
  changeStatus(status:any,id:any,index:any)
  {
    console.log(status,id);
    
    let ob = {
      status : status,
      id :id
    }

    this.service.ChangeStatus(ob).subscribe(data=>{
      console.log(data);
      
      if(data == "leave applied succesfully")
      {
        this.details[index].status = status
      }
    })
  }

}
