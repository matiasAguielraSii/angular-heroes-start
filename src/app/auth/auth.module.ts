import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroProfileComponent } from '../hero-profile/hero-profile.component';
import { ListadoDeHeroesComponent } from '../listado-de-heroes/listado-de-heroes.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [HeroProfileComponent,ListadoDeHeroesComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
