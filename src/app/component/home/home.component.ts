import { Component, OnInit } from '@angular/core';
import { book_details } from 'src/app/interfaces/inter';
import { LoginservicesService } from 'src/app/services/loginservices.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookData:any 
  due_books:any
  user:boolean = false
  near_due:any

  constructor(private login:LoginservicesService, private _snackBar: MatSnackBar,private _ssnackBar: MatSnackBar) { }

  ngOnInit(): void {
    
    if(localStorage.getItem('access'))
    {
     this.user = true
    }
    
      

  }
  


 


}
