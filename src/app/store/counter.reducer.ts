import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Heroe } from '../classes/heroe';
import { addHeroe, buscarHeroeById, heroTeam } from './counter.actions';
//modificar*
export let initialState :Heroe[];
initialState=[];
const _counterReducer = createReducer(
  initialState,
  on(addHeroe, (state,{ heroe }) => {
    [...heroe]
    return [...heroe];
  }),
   on(buscarHeroeById,(state,{heroe}) =>{
    
    return [...heroe]
  }),
  on(heroTeam,(state,{heroe,color})=>{
    let h = [...heroe]
    let arr = h[0];
    let newHero:Heroe
    newHero = {
      id : arr.id,
      name : arr.name,
      description : arr.description,
      modified : arr.modified,
      thumbnail : arr.thumbnail,
      resourceURI : arr.resourceURI,
      teamColor : color
    }
    return [newHero];
  })  

);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
