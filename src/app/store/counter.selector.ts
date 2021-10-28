import { NgIf } from "@angular/common";
import { ActionReducer, createFeatureSelector, createSelector, INIT, UPDATE } from "@ngrx/store";
import { Heroe } from "../classes/heroe";


export const Heroes = createSelector(
    createFeatureSelector('heroe')
    ,
    (heroe:Heroe[])=>{ 
        return [... new Set(heroe.map((_)=> _))]
    },
    
)

export const uniqueHero = (heroeId:string) =>createSelector(
    createFeatureSelector('heroe'),
    (heroe:Heroe[])=> {
        let parseNumber = Number(heroeId);
        let uniqHero = heroe.filter( h => { 
            if(Number(h.id) == parseNumber){
                return h
            } 
           
        });
        return(uniqHero);
    }
)

export const metaReducerLocalStorage = (reducer: ActionReducer<any>):ActionReducer<any> =>{
    return (state,action) => {
        if(action.type === INIT || action.type == UPDATE){
            const storageValue = localStorage.getItem('state');
            if(storageValue){
                try{
                    return JSON.parse(storageValue);
                }catch{
                    localStorage.removeItem('state');
                }
            }
        }
        const nextState = reducer(state,action);
        localStorage.setItem("state",JSON.stringify(nextState));
        return nextState;
    }
}



