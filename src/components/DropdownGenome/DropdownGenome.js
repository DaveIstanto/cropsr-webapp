import React from 'react';
import './DropdownGenome.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateGenome } from '../../redux/actions/updateQuery';
import { GENOME_LIST } from '../../ENV_VARIABLES'

class DropdownGenome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        var genome_options = []
        for (var i in GENOME_LIST) {
            genome_options.push(<option key={GENOME_LIST[i]} value={GENOME_LIST[i]}>{GENOME_LIST[i]}</option>)
        }

        return (
            <div className="dropdownGenomeMainContainer">
                <div className='genomeTitleContainer'>Genome</div>
                <div className='dropDownContainer'>
                    <select as='select' className='dropDown' value={this.state.value} onChange={this.handleGenomeChange.bind(this)}>
                        {genome_options}
                    </select>
                </div>
            </div>

        );
    };

    // Handle genome selection
    handleGenomeChange(event) {
        this.props.updateGenome(event.target.value)
    }

};

// Pass redux states to current component props
function mapStateToProps(state) {
    return {}
}

// Pass actions and functions to update redux to current component props
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateGenome: updateGenome
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DropdownGenome);