import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CabbiHeader from '../../components/CabbiHeader/CabbiHeader';

/**
 * This page is responsible to take in search queries
 */

const controllerAddress = "http://localhost:4000/" // This is nodemon's listening address

class BasicSearchscreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			chr : "",
			start_region : -1,
			end_region : -1,
		};
	};

	render() {
		return (
			<div className='mainContainer'>
				<CabbiHeader />
				<Button bsSize='large'>Try CROPSR!</Button>
			</div>
			
		);
	};

	// Functions for page
	fillChr(event) {
		this.setState({chr: event.target.value})
	};

	fillStart(event) {
		this.setState({start_region: event.target.value})
	};

	fillEnd(event) {
		this.setState({end_region: event.target.value})
	};
	
	searchClick(event) {
		var queryAddress = controllerAddress + "testquery?chr=" + this.state.chr + "&start=" + this.state.start_region + "&end=" + this.state_end_region 

		// Get json as response
		fetch(queryAddress, {mode:'cors'}).then(res => res.json())
		.then(data => console.log(data))
	};

};

export default BasicSearchscreen;
