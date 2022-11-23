import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptorsService } from './services/token-interceptors.service';


import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';

import { LoginservicesService } from './services/loginservices.service';
import { ApplyleaveComponent } from './component/applyleave/applyleave.component';
import { AdminComponent } from './component/admin/admin.component';
import { EmployeCrudComponent } from './component/employe-crud/employe-crud.component';
import { EditCreateComponent } from './component/employe-crud/edit-create/edit-create.component';
import { EditComponent } from './component/employe-crud/edit/edit.component';
import { StatusComponent } from './component/status/status.component';
import { SuccessComponent } from './component/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
   
    ApplyleaveComponent,
    AdminComponent,
    EmployeCrudComponent,
    EditCreateComponent,
    EditComponent,
    StatusComponent,
    SuccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatSnackBarModule,
    MatInputModule
    

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorsService,multi:true},LoginservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
