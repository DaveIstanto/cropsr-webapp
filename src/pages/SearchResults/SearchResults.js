import React from 'react';
import './SearchResults.css';
import CabbiHeader from '../../components/CabbiHeader/CabbiHeader';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';
import { DB_DRIVER_ADDRESS } from '../../REACT_ENV_VAR'
import { bindActionCreators } from 'redux';
import callQuery from '../../redux/actions/callQuery';
import { Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';


class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataFetched: false

        }
    }

    render() {        
        if (this.state.dataFetched === false) {
            return (
                <div className='searchResultsAltMainContainer'>
                    <div className='searchResultsLoaderContainer'>
                        <Loader height={200} width={200} type='Rings' color='#018100'/>
                        <div className='searchResultsLoaderLabel'>Currently Loading...</div>
                        <div className='searchResultsLoaderLabel'>If this loading screen persists, please allow mixed connections:</div>
                        <div className='searchResultsLoaderLabel'>(https://docs.adobe.com/content/help/en/target/using/experiences/vec/troubleshoot-composer/mixed-content.html)</div>
                    </div>
                </div>
            )
        } else {
            const data = this.props.queryResult.flat()

            const columns = [{
                Header: 'Chromosome',
                accessor: 'chromosome'
            }, {
                Header: 'Start Position',
                accessor: 'start_pos'
            }, {
                Header: 'End Position',
                accessor: 'end_pos'
            }, {
                Header: 'Cut site',
                accessor: 'cutsite'
            }, {
                Header: 'Sequence',
                accessor: 'sequence'
            }, {
                Header: 'Strand',
                accessor: 'strand'
            }, {
                Header: 'On-site Score',
                accessor: 'on_site_score'
            }, {
                Header: 'Crispr System',
                accessor: 'crispr_sys'
            }]

            return (
                <div className='searchResultsMainContainer'>
                    <div className='searchResultsHeaderContainer'>
                        <CabbiHeader />
                    </div>
                    <div className='searchResultsTableContainer'>
                        <ReactTable data={data} columns={columns} />
                    </div>
                    <div className='searchResultsBackToSearchButtonContainer'>
                        <Link to='/basicsearch'>
                            <button className='searchResultsBackToSearchButton'>
                                Go back to search
                            </button>
                        </Link>

                    </div>
                </div>
            )
        }

    }

    componentDidMount() {
        this.getData()
    }

    getData() {

        console.log('get data is called')
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
		var fetchPromises = []

		for (var system_index in querySystems) {	
			var querySystem = querySystems[system_index]
			const callQueryAddress = DB_DRIVER_ADDRESS + '/gRNAquery?genome=' + queryGenome + '&system=' + querySystem + '&chr=' + queryChr + '&start=' + queryStart + '&end=' + queryEnd
			console.log(callQueryAddress)
			var fetchPromise = (fetch(callQueryAddress, {mode: 'cors'})
			.then(response => response.json())
            .then(data => this.props.callQuery(data)))
            
            fetchPromises.push(fetchPromise)
        }

        Promise.all(fetchPromises).then(() => this.setState({dataFetched: true})) 
	}


}

// Pass redux states to current component props
function mapStateToProps(state) {
	return {
        query: state.query,
		queryResult: state.query.queryResult
	}
}

// Pass actions and functions to update redux to current component props
function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		callQuery: callQuery
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchResults);