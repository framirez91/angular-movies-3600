import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mantusuario',
  templateUrl: './mantusuario.component.html',
  styleUrls: ['./mantusuario.component.css']
})
export class MantusuarioComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:UserService,private router:Router) { }
  nuevoUsuario:Usuario = {}
  error:boolean = false;
  errorMsj:string = "";
  
  nuevoUsuarioForm:FormGroup= this.fb.group({
    "email" : new FormControl(null,Validators.required),
    "password": new FormControl(null,Validators.required),
    
  })


  ngOnInit(): void {
  }
  get email(){
    return this.nuevoUsuarioForm.get('email');

  }
  get password(){
    return this.nuevoUsuarioForm.get('password');

  }
  async submitForm(){
    if(this.nuevoUsuarioForm.valid){
      this.nuevoUsuario.email  = this.email?.value;
      this.nuevoUsuario.password = this.password?.value;
      
      const result = await this.service.postUsuario(this.nuevoUsuario);
      if (result == true){
        this.router.navigate(['/home']);
        
        }else{
          this.error = true;
          this.errorMsj = "El usuario ya existe";

        }

          
    }
  }

}
