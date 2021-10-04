import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFormComponent } from './component/angular-form/angular-form.component';
import { DetailsComponent } from './component/details/details.component';
import { HomeComponent } from './component/home/home.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'angularForm',
    component: AngularFormComponent
  },
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  // ridirect not related paths in to /home using '**' 
  //this must add last 
  
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
