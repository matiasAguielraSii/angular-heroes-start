import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Heroe } from '../classes/heroe';
import { addHeroe, backPage, buscarHero,  heroTeam } from './counter.actions';
//modificar*
export let initialState :Heroe[];
initialState=[];
let lastState:Heroe[];
const _counterReducer = createReducer(
  initialState,
  on(addHeroe, (state,{ heroe }) => {
    lastState = state;
    [...heroe];
    console.log(heroe);
    return [...heroe];
  }),
  on(heroTeam,(state,{heroe,color,id})=>{
    let newColor = color
    let identificador = id
    let hero = state.filter((x:Heroe)=>{
      if(x.id == identificador){
        return {
          id: x.id,
          name: x.name,
          description: x.description,
          modified: x.modified,
          thumbnail: x.thumbnail,
          resourceURI: x.resourceURI,
          teamColor: newColor
        }
      }
    })
    console.log(hero)
    let uniqHeroId = hero[0];
    let index = state.indexOf(uniqHeroId);
    let arr = [...state];
    arr[index] = uniqHeroId;
    console.log(arr[index]);
    console.log(uniqHeroId)
    // arr[index].teamColor = color;
    
    return arr;

  })  ,
  on(buscarHero,(state)=>{
    return [...state];
  }),
  on(backPage,(state)=>{
    return lastState;
  })
  

);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
