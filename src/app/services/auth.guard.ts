import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginservicesService } from './loginservices.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  datas:any
  constructor(private login:LoginservicesService, private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(localStorage.getItem('access'))
        {
          
          
         


          console.log('lofalse2');
          
          console.log(this.nice());
          
          return this.nice()

    
        }
        else
        {
          // this.login.LoggedIn().subscribe(data=>{
          //   this.datas = data
          //   console.log(this.datas);
            
            
    
          // })
          // console.log(this.datas);
          
          
          // if(this.datas.status == 'true')
          // {
          //   console.log('lotrue');
          //   var username = this.datas.username
            
          //   return true
    
          // }
          // else
          // {
          //   console.log('lofalse');
            
          //    this.route.navigate(['login'])
          //   return false
          // }
          console.log('lofalse1');
          
          
           
          return true
        }
      
  }
 nice()
 {

  return this.login.LoggedIn().pipe(map((data)=>{ this.datas = data
    console.log(this.datas);
    
    if(this.datas.status == 'true')
    {
      console.log('lofalse3');
      
      this.route.navigate([''])
      return false
    }
console.log('lofalse4');
if(localStorage.getItem('refresh'))
{
  try{
  this.TokenGenerator()
  this.route.navigate([''])
  return false
  }
  catch
  {
    this.login.Logout()
    this.route.navigate(['login'])
    return true
  }
}

  return true }))
 }


 TokenGenerator()
 {
   return this.login.GenerateRefresh().pipe(
     map((data)=>{
       this.login.saveToken(data)
       
     })
   )
 }
  }
  
