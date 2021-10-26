# Implementacion de Store con NGRX(introduccion a redux?)

## Pre-requisitos

Se tendrá en cuenta que ya tenemos un app con los componentes y módulos necesarios para la implementación.

## Bueno comencemos

El NGRX Store es como su nombre indica un almacén de datos que funciona en base a estados es decir cambiando el estado anterior de mi storage con el actual. Esto puede ocurrir
por algún pequeño cambio como la edición de la cantidad de un producto en un carrito de compras o en algo mucho más grande como la inserción de una lista completa de datos de productos.

Me gustaría dividir en 3 partes el NGRX Store, ya que te esta manera se me hizo mucho más simple su comprensión:
-actions.
-reducer.
-selector.


Actions: Como su nombre lo indica de acciones traducido al español. serán las acciones/directrices que tomaremos para agregar actualizar o quitar cosas de la Store.

  import { createAction,props } from '@ngrx/store';
  import { Heroe } from '../classes/heroe';

  export const addHeroe = createAction('Hero api Success',props<{heroe:Heroe[]}>());


En este caso solo tenemos una acción que seria agregar súper héroes a un arreglo.

Reducer: La traducción de este seria reducir y lo asocio a reducir 2 estados a 1, ya que en este punto tenemos 2 estados, el estado inicial y el actual.

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

En la constante _counterReducer creamos el Reduce y tenemos que asociarlo a la acción del punto anterior fíjense que el parámetro addHeroe es igual al nombre de la acción addHeroe.
acá se agregará tantos como acciones existan.


Selector: Yo asocio esto a seleccionador lo cual nos da una pequeña pista de que es lo que hacemos en este punto de la implementación de NGRX Store. Seleccionador Seleccionar que seleccionamos?. Aquí donde seleccionamos que queremos retornar si solo algunas propiedades de nuestro objeto o en su defecto el objeto entero. 

import { createSelector } from "@ngrx/store";
import { Heroe } from "../classes/heroe";
import { AppState } from "./app.state";

export const heroeRootSelector = (state:AppState) => state.heroe;

export const Heroes = createSelector(
    heroeRootSelector
    ,(heroe:Heroe[])=>{ return [... new Set(heroe.map((_)=> _))];
    }
)

La constante heroeRootSelector es el nuevo estado y es de tipo appState que es una interfaz que contiene solo la clase de héroe. Ahora donde está todo lo mencionado previamente es en la constante Héroes donde usamos la función map() elegimos como queremos que nos retorne los datos. Si solo el ID o un par de campos del héroe más o el héroe completo.

Ahora que ya tenemos todo lo necesario para trabajar con la store es momento de utilizarla. Vamos al componente en el cual agregaremos la lista de héroes. Y editamos el método que nos trae todos los súper héroes.

  listarHeroes():void{
    this.heroesService.listarHeroes(this.searchString).subscribe((data) => {
      this.store.dispatch(addHeroe({heroe: data as Heroe[]}))
      
    })
    
  }

Como se puede apreciar el consumo del servicio que llama a la API es prácticamente igual lo único que cambia en la función anónima o lambda en donde se llama a la store previamente instanciada en el constructor de la clase. Se usa el método distpach para ejecutar una acción y le entregamos nuestra acción  que creamos al inicio de este documento addHeroe.
Ahora con esto solo actualizamos la store es decir la hicimos cambiar de un stage a otro nuevo con el listado de héroes.
Para poder visualizarlo tenemos que ir a la store y seleccionar nuestro selector que nos trae la data.

  public albumHeores = this.store.pipe(select(Heroes));

Ahora con esto en nuestra propiedad albumHeores tenemos el arreglo de héroes que se encuentra guardado en la storage para de esta manera ser llamado por el DOM y visualizarse para el usuario final.
