import { Component, OnInit } from '@angular/core';
import { Estudiante } from './../../model/Estudiante';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-calificaciones-create',
  templateUrl: './calificaciones-create.component.html',
  styleUrls: ['./calificaciones-create.component.css']
})
export class CalificacionesCreateComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  estudianteData: Estudiante[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router



  ) { }

  ngOnInit(): void {


    this.updateEstudiante();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEstudiante(id);
    this.editForm = this.fb.group({
      idDocumento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombre: ['', [Validators.required]],
      noControl: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      grado: ['', [Validators.required]],
      grupo: ['', [Validators.required],],
      materia: ['', [Validators.required],],
      calificacion: ['', [Validators.required],]
    })
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('noControl').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEstudiante(id) {
    this.apiService.getEstudiante(id).subscribe(data => {

      //alert(data['materia']);

/*      if (data['materia'] === undefined) {
        data['materia']= null;
      }
      if (data['calificacion'] === undefined) {
        data['calificacion']= null;
      }*/
      data['materia']= null;
      data['calificacion']= null;
      //alert(data['materia']);

      this.editForm.setValue({
        idDocumento: data['idDocumento'],
        nombre: data['nombre'],
        noControl: data['noControl'],
        grado: data['grado'],
        grupo: data['grupo'],
        materia: data['materia'],
        calificacion: data['calificacion'],
      });
    });
  }

  updateEstudiante() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEstudiante(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/estudiantes-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
