import { createSelector } from "@ngrx/store";
import { Heroe } from "../classes/heroe";
import { AppState } from "./app.state";

export const heroeRootSelector = (state:AppState) => state.heroe;

export const Heroes = createSelector(
    heroeRootSelector
    ,(heroe:Heroe[])=>{ return [... new Set(heroe.map((_)=> _))];
    }
)



