import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { HeroProfileComponent } from '../hero-profile/hero-profile.component';
import { ListadoDeHeroesComponent } from '../listado-de-heroes/listado-de-heroes.component';

const routes: Routes=[
  {
    path:'',
    children: [
      {path: 'heroe/:id', component : HeroProfileComponent},
      {path: 'listado-heroes', component : ListadoDeHeroesComponent},
      {path: '**',redirectTo:'listado-heroes'}
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }
