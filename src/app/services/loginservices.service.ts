import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { book_details, LoginInterface } from '../interfaces/inter';
@Injectable({
  providedIn: 'root'
})
export class LoginservicesService {

  

  log:boolean = false
  APIURL = 'http://127.0.0.1:8000/';
  private subject = new Subject<boolean>();

  constructor(private http :HttpClient) { }

  LoginServices(data:LoginInterface):Observable<any>
  {
    return this.http.post(this.APIURL+'api/token/',data)
  }
  toggleAddTask():void {
    if(localStorage.getItem('access'))
    {
      this.log= true;
    this.subject.next(this.log)
    }
    else
    {
      this.log= false;
    this.subject.next(this.log)
    }
    
    
  }
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

  
  
  Gettoken()
  {
    return localStorage.getItem('access') || ''
  }
  
  GenerateRefresh():Observable<any>
{
 let a = localStorage.getItem('refresh')
 let input = {
  "refresh":a
 }
 console.log('refresh');
 console.log(a);
 
 
 return this.http.post(this.APIURL+'api/token/refresh/',input)
}
saveToken(tokendata:any)
{
  localStorage.setItem('access',tokendata.access)
}
Logout()
{
  localStorage.clear()
}


LoggedIn()
{

    var val = {token:localStorage.getItem('access')}
    return this.http.post<any[]>(this.APIURL+'nice',val );
    
  
  
}

applyLeave(data:any)
{
  return this.http.post(this.APIURL+'applyleave',data)
}
leaveReport()
{
  return this.http.get(this.APIURL+'leave_details')
}

employedetails()
{
  return this.http.get(this.APIURL+'employe-details')
}
Search(data:any)
{
  return this.http.post(this.APIURL+'serach-leave',data)
}
ChangeStatus(data:any)
{
  return this.http.post(this.APIURL+'change-status',data)
}
DeleteEmploye(id:any)
{
  return this.http.delete(this.APIURL+'employe-delete/'+id)
}
CreateEmploye(ob:any)
{
return this.http.post(this.APIURL+'create-employe',ob)

}
GetSingle(id:any)
{
  return this.http.get(this.APIURL+'get-single/'+id)
}
updateEmploye(data:any,id:any)
{
 return  this.http.post(this.APIURL+'update/'+id,data)
}
FindLeave(id:any)
{
  return this.http.get(this.APIURL+'findLeave/'+id)
}

}







