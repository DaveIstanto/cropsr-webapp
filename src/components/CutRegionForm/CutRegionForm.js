import React from 'react';
import './CutRegionForm.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateChr, updateStart, updateEnd } from '../../redux/actions/updateQuery';

class CutRegionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='cutRegionFormMainContainer'>
                <div className='cutRegionFormTitleContainer'>
                    Cut Region
                </div>
                <div className='cutRegionFormsContainer'>
                    <div className='cutRegionFormContainer'>
                        <div>Chromosome Number</div>
                        <input type='text' pattern="[0-9]*" value={this.state.value} onChange={this.fillChr.bind(this)}/>            
                    </div>
                    <div className='cutRegionFormContainer'>
                        <div>Start</div>
                        <input type='text' pattern="[0-9]*" value={this.state.value} onChange={this.fillStart.bind(this)}/> 
                    </div>
                    <div className='cutRegionFormContainer'>
                        <div>End</div>
                        <input type='text' pattern="[0-9]*" value={this.state.value} onChange={this.fillEnd.bind(this)}/> 
                    </div>
                </div>
            </div>

        )
    }

    // Functions for page
	fillChr(event) {
        this.props.updateChr(event.target.value)
	};

	fillStart(event) {
		this.props.updateStart(event.target.value)
	};

	fillEnd(event) {
		this.props.updateEnd(event.target.value)
	};
    

}

// Pass redux states to current component props
function mapStateToProps(state) {
    return {}
}

// Pass actions and functions to update redux to current component props
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateChr: updateChr,
        updateStart: updateStart,
        updateEnd: updateEnd
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CutRegionForm);