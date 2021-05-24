import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PersonasService } from 'src/app/personas.service';
import  Swal  from 'sweetalert2';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  titularAlert: string='';

  constructor(private fb:FormBuilder, private personaService: PersonasService) { 
    this.createform();
  }

  ngOnInit(): void {
  }

  get nameInvalid(){
    return this.form.get('name').invalid && this.form.get('name').touched
  }

  get invalidLastName(){
    return this.form.get('lastName').invalid && this.form.get('lastName').touched
  }

  get invalidEmail(){
    return this.form.get('email').invalid && this.form.get('email').touched
  }

  get invalidCountry(){
    return this.form.get('country').invalid && this.form.get('country').touched
  }

  get invalidPhone(){
    return this.form.get('phone').invalid && this.form.get('phone').touched
  }

  get invalidMessage(){
    return this.form.get('message').invalid && this.form.get('message').touched
  }

  createform(){
      this.form = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        lastName: ['',[Validators.required, Validators.minLength(3)]],  
        email: ['',[Validators.required, Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')]],
        country: ['', [Validators.required, Validators.minLength(2)]],
        phone: ['',[Validators.required, Validators.minLength(6)]],
        message: ['',[Validators.required, Validators.minLength(6)]],
      });
  }

  save(){
    this.personaService.addPersona(this.form.value);
    
  }

  reset(){
    this.form.reset();
  }

  showModal(){
    Swal.fire(
      'Succes',
     'Information sent, thanks',
      'success'
    )
  }

}
