import {combineReducers, createStore} from "redux";
import {cardReducer} from "./card-reducer";


const rootReducer = combineReducers({
    card: cardReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

