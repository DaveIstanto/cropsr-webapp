import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import BasicSearch from './pages/BasicSearch/BasicSearch'

class Routecontroller extends React.Component {

    render() {
        return (
            <Router>
                <Route path='/home' component={Home}/>
                <Route path='/basicsearch' component={BasicSearch}/>
            </Router>
        )
    }

}

export default Routecontroller;