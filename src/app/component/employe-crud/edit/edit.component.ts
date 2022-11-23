import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginservicesService } from 'src/app/services/loginservices.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employe_name:string = ''
  designation:string = ''
  employe_id:string = ''
  email:string = ''
  mobile_number = ''
  last_name:string=''
  id:any
  details:any;
  showError:boolean = false
  comment :string = 'cheack the email given'
  constructor(private service:LoginservicesService, private route:ActivatedRoute, private router :Router) {
    document.body.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/02/00/68/69/360_F_200686968_KS9NVTJgvjMQs2FniVHyIJaAIcg5p7D0.jpg')";
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || 0
    console.log(this.id);
    this.service.GetSingle(this.id).subscribe(data=>{
      console.log(data);
      this.details = data
      this.employe_name = this.details.employe_name
      this.designation = this.details.designation
      this.employe_id = this.details.employe_id
      this.email = this.details.email
      this.mobile_number = this.details.mobile_number

    })

  }

editEmploye()
{
  let ob = {
    
      employe_name :this.employe_name,
      designation :this.designation,
      
      email :this.email,
      mobile_number : this.mobile_number
    
  }
this.service.updateEmploye(ob,this.id).subscribe(data=>{
  console.log(data);
  if(data=='updated')
  {
    this.router.navigate(['/employe-crud'])
  }
},
error=>{
  this.showError = true
})
}


}
