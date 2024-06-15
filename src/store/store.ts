import {combineReducers, createStore, legacy_createStore} from "redux";
import {countReducer} from "./features/counterReducer";



const rootReducer = combineReducers({
    counter: countReducer
})


export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;