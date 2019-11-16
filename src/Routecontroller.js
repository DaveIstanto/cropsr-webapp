import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import BasicSearch from './pages/BasicSearch/BasicSearch'
import SearchResults from './pages/SearchResults/SearchResults';

class Routecontroller extends React.Component {

    render() {
        return (
            <Router>
                <Route path='/home' component={Home}/>
                <Route path='/basicsearch' component={BasicSearch}/>
                <Route path='/searchresults' component = {SearchResults}/>
            </Router>
        )
    }

}

export default Routecontroller;