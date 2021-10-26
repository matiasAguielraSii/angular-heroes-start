import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './pages/heroes/heroes.component';

import { HeroProfileComponent } from '../hero-profile/hero-profile.component'


@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
