import { TestBed, inject } from '@angular/core/testing';

import { HeroesService } from './heroes.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { of } from 'rxjs';
import { Heroe } from './classes/heroe';
import { exec } from 'child_process';

describe('HeroesService', () => {
  let httpClientSpy: { get: jasmine.Spy}
  let heroService: HeroesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesService],
      imports: [HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
    heroService = new HeroesService(httpClientSpy as any);
  });
  
  
  it('should be created', inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));

  it('should resetPager function', inject([HeroesService], (service: HeroesService) => {
    spyOn(service,'resetPager').and.callThrough();
    expect(service).toBeTruthy();
    service.resetPager();
    expect(service.resetPager).toHaveBeenCalled();
    expect(service.page).toEqual(0);
  }));

  

  it('deberia retornar objeto heroe service', inject([HeroesService], (service: HeroesService) => {
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
    spyOn(service,'listarHeroes').and.callThrough();
    service.listarHeroes().subscribe(resultado => {
      expect(resultado).toEqual(heroe);
     
    })
    expect(service.page).toBeGreaterThanOrEqual(0);
  }));



  it('deberia retornar el total de paginas ', inject([HeroesService], (service: HeroesService) => {
    
    spyOn(service,'getTotal').and.callThrough();
    service.getTotal();
    expect(service.getTotal).toHaveBeenCalled;
    expect(service.total).toBeGreaterThanOrEqual(0);
   
  }));

  it('deberia retornar getHeroes ', inject([HeroesService], (service: HeroesService) => {
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

    spyOn(service,'getHeroes').and.callThrough();
    
    service.getHeroes().subscribe(data=>{
      expect(data).toEqual(heroe);
    })
    expect(service.page).toBeGreaterThanOrEqual(0);
  }));

  it('deberia retornar el heroe por id getHeroe ', inject([HeroesService], (service: HeroesService,done:DoneFn) => {
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

    spyOn(service,'getHeroe').and.callThrough();
    
    service.getHeroe('1').subscribe(data=>{
      expect(data).toEqual(heroe);
      expect(data.length).toBe(1);
      expect(data[0].name).toEqual('Spiderman1');
    })
    
  }));
});
