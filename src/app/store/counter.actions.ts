import { createAction,props } from '@ngrx/store';
import { Heroe } from '../classes/heroe';

export const addHeroe = createAction('Hero api Success',props<{heroe:Heroe[]}>());
export const buscarHeroeById = createAction('Hero api Succes',props<{heroe:Heroe[]}>());
export const heroTeam = createAction('[change team hero]',props<{heroe:Heroe[],color:string}>());
