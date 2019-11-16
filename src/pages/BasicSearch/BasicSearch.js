import React from 'react';
import './BasicSearch.css';
import CabbiHeader from '../../components/CabbiHeader/CabbiHeader';
import DropdownGenome from '../../components/DropdownGenome/DropdownGenome';
import SystemCheckbox from '../../components/SystemCheckbox/SystemCheckbox';
import CutRegionForm from '../../components/CutRegionForm/CutRegionForm';
import CropsrButton from '../../components/CropsrButton/CropsrButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import callQuery from '../../redux/actions/callQuery'
import { DB_DRIVER_ADDRESS } from '../../REACT_ENV_VAR'

/**
 * This page is responsible to take in search queries
 */

class BasicSearchscreen extends React.Component {

	render() {
		return (
			<div className="basicSearchMainContainer">
				<div className="basicSearchHeaderContainer"><CabbiHeader/></div>
				<div className='basicSearchContentContainer'>
					<div className='basicSearchDropDownContainer'>
						<DropdownGenome />
					</div>
					<div className='basicSearchCheckboxContainer'>
						<SystemCheckbox />
					</div>
					<div className='basicSearchCutRegionFormContainer'>
						<CutRegionForm />
					</div>
					<div className='basicSearchCropsrButtonContainer'>
						<button className='basicSearchCropsrButton' onClick={this.searchClick.bind(this)}>
							<CropsrButton />
						</button>
					</div>
				</div>
				
			</div>
			
		);
	};

	searchClick(e) {

		var queryInfo = this.props.query

		console.log('DB_DRIVER_ADDRESS', DB_DRIVER_ADDRESS)
	
		// Get the query info for each category
		const queryGenome = queryInfo.genome
		const queryChr = queryInfo.chr
		const queryStart = queryInfo.start
		const queryEnd = queryInfo.end
		var querySystems = []
	
		// Handle selected crispr systems only
		const systems = queryInfo.system
	
		for (var crisprSystem of Object.keys(systems)) {
			if (systems[crisprSystem] === true) {
				querySystems.push(crisprSystem)
			}
		}
	
		// Get result of Query
	
		for (var system_index in querySystems) {	
			var querySystem = querySystems[system_index]
			const callQueryAddress = DB_DRIVER_ADDRESS + '/gRNAquery?genome=' + queryGenome + '&system=' + querySystem + '&chr=' + queryChr + '&start=' + queryStart + '&end=' + queryEnd
			console.log(callQueryAddress)
			fetch(callQueryAddress, {mode: 'cors'})
			.then(response => response.json())
			.then(data => this.props.callQuery(data))
		}
	}

};

// Pass redux states to current component props
function mapStateToProps(state) {
	return {
		query: state.query
	}
}

// Pass actions and functions to update redux to current component props
function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		callQuery: callQuery
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(BasicSearchscreen);
