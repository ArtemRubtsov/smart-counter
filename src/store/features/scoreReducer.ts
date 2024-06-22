

const initialState = {
    score: Number(localStorage.getItem('score')) || 0,
    start: Number(localStorage.getItem('start')) || 0,
    max: Number(localStorage.getItem('max')) || 0,
    isOpen: Boolean(localStorage.getItem('isOpen')) || false
}

type ActionsType =  AddScoreType
export type ScoreStateType = {
    score: number;
    start: number;
    max: number;
    isOpen: boolean;
}

type AddScoreType = {
    type: 'ADD-SCORE'
}


export const scoreReducer = (state: ScoreStateType = initialState, action: ActionsType) => {
    switch (action.type){
        case "ADD-SCORE": {
            return {...state}
        }
        default: return state
    }
}

export const addScoreStore = (): AddScoreType => {
    return {type: 'ADD-SCORE'} as const
}