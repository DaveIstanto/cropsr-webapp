import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div>Home</div>
                <div>
                <Link to='/basicsearch'>Go to search</Link>
                </div>
            </div>
            
        )
    }

}

export default Home;