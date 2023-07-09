import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registroForm: FormGroup;

  constructor(private router: Router) { 
    this.registroForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required),
      confirmarContraseña: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  register(): void {
    if (this.registroForm.valid) {
      if (this.registroForm.controls.contraseña.value == this.registroForm.controls.confirmarContraseña.value)
      this.router.navigate(['login']);
    } 
  }
}
