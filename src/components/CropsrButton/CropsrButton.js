import React from 'react';
import cropsrButton from './cropsrButton.png'

class CropsrButton extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <img class='image' src={cropsrButton} />
            </div>

        )

    }
}

export default CropsrButton;