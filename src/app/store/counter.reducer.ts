import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Heroe } from '../classes/heroe';
import { addHeroe, reset } from './counter.actions';

export const initialState :Heroe[]=[];

const _counterReducer = createReducer(
  initialState,
  on(addHeroe, (state,{ heroe }) => {
    let arr =state.concat([...heroe])
    return arr;
  })
  
  
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}