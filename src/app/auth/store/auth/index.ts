import { ActionReducerMap } from "@ngrx/store";
import { reducer as AuthReducer, authFeatureName, State as AuthState  } from "./auth.reducer";

export interface AppState {
    [authFeatureName] : AuthState,
}

export const appReducer: ActionReducerMap<AppState> = {
    [authFeatureName]: AuthReducer
}