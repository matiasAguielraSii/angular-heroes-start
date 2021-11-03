import { async, ComponentFixture, ComponentFixtureAutoDetect, inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { ListadoDeHeroesComponent } from './listado-de-heroes.component';
import { AppComponent } from '../app.component';
import { ModalPollComponent } from '../modal-poll/modal-poll.component';
import { HeroProfileComponent } from '../hero-profile/hero-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { createComponent } from '@angular/compiler/src/core';
import { exec } from 'child_process';

let heroe = [{
  id:'1',
  name:'Spiderman1',
  description: 'El hombre que araña',
  modified:new Date(1518417160),
  thumbnail:
  {
  'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
  'extension': 'jpg'
  },
  resourceURI:'http://gateway.marvel.com/v1/public/characters/1011334',
  teamColor:'yellow'
}]

describe('ListadoDeHeroesComponent', () => {
  let component: ListadoDeHeroesComponent;
  let fixture: ComponentFixture<ListadoDeHeroesComponent>;
  let mock = heroe;
  let heroeService: HeroesService;
 
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[ListadoDeHeroesComponent],
      providers:[HeroesService]
    }).compileComponents();
  })
 
  beforeEach(()=>{
    fixture = TestBed.createComponent(ListadoDeHeroesComponent);
    component= fixture.componentInstance;
    heroeService = TestBed.get(HeroesService);
  })

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should sumbmit serach',()=>{
    spyOn(component,'submitSearch').and.callThrough();
    component.submitSearch();
    expect(component.submitSearch).toHaveBeenCalled();

  });
  it('should go to id',() => {
    spyOn(component,'go_to').and.callThrough();
    component.go_to(heroe[0].id);
    expect(component.go_to).toHaveBeenCalled();
  })
  it('should listar heores',()=>{
    spyOn(component,'listarHeroes').and.callThrough();
    component.listarHeroes();
    expect(component.listarHeroes).toHaveBeenCalled();
  })
  
  it('should next page',()=>{
    spyOn(component,'nextPage').and.callThrough();
    component.nextPage();
    expect(component.nextPage).toHaveBeenCalled();
  })

  it('should prev page',()=>{
    spyOn(component,'prevPage').and.callThrough();
    component.prevPage();
    expect(component.prevPage).toHaveBeenCalled();
  })
});
