const queryReducer = function(state={}, action) {
    switch (action.type) {
        case 'GENOME': {
            state = {...state, genome: action.payload}
            break;
        }

        case 'CRISPRSYSTEM': {  
            const crisprSystem = action.payload.system
            const crisprBool = action.payload.value
            const prevSystem = state.system
            state = {...state,
                system:{
                    ...prevSystem,
                    [crisprSystem]: crisprBool
                }
            }
            break;

        }
        case 'CHROMOSOME': {
            state = {...state, chr: action.payload}
            break;
        }

        case 'START': {
            state = {...state, start: action.payload}
            break;
        }

        case 'END': {
            state = {...state, end: action.payload}
            break;
        }

        case 'CALL' : {
            state = {...state, queryResult: [...state.queryResult, action.payload]}
            break;
        }

        case 'CLEAR' : {
            state = {...state, queryResult: []}
            break;
        }

        default:
            state = {...state};
            break;
    }
    
    return state
} 

export default queryReducer