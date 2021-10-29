import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, ComponentFixtureAutoDetect, inject, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { HeroesService } from '../heroes.service';
import { HeroProfileComponent } from './hero-profile.component';
import { ResponseOptions } from '@angular/http';
import { AppComponent } from '../app.component';
import { ModalPollComponent } from '../modal-poll/modal-poll.component';


describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;

  beforeEach(async(() => {
    heroesService = TestBed.get(HeroesService);
    TestBed.configureTestingModule({
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: HeroesService, useClass: HeroServiceMock }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        HeroProfileComponent,
        AppComponent,
        ModalPollComponent
      ]
    }
    
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia crear al heroe',()=>{
    spyOn(heroesService,'getHeroe').and.callThrough();
    component.ngOnInit();
    expect(heroesService.getHeroe).toHaveBeenCalled();
  })

  it('should test resetPager function',() => {
    
  })

});

let heroesService: HeroesService;
 const HEROE_OBJECT ={
   id:'1',
   name:'Spiderman',
   description: 'El hombre que araña',
   modified:new Date(1518417160),
   thumbnail:
   {
   'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
   'extension': 'jpg'
   },
   resourceURI:'http://gateway.marvel.com/v1/public/characters/1011334',
   teamColor:'yellow'};
 
class HeroServiceMock {
   public teams = new Map().set("1","yellow");

   public getHeroe(){
      //delay no existe en tipo observaable
      // return of({data:{results:HEROE_OBJECT}}).delay(1000);
      return of({data:{results:HEROE_OBJECT}});   
   }

   public getTeamColor(){
     return "yellow";
   }
 }

