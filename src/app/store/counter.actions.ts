import { createAction,props } from '@ngrx/store';
import { Heroe } from '../classes/heroe';

export const addHeroe = createAction('Hero api Success',props<{heroe:Heroe[]}>());
export const heroTeam = createAction('[change team hero]',props<{heroe:Heroe[],color:string,id:string}>());

export const buscarHero = createAction('[Marvel] api succes');

export const backPage = createAction('[Marvel] back page')
