import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from './classes/heroe';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
//testing
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

@Injectable()
export class HeroesService {

  private protocol = 'https:';
  private ApiUrl = '//gateway.marvel.com:443/v1/public/';
  public heroes: Array<Heroe> = [];

  public page = 0;
  public step = 20;
  public total = 0;

  public group_colors = {"azul" : "#1f8ff7",
                        "violeta":"#a43de3",
                        "naranjo":"#df5c0f",
                        "verde":"#0ea521"}
  
  public teams = new Map();

  constructor(private http: HttpClient) { }

  resetPager() {
    this.page = 0;
  }

  getHeroes (nameStartsWith?: string, page?: number) {
    console.log("TEAMS");
    console.log(Array.from(this.teams));
    if (page || page === 0) {
      this.page = page;
    }
    const url = this.protocol + this.ApiUrl + 'characters?apikey=f5ef91e82e31aeb7015457c893f6f4c9'
    + '&offset=' + (this.page * this.step)
    + (nameStartsWith ? ('&nameStartsWith=' + nameStartsWith) : '');
    return this.http.get(url).pipe((map((dato:any) => {console.log(dato.data.results); dato => dato.data.results})));
  }

  getHeroe(id) :Observable<any>{
    const url = this.protocol + this.ApiUrl + 'characters/' + id + '?apikey=f5ef91e82e31aeb7015457c893f6f4c9';
    return this.http.get<any>(url).pipe(map((dato:any)=> dato.data.results || []  ));
  }

  getTeamColor(id):string{
    if(this.teams.get(id)!=undefined){
      console.log(this.teams.get(id));
      return this.teams.get(id);
    }
    else{
      return "";
    }
  }
  getTotal(nameStartsWith?: string, page?: number){
    const url = this.protocol + this.ApiUrl + 'characters?&apikey=f5ef91e82e31aeb7015457c893f6f4c9'
    + '&offset=' + (this.page * this.step)
    + (nameStartsWith ? ('&nameStartsWith=' + nameStartsWith) : '');
    return this.http.get(url).subscribe((dato:any) => {
      this.total = Math.ceil(dato.data.total / this.step);
    })
  }
   cargo:number=0;
  listarHeroes(nameStartsWith?: string, page?: number){
    if (page || page === 0) {
      this.page = page;
    } this.cargo ++;
    const url = this.protocol + this.ApiUrl + 'characters?&apikey=f5ef91e82e31aeb7015457c893f6f4c9'
    + '&offset=' + (this.page * this.step)
    + (nameStartsWith ? ('&nameStartsWith=' + nameStartsWith) : '');
    return this.http.get(url).pipe(map((dato:any) => 
      dato.data.results || []
      ))
  }

}



