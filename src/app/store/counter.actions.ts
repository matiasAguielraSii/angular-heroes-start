import { createAction,props } from '@ngrx/store';
import { Heroe } from '../classes/heroe';

export const addHeroe = createAction('Hero api Success',props<{heroe:Heroe[]}>());
export const reset = createAction('Hero Reset');