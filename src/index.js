import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routecontroller from './Routecontroller';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routecontroller />, document.getElementById('root'));


serviceWorker.unregister();
