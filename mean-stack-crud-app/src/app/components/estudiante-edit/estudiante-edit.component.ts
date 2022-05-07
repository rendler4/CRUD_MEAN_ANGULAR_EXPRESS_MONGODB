import { Component, OnInit } from '@angular/core';
import { Estudiante } from './../../model/Estudiante';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-estudiante-edit',
  templateUrl: './estudiante-edit.component.html',
  styleUrls: ['./estudiante-edit.component.css']
})
export class EstudianteEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  estudianteData: Estudiante[];
  EstudianteProfile: any = ['1', '2', '3', '4', '5']

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
      grupo: ['', [Validators.required]]
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
      this.editForm.setValue({
        idDocumento: data['idDocumento'],
        nombre: data['nombre'],
        noControl: data['noControl'],
        grado: data['grado'],
        grupo: data['grupo']
      });
    });
  }

  updateEstudiante() {
    this.editForm = this.fb.group({
      idDocumento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombre: ['', [Validators.required]],
      noControl: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      grado: ['', [Validators.required]],
      grupo: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEmployee(id, this.editForm.value)
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
