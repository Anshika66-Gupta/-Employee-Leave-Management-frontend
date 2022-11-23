import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor,HttpHandler,HttpEvent,HttpRequest } from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { LoginservicesService } from './loginservices.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorsService implements HttpInterceptor {

  constructor(private inject:Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(LoginservicesService)
    let authreq = req
    let jwttoken = this.AddtokenHeader(req,authservice.Gettoken())
    
    
    return next.handle(jwttoken).pipe(
      catchError(errorData=>{
        if(errorData.status == 401)
        {
          
          
        return this.HandleRefreshToken(req,next)
        }
        // authservice.Logout()
        return throwError(errorData)
        
      })
      
     
    )
  }

  HandleRefreshToken(req: HttpRequest<any>, next: HttpHandler)
  {
    
    
    let authservices = this.inject.get(LoginservicesService)
    return authservices.GenerateRefresh().pipe(
      switchMap((data:any)=>{
        
        
        authservices.saveToken(data)
        
        
        return next.handle(this.AddtokenHeader(req,localStorage.getItem('access')))
      }),
    
    
      
    )
  }











  AddtokenHeader(req: HttpRequest<any>,token:any)
  {
    return req.clone({
      headers:req.headers.set('Authorization','Bearer '+token)
    })
  }
}






