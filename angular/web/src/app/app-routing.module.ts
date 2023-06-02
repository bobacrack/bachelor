import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { RegisterAAComponent } from './register-aa/register-aa.component';
import { RegisterAAAComponent } from './register-aaa/register-aaa.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/A', pathMatch: 'full' },
  { path: 'main/A', component: MainComponent },
  { path: 'register/A', component: RegisterComponent },
  { path: 'register/AA', component: RegisterAAComponent },
  { path: 'register/AAA', component: RegisterAAAComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
