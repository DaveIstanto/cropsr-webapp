import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import Routecontroller from './Routecontroller';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <Routecontroller/>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
