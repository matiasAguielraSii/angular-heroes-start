import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';

const routes: Routes = [
  { 
  path: 'listado-heroes',
   component: ListadoDeHeroesComponent
  },
  { 
    path: 'heroe',
    loadChildren:()=>import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
    },
  { 
    path: 'modal-poll',
     component: ModalPollComponent},
  { 
    path: '**', redirectTo: '/listado-heroes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

