import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Heroe } from '../classes/heroe';
import { addHeroe, buscarHeroeById, heroTeam } from './counter.actions';

export const initialState :Heroe[]=[];

let inicializador = 0
let arreglo=[];
const _counterReducer = createReducer(
  initialState,
  on(addHeroe, (state,{ heroe }) => {
    console.log({heroe})
    // let arr =state.concat([...heroe])
    // if(inicializador != 0){
    //   arr.splice(0,1);
    //   inicializador = 0
    // }
    arreglo = [...heroe]
    return [...heroe];
  }),
   on(buscarHeroeById,(state,{heroe}) =>{
    inicializador = 1;
    console.log(state);
    return [...heroe]
  }),
  on(heroTeam,(state,{heroe,color})=>{
    console.log(color);
    console.log(heroe);
    return heroe
  })  

);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
