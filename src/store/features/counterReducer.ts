export type CounterType = {
    count: number;
    score: number;
    max: number;
    isOpen: boolean;
}
export const initialState: CounterType = {
    count: 0,
    score: 0,
    max: 0,
    isOpen: true
}
type AddActionType = {
    type: 'ADD_COUNT'
}
type ChangeMaxCountType = {
    type: 'CHANGE-MAX-COUNT',
    max: number
}
type AddActionScoreType = {
    type: 'ADD-SCORE'
}
type ResetActionType = {
    type: 'RESET-COUNT'
}
type OpenSettignsType ={
    type: 'OPEN-SETTINGS'
}
type CloseSettingsType = {
    type: 'CLOSE-SETTINGS'
}

type ActionsType = AddActionType | ResetActionType | OpenSettignsType | AddActionScoreType | ChangeMaxCountType | CloseSettingsType

export const countReducer = (state: CounterType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD_COUNT": {
            return {...state, count: state.count + 1}
        }
        case "ADD-SCORE":{
            return {...state, score: state.score + 1}
        }
        case "CHANGE-MAX-COUNT": {
            return {...state, max: action.max}
        }
        case "RESET-COUNT": {
            return {...state, score: 0}
        }
        case "OPEN-SETTINGS": {
            return {...state, isOpen: !state.isOpen}
        }
        case "CLOSE-SETTINGS": {
            return {...state, isOpen: !state.isOpen}
        }
        default: return state
    }
}
export const addCountStore = () => {
    return {type: 'ADD_COUNT'} as const
}
export const addScoreStore = () => {
    return {type: 'ADD-SCORE'} as const
}
export const resetCountStore = () => {
    return {type: 'RESET-COUNT'} as const
}
export const openSettings = () => {
    return {type: 'OPEN-SETTINGS'} as const
}
export const closeSettigns = () => {
    return {type: 'CLOSE-SETTINGS'} as const
}
export const changeMaxCount = (max: number) => {
    return {type: 'CHANGE-MAX-COUNT', max} as const
}