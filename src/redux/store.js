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

// var example_json = [{"_id":"5d9380835dfd2fa05653a0b2","crispr_id":"A01LAJLXBQ","crispr_sys":"cas9","sequence":"CUCCUGCUGCUAGACAAUUA","long_sequence":"UCCAACUCCUGCUGCUAGACAAUUAUUGGA","chromosome":"Chr01","start_pos":785,"end_pos":805,"cutsite":802,"strand":"+","on_site_score":0.3532,"off_site_score":0,"features":"","field12":"completed"},{"_id":"5d9380835dfd2fa05653a0b3","crispr_id":"A01S1W34DX","crispr_sys":"cas9","sequence":"GUUUCUUUAUUCCAACUCCU","long_sequence":"ACCAAGUUUCUUUAUUCCAACUCCUGCUGC","chromosome":"Chr01","start_pos":800,"end_pos":820,"cutsite":817,"strand":"+","on_site_score":0.06882,"off_site_score":0,"features":"","field12":"completed"},{"_id":"5d9380835dfd2fa05653a0b4","crispr_id":"A01Z1ZDASU","crispr_sys":"cas9","sequence":"AUUCUGACACCAAGUUUCUU","long_sequence":"ACCAAAUUCUGACACCAAGUUUCUUUAUUC","chromosome":"Chr01","start_pos":813,"end_pos":833,"cutsite":830,"strand":"+","on_site_score":0.16729,"off_site_score":0,"features":"","field12":"completed"},{"_id":"5d9380835dfd2fa05653a0b5","crispr_id":"A01LVGEIUE","crispr_sys":"cas9","sequence":"UCAUUGCUGCUUGCUCACCA","long_sequence":"UCCAUUCAUUGCUGCUUGCUCACCAAAUUC","chromosome":"Chr01","start_pos":834,"end_pos":854,"cutsite":851,"strand":"+","on_site_score":0.16729,"off_site_score":0,"features":"","field12":"completed"},{"_id":"5d9380835dfd2fa05653a0b6","crispr_id":"A01OSD1EK7","crispr_sys":"cas9","sequence":"GUUUCUUUAUUUCCAUUCAU","long_sequence":"ACCAGGUUUCUUUAUUUCCAUUCAUUGCUG","chromosome":"Chr01","start_pos":850,"end_pos":870,"cutsite":867,"strand":"+","on_site_score":0.06882,"off_site_score":0,"features":"","field12":"completed"},{"_id":"5d9380835dfd2fa05653a0b7","crispr_id":"A01ZQUK7DZ","crispr_sys":"cas9","sequence":"AACACGCAACAUCUGACACC","long_sequence":"CCCAAAACACGCAACAUCUGACACCAGGUU","chromosome":"Chr01","start_pos":872,"end_pos":892,"cutsite":889,"strand":"+","on_site_score":0.3532,"off_site_score":0,"features":"","field12":"completed"},{"_id":"5d9380835dfd2fa05653a0b8","crispr_id":"A01CGCFWDV","crispr_sys":"cas9","sequence":"AAACACGCAACAUCUGACAC","long_sequence":"CCCCAAAACACGCAACAUCUGACACCAGGU","chromosome":"Chr01","start_pos":873,"end_pos":893,"cutsite":890,"strand":"+","on_site_score":0.3532,"off_site_score":0,"features":"","field12":"completed"},{"_id":"5d9380835dfd2fa05653a0b9","crispr_id":"A01X9408F1","crispr_sys":"cas9","sequence":"AAAACACGCAACAUCUGACA","long_sequence":"CCCCCAAAACACGCAACAUCUGACACCAGG","chromosome":"Chr01","start_pos":874,"end_pos":894,"cutsite":891,"strand":"+","on_site_score":0.3532,"off_site_score":0,"features":"","field12":"completed"},{"_id":"5d9380835dfd2fa05653a0ba","crispr_id":"A01CJF6CAF","crispr_sys":"cas9","sequence":"CAAAACACGCAACAUCUGAC","long_sequence":"GCCCCCAAAACACGCAACAUCUGACACCAG","chromosome":"Chr01","start_pos":875,"end_pos":895,"cutsite":892,"strand":"+","on_site_score":0.3532,"off_site_score":0,"features":"","field12":"completed"},{"_id":"5d9380835dfd2fa05653a0bb","crispr_id":"A01DKC5STK","crispr_sys":"cas9","sequence":"GCCCCCAAAACACGCAACAU","long_sequence":"GCCUAGCCCCCAAAACACGCAACAUCUGAC","chromosome":"Chr01","start_pos":880,"end_pos":900,"cutsite":897,"strand":"+","on_site_score":0.59749,"off_site_score":0,"features":"","field12":"completed"}]
// store.dispatch({type: 'CALL', payload: example_json})
// store.dispatch({type: 'CALL', payload: example_json})

// store.dispatch({type: 'CRISPRSYSTEM', payload: {system: 'cas9', value: true}})
// store.dispatch({type: 'CRISPRSYSTEM', payload: {system: 'cpf1', value: false}})
// store.dispatch({type: 'CRISPRSYSTEM', payload: {system: 'cas9', value: false}})
// store.dispatch({type: 'GENOME', payload: 'Sorghum'})
// store.dispatch({type: 'CHROMOSOME', payload: 'gm01'})
// store.dispatch({type: 'START', payload: 1})
// store.dispatch({type: 'END', payload: 10})
// store.dispatch({type: 'END', payload: 0})

export default store