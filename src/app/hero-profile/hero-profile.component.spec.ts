
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesService } from '../heroes.service';

import { HeroProfileComponent } from './hero-profile.component';

describe('HeroProfileComponent', () => {
  let component: HeroProfileComponent;
  let fixture: ComponentFixture<HeroProfileComponent>;
  let heroeService: HeroesService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [ HeroProfileComponent ],
      providers:[HeroesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponent);
    heroeService = TestBed.get(HeroesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});