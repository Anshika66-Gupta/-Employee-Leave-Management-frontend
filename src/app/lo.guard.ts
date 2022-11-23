import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginservicesService } from './services/loginservices.service';

@Injectable({
  providedIn: 'root'
})
export class LoGuard implements CanActivate {
  datas:any
  constructor(private login:LoginservicesService,private route :Router)
  {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    if(localStorage.getItem('access'))
    {
     






      console.log('false1');
      
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

      console.log('false2');
      
      this.route.navigate(['login'])
     return false
      
    }
  
  
}
nice()
{

 return this.login.LoggedIn().pipe(map((data)=>{ this.datas = data
   console.log(this.datas);
   
   if(this.datas.status == 'true')
   {
    console.log('false3');
    
     return true
   }
   console.log('false4');
   if(localStorage.getItem('refresh'))
{
  try{
    console.log('token');
    
    var a = this.TokenGenerator()
    console.log(a);
    
    
    
 return true
}
catch
{
  this.login.Logout()
  this.route.navigate(['login'])
  return false
}
}
   
this.route.navigate(['login'])

 return false }))
}

TokenGenerator()
{
  return this.login.GenerateRefresh().pipe(
    map((data)=>{
      this.login.saveToken(data)
      if(data.staus == false)
      {
        console.log('false from return');
        
        return data
      }
      else
      {
        console.log('true from t');
        
        return data
      }
      
    })
  )
}
  
}
