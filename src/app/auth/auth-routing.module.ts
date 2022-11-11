import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
 
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }
