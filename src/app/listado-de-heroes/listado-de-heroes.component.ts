import { Component, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../classes/heroe';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { addHeroe, backPage  } from '../store/counter.actions';
import { Heroes } from '../store/counter.selector';


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
  superHeroe:Heroe[];
  dataLoad:boolean = false;
  

  // The child component : spinner
  @ViewChild('spi', { static: true }) spinner;


  constructor(public heroesService: HeroesService,
    private router:Router,
    private store:Store<{heroe:Heroe[]}>
    )
    {}
  inicia:number=0;
  ngOnInit() {

    
    this.inicia==0?this.listarHeroes():'';
    this.heroesService.getTotal();
    
  }

  submitSearch() {
    this.heroesService.resetPager();
    this.heroesService.listarHeroes(this.searchString).subscribe((data:any)=>{
      this.store.dispatch(addHeroe({heroe: data as Heroe[]}))
    });
  }

  go_to(id){
    this.router.navigateByUrl('/heroe/'+id);
  }
  listarHeroes():void{
    this.heroesService.listarHeroes(this.searchString).subscribe((data:Heroe[]) => {
      let superHeroe:Heroe[];
      superHeroe = data.map((e:Heroe)=>{ 
        return {
          id : e.id,
          name: e.name,
          description: e.description,
          modified: new Date,
          thumbnail: e.thumbnail,
          resourceURI: e.resourceURI,
          teamColor:e.teamColor
        }
      }) 
      
      if(this.heroesService.cargo == 1){
        this.store.dispatch(addHeroe({heroe: superHeroe as Heroe[]}))
      }
      
    })
    
  }

  nextPage():void{
      this.dataLoad = true;
      this.heroesService.listarHeroes(this.searchString, this.heroesService.page + 1).subscribe((data:Heroe[]) => {
       
        let superHeroa = data.map((e:Heroe)=>{ 
          return {
            id : e.id,
            name: e.name,
            description: e.description,
            modified: new Date,
            thumbnail: e.thumbnail,
            resourceURI: e.resourceURI,
            teamColor: e.teamColor
          }
        }) 
        this.dataLoad = false ;
        this.store.dispatch(addHeroe({heroe: superHeroa  as Heroe[]}));
      },
      error =>{
        this.dataLoad = false ;
      }
      );
  }
  
  prevPage():void{
    this.spinner = true;
    // this.heroesService.listarHeroes(this.searchString, this.heroesService.page - 1).subscribe((data) => {
    //   let superHeroa = data.map((e:Heroe)=>{ 
    //     return {
    //       id : e.id,
    //       name: e.name,
    //       description: e.description,
    //       modified: new Date,
    //       thumbnail: e.thumbnail,
    //       resourceURI: e.resourceURI,
    //       teamColor:e.teamColor
    //     }
    //   }) 
      this.heroesService.page = this.heroesService.page - 1
      this.store.dispatch(backPage());
      this.dataLoad = false;
      // this.store.dispatch(addHeroe({heroe: superHeroa as Heroe[]}));
      this.spinner = false;
    // },
    // error=>{
    //   this.dataLoad = error;
    // });
    
  }

}
