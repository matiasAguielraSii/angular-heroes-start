import { NgIf } from "@angular/common";
import { createSelector } from "@ngrx/store";
import { Heroe } from "../classes/heroe";
import { AppState, HeroeState } from "./app.state";

export const heroeRootSelector = (state:AppState) => state.heroe;
export const uniqueHeroSelector = (state:AppState) => state.heroe;
let inicializador = 0;
export const Heroes = createSelector(
    heroeRootSelector
    ,
    (heroe:Heroe[])=>{ 
        return [... new Set(heroe.map((_)=> _))]
    },
    
)

export const uniqueHero = (heroeId:string) =>createSelector(
    heroeRootSelector,
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



