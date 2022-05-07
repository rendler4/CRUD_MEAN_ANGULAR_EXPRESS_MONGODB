import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

import { EstudianteCreateComponent } from './components/estudiante-create/estudiante-create.component';
import { EstudianteEditComponent } from './components/estudiante-edit/estudiante-edit.component';
import { EstudianteListComponent } from './components/estudiante-list/estudiante-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './service/api.service';
import { CalificacionesCreateComponent } from './components/calificaciones-create/calificaciones-create.component';




@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EstudianteCreateComponent,
    EstudianteEditComponent,
    EstudianteListComponent,
    CalificacionesCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
