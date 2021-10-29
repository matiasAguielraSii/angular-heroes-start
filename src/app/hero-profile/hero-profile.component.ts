import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';
import { select, Store } from '@ngrx/store';

import {   buscarHero, heroTeam } from '../store/counter.actions';
import {  uniqueHero } from '../store/counter.selector';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal;
  private id;
  public heroe: Heroe[];
  public question_modal: string;
  public team:string = "";
  public albumHeores$:Observable<Heroe[]>

  dataLoad:boolean;
 

  constructor(private route: ActivatedRoute, 
              private heroesService: HeroesService,
              private _route: Router,
              private store:Store<{heroe:Heroe[]}>) { }

  ngOnInit() {
    this.buscarHero();
  }

  goBack() {
    
    this._route.navigate['/listado-heroes'];
  }
  colorHeroe : string;
  getTeam(team:string):void{
    this.team = team;
    this.heroesService.group_colors.azul
    this.store.dispatch(heroTeam({heroe:this.heroe, color:this.team,id:this.id}));
    // this.heroesService.teams.set(this.heroe.id, this.team);
  }

  launchModal():void{
    //this.question_modal="¿Dónde ubicarías a tu súper héroe?";
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

  
  buscarHero(){
    this.route.params.subscribe(params => {
      
     this.id = params.id;
      this.store.dispatch(buscarHero());
      this.albumHeores$ = this.store.pipe(select(uniqueHero(this.id)));
      this.heroesService.getHeroe(this.id).subscribe(data =>{
        this.heroe = data.map((e:Heroe)=>{ 
          return   {
            id : e.id,
            name: e.name,
            description: e.description,
            modified: new Date,
            thumbnail: e.thumbnail,
            resourceURI: e.resourceURI,
            teamColor:"azul"
          }
        })
      })

    }
   )
  }
  

}
