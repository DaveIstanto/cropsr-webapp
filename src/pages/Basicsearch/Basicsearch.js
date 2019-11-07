import React from 'react';
import { Form, Button } from 'react-bootstrap';

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
			<div className='basicSearchMainContainer'>
				<div className='titleContainer'>
					Search your region!
				</div>
				<div className='searchBoxContainer'>
					<Form className='chromForm'>
						<Form.Label>Chromosome number</Form.Label>
						<Form.Control type="text" placeholder="Place your chromosome number here!" value={this.state.value} onChange={this.fillChr.bind(this)}/>
					</Form>
					<Form className='startForm'>
						<Form.Label>Start region</Form.Label>	
						<Form.Control type="text" placeholder="Place your region start position here!" value={this.state.value} onChange={this.fillStart.bind(this)}/>
					</Form>
					<Form className='endForms'>
						<Form.Label>End region</Form.Label>	
						<Form.Control type="text" placeholder="Place your region end position here!" value={this.state.value} onChange={this.fillEnd.bind(this)}/>
					</Form>
				</div>
				<div className='buttonContainer'>
					<Button className='searchButton' variant='Dark' type="submit" value='search' onClick={(event) => this.searchClick(event)}/>
				</div>
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
