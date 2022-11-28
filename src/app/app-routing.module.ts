import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MantpeliculasComponent } from './pages/mantpeliculas/mantpeliculas.component';
import { MantusuarioComponent } from './pages/mantusuario/mantusuario.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
  path: 'about',
  component: AboutComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'mantpeliculas',
  component: MantpeliculasComponent
},
{
  path: 'registro',
  component: MantusuarioComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},
{
  path: '**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
