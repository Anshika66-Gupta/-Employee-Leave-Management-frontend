import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';

import { AuthGuard } from './services/auth.guard';
import { ApplyleaveComponent } from './component/applyleave/applyleave.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoGuard } from './lo.guard';
import { EmployeCrudComponent } from './component/employe-crud/employe-crud.component';
import { EditCreateComponent } from './component/employe-crud/edit-create/edit-create.component';
import { EditComponent } from './component/employe-crud/edit/edit.component';
import { StatusComponent } from './component/status/status.component';
import { SuccessComponent } from './component/success/success.component';
const routes: Routes = [
  {path:'',component:AdminComponent,canActivate:[LoGuard]},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},

  {path:'aplyleave',component:ApplyleaveComponent},
  {path:'employe-crud',component:EmployeCrudComponent},
  {path:'edit-create',component:EditCreateComponent},
  {path:'create/:id',component:EditComponent},
  {path:'cheack-status',component:StatusComponent},
  {path:'success',component:SuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
