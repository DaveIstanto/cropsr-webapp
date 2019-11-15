import React from 'react';
import cropsrButton from './cropsrButton.png'
import './CropsrButton.css'

class CropsrButton extends React.Component {

    render() {
        return(
            <button className='cropsrButton'>
                <img className='cropsrButtonImage' src={cropsrButton} alt='' />
            </button>

        )
    }
}

export default CropsrButton;