import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { userToken, Usuario } from '../interfaces/interfaces';
const url = environment.URL;



@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarioLogeado:boolean=false;
  token:any="";
  userName:string="";
  userRole:string="";


  constructor(private http:HttpClient) { }
  
  async login(usuario: Usuario ){

    return new Promise(resolve=>{

      this.http.post<userToken>(`${url}/account/login`,usuario)
    .subscribe(resp=>{
      console.log(resp);
      if(resp.status=="ok"){
        this.guardarToken(resp.token);
        this.leerToken();
        resolve(true);
      }
      else{
        this.borrarToken();
        resolve(false);



      }




    }); 

    
      

    })

  }

  guardarToken(token:string){
    localStorage.setItem("token",token);
    this.token=token;
    this.usuarioLogeado=true;

  }
  borrarToken(){
    localStorage.removeItem("token");
    // this.token="";
    // this.usuarioLogeado=false;
  }
  cargarToken(){
    var tokenString=localStorage.getItem("token")?.toString();
    this.token=tokenString;
    if(this.token){
      this.usuarioLogeado=true;
      this.leerToken();
    }
    
  }
  leerToken(){
    let jwt = this.token;
    let jwtData = jwt.split('.')[1];
    let decodedJSONJwtData = window.atob(jwtData);
    let decodedJwt = JSON.parse(decodedJSONJwtData);
    this.userName=decodedJwt['unique_name'];
    this.userRole=decodedJwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];


  }
  logout(){
    this.borrarToken();
    this.usuarioLogeado=false;
    this.userName="";
    this.userRole="";
    
  }
  async postUsuario(usuario:Usuario){
    return new Promise (resolve =>{
      this.http.post<userToken>(`${url}/account`,usuario)
      .subscribe(resp=>{
        console.log(resp);
        if(resp.status=="ok")
        {
          this.guardarToken(resp.token);
          this.leerToken();
          resolve(true);
        }
        else{
          this.borrarToken();
          resolve(false);
      }
      })
      })
  }



}
