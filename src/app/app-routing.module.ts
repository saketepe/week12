import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
    
const routes: Routes = [
  {path:"student-list", component:StudentListComponent},
  {path:"", redirectTo: "student-list", pathMatch:"full"}, 
  {path:"student-details/:id", component: StudentDetailComponent},
  {path:"**" , component:StudentListComponent}
  // {path:"**" , component:PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
