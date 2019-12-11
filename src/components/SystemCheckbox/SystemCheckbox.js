import React from 'react';
import './SystemCheckbox.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCrisprSystem } from '../../redux/actions/updateQuery';
import { CRISPR_SYSTEMS } from '../../REACT_ENV_VAR';


class SystemCheckbox extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        // Make checkboxes for different crispr systems
        var checkboxes = []
        for (let [sys, label] of Object.entries(CRISPR_SYSTEMS)) {
            checkboxes.push(<div className='checkboxContainer' key={sys}><input type='checkbox' value={sys} onChange={this.checkChange.bind(this)}/>{label}</div>)
        }

        return (
            <div className='systemCheckboxMainContainer'>
                <div className='systemCheckboxTitleContainer'>
                    CRISPR System
                </div>
                <div className='systemCheckboxesContainer'>
                    {checkboxes}
                </div>
                
            </div>
        )

    }

    checkChange(event) {
        let crisprSystem = event.target.value
        let currentlyChecked = this.props.system[crisprSystem] // check if box is currently checked directly to redux
        let newCheckedStatus = !currentlyChecked
        this.props.updateCrisprSystem(crisprSystem, newCheckedStatus)


    }
}

// Pass redux states to current component props
function mapStateToProps(state) {
    return {
        system: state.query.system
    }
}

// Pass actions and functions to update redux to current component props
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateCrisprSystem: updateCrisprSystem,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SystemCheckbox);