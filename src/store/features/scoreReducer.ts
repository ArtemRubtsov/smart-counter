const initialState = {
    score: Number(localStorage.getItem('score')) || 3,
    start: Number(localStorage.getItem('start')) || 0,
    max: Number(localStorage.getItem('max')) || 0,
    isOpen: Boolean(localStorage.getItem('isOpen')) || false
}

type ActionsType =  AddScoreType | OpenCloseType | ResetScoreType | MaxScoreType | StartScoreType | SetSettingsType
export type ScoreStateType = {
    score: number;
    start: number;
    max: number;
    isOpen: boolean;
}

type AddScoreType = {
    type: 'ADD-SCORE'
}
type OpenCloseType = {
    type: 'OPEN-CLOSE'
}
type ResetScoreType = {
    type: 'RESET'
}
type MaxScoreType = {
    type: "SET-MAX-SCORE"
    maxScore: number
}
type StartScoreType = {
    type: 'SET-START-SCORE'
    startScore: number
}
type SetSettingsType = {
    type: 'SET-SAVE-STORE'
}

export const scoreReducer = (state: ScoreStateType = initialState, action: ActionsType) => {
    switch (action.type){
        case "ADD-SCORE": {
            return {...state, score: state.score + 1}
        }
        case 'OPEN-CLOSE': {
            return {...state, isOpen: !state.isOpen}
        }
        case 'RESET': {
            return {...state, score: state.start}
        }
        case "SET-MAX-SCORE": {
            return {...state, max: action.maxScore}
        }
        case "SET-START-SCORE": {
            return {...state, start: action.startScore}
        }
        case "SET-SAVE-STORE": {
            return {...state, score: state.start}
        }
        default: return state
    }
}

export const addScoreStore = (): AddScoreType => {
    return {type: 'ADD-SCORE'} as const
}
export const openCloseSettings = (): OpenCloseType => {
    return {type: 'OPEN-CLOSE'} as const
}
export const resetScoreStore = (): ResetScoreType => {
    return {type: 'RESET'} as const
}
export const maxSetScore = (maxScore: number): MaxScoreType => {
    return {type: 'SET-MAX-SCORE', maxScore} as const
}
export const startSetScore = (startScore: number): StartScoreType => {
    return {type: "SET-START-SCORE", startScore} as const
}
export const setSettings = (): SetSettingsType => {
    return {type: "SET-SAVE-STORE"} as const
}