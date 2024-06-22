import {combineReducers, legacy_createStore} from 'redux'
import {scoreReducer} from "./features/scoreReducer";

const rootReducer = combineReducers({
    data: scoreReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store