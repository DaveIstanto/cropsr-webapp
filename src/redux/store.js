import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger({});

const middleware = applyMiddleware(thunk, logger)

const initialState = {
    query: {
        genome: '',
        system: {
            cas9: false,
            cpf1: false,
        },
        chr: '',
        start: -1,
        end: -1,
        
        queryResult:[]
    },


}
const store = createStore(reducer, initialState, composeWithDevTools(
    middleware
))

var example_json = [{"_id":"5d9380835dfd2fa05653a0b2","cr   ispr_id":"A01LAJLXBQ","crispr_sys":"cas9","sequence":"CUCCUGCUGCUAGACAAUUA","long_sequence":"UCCAACUCCUGCUGCUAGACAAUUAUUGGA","chromosome":"Chr01","start_pos":785,"end_pos":805,"cutsite":802,"strand":"+","on_site_score":0.3532,"off_site_score":0,"features":"","field12":"completed"}]
store.dispatch({type: 'CALL', payload: example_json})
store.dispatch({type: 'CALL', payload: example_json})
store.dispatch({type: 'CALL', payload: example_json})
store.dispatch({type: 'CALL', payload: example_json})
// store.dispatch({type: 'CALL', payload: example_json})

// store.dispatch({type: 'CRISPRSYSTEM', payload: {system: 'cas9', value: true}})
// store.dispatch({type:    'CRISPRSYSTEM', payload: {system: 'cpf1', value: false}})
// store.dispatch({type: 'CRISPRSYSTEM', payload: {system: 'cas9', value: false}})
// store.dispatch({type: 'GENOME', payload: 'Sorghum'})
// store.dispatch({type: 'CHROMOSOME', payload: 'gm01'})
// store.dispatch({type: 'START', payload: 1})
// store.dispatch({type: 'END', payload: 10})
// store.dispatch({type: 'END', payload: 0})

export default store