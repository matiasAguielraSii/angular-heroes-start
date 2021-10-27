import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { addHeroe, buscarHeroeById } from '../store/counter.actions';
import { Heroes, uniqueHero } from '../store/counter.selector';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString;
  //ngx-infinite-scroll
  throttle = 300;
  scrollDistance = 0.2;
  limit = 20;
  page = 1;
  showButton:boolean = false;
  //llamado al selector
  public albumHeores = this.store.pipe(select(Heroes));

  dataLoad:boolean = false;

  // The child component : spinner
  @ViewChild('spi', { static: true }) spinner;


  constructor(private heroesService: HeroesService,
    private router:Router,
    private store:Store<{heroe:Heroe[]}>
    )
    {}

  ngOnInit() {
    this.listarHeroes(1);
  }

  submitSearch() {
    this.heroesService.resetPager();
    this.heroesService.listarHeroes(this.searchString).subscribe((data:any)=>{
      console.log(data);
      this.store.dispatch(buscarHeroeById({heroe: data as Heroe[]}))
    });
  }

  go_to(id){
    this.router.navigateByUrl('/heroe/'+id);
  }
  listarHeroes(primera?:number):void{
    if(primera){
      this.heroesService.resetPager();
    }
    this.heroesService.listarHeroes(this.searchString).subscribe((data) => {
      this.store.dispatch(addHeroe({heroe: data as Heroe[]}))
    })
    
  }

  onScroll():void{
      this.heroesService.listarHeroes(this.searchString, this.heroesService.page + 1).subscribe((data) => {
        this.store.dispatch(addHeroe({heroe: data as Heroe[]}));
      });
  }

}
