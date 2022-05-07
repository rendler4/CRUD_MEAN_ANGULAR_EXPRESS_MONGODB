import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

import { EstudianteCreateComponent } from './components/estudiante-create/estudiante-create.component';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';
import { EstudianteEditComponent } from './components/estudiante-edit/estudiante-edit.component';
import { CalificacionesCreateComponent } from "./components/calificaciones-create/calificaciones-create.component";



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  /*Estudiantes*/
  { path: '', pathMatch: 'full', redirectTo: 'create-estudiante' },
  { path: 'create-estudiante', component: EstudianteCreateComponent },
  { path: 'edit-estudiante/:id', component: EstudianteEditComponent },
  { path: 'estudiantes-list', component:  EstudianteListComponent},
  { path: 'create-calificacion/:id', component: CalificacionesCreateComponent },
  /*Calificaciones*/





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
