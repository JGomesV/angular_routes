import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './component/middle/middle.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: '', component: MiddleComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
