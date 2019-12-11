import React from 'react';
import { Link } from 'react-router-dom';
import CabbiHeader from '../../components/CabbiHeader/CabbiHeader';
import CropsrDesc from './CropsrDesc.png'
import './Home.css'
import CropsrButton from '../../components/CropsrButton/CropsrButton';

class Home extends React.Component {

    render() {
        return (
            <div className='homeMainContainer'>
                <div className='homeHeaderContainer'><CabbiHeader/></div>
                <div className='homeDescContainer'><img className='homeDesc' src={CropsrDesc} alt=''/></div>
                <div className='homeButtonContainer'>
                    <Link to='/basicsearch'>
                        <CropsrButton className='homeCropsrButton' caption='Try CROPSR'/>
                    </Link>
                </div>
                <br></br>
                <div>
                    Note from Developer: Currently this web application is in alpha version.
                    <br/>
                    For now, This web application will output up to 100 findings for the given query.
                </div>
            </div>
            
        )
    }

}

export default Home;