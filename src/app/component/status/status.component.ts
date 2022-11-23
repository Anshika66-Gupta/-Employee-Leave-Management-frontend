import { Component, OnInit } from '@angular/core';
import { LoginservicesService } from 'src/app/services/loginservices.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  key:string=''
  cur_status:Boolean = false
  details:any;
  constructor(private service:LoginservicesService) { }

  ngOnInit(): void {
    
  }
  findLeave()
  {
    this.service.FindLeave(this.key).subscribe(data=>{
      this.details = data
      console.log(data);
      console.log(this.details);
      
      
      this.cur_status = true
    })
  }


}
