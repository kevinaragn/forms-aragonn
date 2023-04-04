import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {

  estudiantes: any[] = [];

  estudianteForm: FormGroup;

 
  nombreControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3),
    
    ]
  );


  apellidoControl = new FormControl('', [
    Validators.required,
  ]);


  emailControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor() {
    this.estudianteForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
    });
  }

  onSubmit(): void {
    if (this.estudianteForm.valid) {
      this.estudiantes.push(this.estudianteForm.value);
      this.estudianteForm.reset();
    } else {
      this.estudianteForm.markAllAsTouched()
    }
  }
}
