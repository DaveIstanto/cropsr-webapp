import React from 'react';
import { Link } from 'react-router-dom';
import { Button, styleMaps } from 'react-bootstrap';
import CabbiHeader from '../../components/CabbiHeader/CabbiHeader';
import CropsrDesc from './CropsrDesc.png'
import './Home.css'
import CropsrButton from '../../components/CropsrButton/CropsrButton';

class Home extends React.Component {

    render() {
        return (
            <div class='mainContainer'>
                <div class='headerContainer'><CabbiHeader/></div>
                <div class='descContainer'><img class='desc' src={CropsrDesc}/></div>
                <div class='buttonContainer'>
                    <Link to='/basicsearch'>
                        <CropsrButton class='cropsrButton' caption='Try CROPSR'/>
                    </Link>
                </div>
            </div>
            
        )
    }

}

export default Home;