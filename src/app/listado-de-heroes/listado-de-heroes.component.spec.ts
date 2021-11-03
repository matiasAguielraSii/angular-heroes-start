import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';

import { ListadoDeHeroesComponent } from './listado-de-heroes.component';

describe('ListadoDeHeroesComponent', () => {
  let component: ListadoDeHeroesComponent;
  let fixture: ComponentFixture<ListadoDeHeroesComponent>;

  let httpClientSpy: {get: jasmine.Spy}
  let heroeService: HeroesService;
  beforeEach(async(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    heroeService = new HeroesService(httpClientSpy as any);
    TestBed.configureTestingModule({
      declarations: [ ListadoDeHeroesComponent ]
    })
    .compileComponents();
   
  }));

  beforeEach(() => {
    
    // fixture = TestBed.createComponent(ListadoDeHeroesComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    heroeService = new HeroesService(httpClientSpy as any);
  });

  it('should create', () => {
    expect(heroeService).toBeTruthy();
  });

  // it('deberia retornar objeto heroe lista',(done:DoneFn)=>{

  //   let heroe = [{
  //     id:'1',
  //     name:'Spiderman1',
  //     description: 'El hombre que araña',
  //     modified:new Date(1518417160),
  //     thumbnail:
  //     {
  //     'path': 'https://i.pinimg.com/originals/c2/93/56/c293563aa553250601d8cb768c044d4b',
  //     'extension': 'jpg'
  //     },
  //     resourceURI:'http://gateway.marvel.com/v1/public/characters/1011334',
  //     teamColor:'yellow'
  //   }]

  //   httpClientSpy.get.and.returnValue(of(heroe));
  //   heroeService.listarHeroes().subscribe(
  //     resultado=>{
        
  //     }
  //   );
  // })
});
