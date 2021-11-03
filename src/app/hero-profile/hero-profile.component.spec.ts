
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesService } from '../heroes.service';

import { HeroProfileComponent } from './hero-profile.component';

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

describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;
  let heroeService: HeroesService;
  let mock = heroe
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [ HeroProfileComponent ],
      providers:[HeroesService]
    })
    .compileComponents();
  }));

  

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    component = fixture.componentInstance;
    heroeService = TestBed.get(HeroesService);
    
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should goBack', () => {
    spyOn(component,'goBack').and.callThrough();
    component.goBack();
    expect(component.goBack).toHaveBeenCalled();
  });

  it('should getTeam', () => {
    spyOn(component,'getTeam').and.callThrough();
    component.getTeam(mock[0].teamColor);
    expect(component.goBack).toHaveBeenCalled();
  });
  it('should buscarHero', () => {
    spyOn(component,'buscarHero').and.callThrough();
    component.buscarHero();
    expect(component.buscarHero).toHaveBeenCalled();
  });
});