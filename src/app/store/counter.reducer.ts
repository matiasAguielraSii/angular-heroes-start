import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Heroe } from '../classes/heroe';
import { addHeroe, backPage, buscarHero,  heroTeam } from './counter.actions';

export let initialState :Heroe[];
initialState=[];
let lastState:Heroe[];
const _counterReducer = createReducer(
  initialState,
  on(addHeroe, (state,{ heroe }) => {
    lastState = state;
    [...heroe];
    return [...heroe];
  }),
  on(heroTeam,(state,{heroe,color,id})=>{
    
    const stateCopi:Heroe [] = JSON.parse(JSON.stringify(state))
    const i = stateCopi.find(e=> e.id == id);
    let index;
    if(i){
        index = stateCopi.indexOf((i));
    }
    stateCopi[index].teamColor = color
    return stateCopi;
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
