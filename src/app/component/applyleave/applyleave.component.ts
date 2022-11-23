import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginservicesService } from 'src/app/services/loginservices.service';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {
  employe_id:string = ''
  starting_date:any
  ending_date:any
  designation:string = ''
  employe_name:string = ''
  showError:boolean = false
  comment :string = 'cheack the email given'
  file_selected:any;
  constructor(public service:LoginservicesService, private route:Router) { 
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')";
  }

  ngOnInit(): void {
  }
  apply()
  {
    const ob = {
      employe_id:this.employe_id,
      starting_date:this.starting_date,
      ending_date:this.ending_date,
      designation:this.designation,
      employe_name:this.employe_name


    }
    const form = new FormData
    form.append('pdf',this.file_selected,this.file_selected.name)
    var details = JSON.stringify(ob)
    
    form.append('details',details)
    
    this.service.applyLeave(form).subscribe(data=>{
      console.log(data);
      if(data=='leave applied')
      {
        this.route.navigate(['/success'])
      }
      
    },
    error=>{
      if(error.error == 'leave exceed 4')
      {
        this.showError = true
        this.comment = 'leave exceed 4'
        console.log(error);
        
      }
      else
      {
        this.showError = true
        this.comment = 'validation error'
        
      }
    }
    )
    
  }
  fileSelected(event:any)
  {
    this.file_selected = event.target.files[0]
  }

}
