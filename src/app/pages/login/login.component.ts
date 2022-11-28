import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:UserService, private router:Router) { }
  usuario:Usuario={};
  error:boolean = false;
  errorMsj:string = "";
  loginForm:FormGroup = this.fb.group({
    "email":new FormControl(null,Validators.compose([Validators.required,Validators.email])),
    "password":new FormControl(null,Validators.required)
  })

  ngOnInit(): void {
  }
  async submitForm(){
    console.log("form submit");
    if(this.loginForm.valid){

      this.usuario.email = this.email?.value;
      this.usuario.password = this.password?.value;

      const result= await this.service.login(this.usuario);
      if(result){
        this.router.navigate(['/home']);

      }else{
        this.error=true;
        this.errorMsj = "Usuario o contraseña incorrectos";
      }
      // .subscribe(resp=>{
      //   console.log("consola login",resp);
      //   this.router.navigate(['/home']);


      // },error=>{
      //   this.error=true;
      //   this.errorMsj = error.error
      // })

    }
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

}
