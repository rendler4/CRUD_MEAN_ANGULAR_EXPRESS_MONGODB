import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import {Component, NgZone, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-estudiante-create',
  templateUrl: './estudiante-create.component.html',
  styleUrls: ['./estudiante-create.component.css']
})
export class EstudianteCreateComponent implements OnInit {

  submitted = false;
  estudianteForm: FormGroup;
  EstudianteProfile:any = ['1', '2', '3', '4', '5'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) { this.mainForm(); }

  ngOnInit(): void {
  }

  mainForm() {


    this.estudianteForm = this.fb.group({
      idDocumento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombre: ['', [Validators.required]],
      noControl: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      grado: ['', [Validators.required]],
      grupo: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.estudianteForm.get('noControl').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.estudianteForm.controls;
  }

  onSubmit() {

    alert(this.estudianteForm);
    this.submitted = true;
    if (!this.estudianteForm.valid) {
      return false;
    } else {
      this.apiService.createEstudiante(this.estudianteForm.value).subscribe(
        (res) => {
          console.log('Estudiante registrado exitosamente!')
          this.ngZone.run(() => this.router.navigateByUrl('/estudiantes-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
