import { DB_DRIVER_ADDRESS } from '../../REACT_ENV_VAR'

const callQuery = (queryInfo) => {
    // Parse query, ask nodemon for mongodb output. 
    // Then set a state in redux store for 'queryresult' as an array
    // const getTodoListAddress = hostAddress + "db/user/" + this.state.currentUser + "/Todolist"
    // fetch(getTodoListAddress, {mode: 'cors'})
    // .then(response => response.json())
    // .then(data => this.setState({fetchedCards: data.data}))

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
    var queryResults = []
    var singleResult;

    for (var system_index in querySystems) {
        var querySystem = querySystems[system_index]
        const callQueryAddress = DB_DRIVER_ADDRESS + '/gRNAquery?genome=' + queryGenome + '&system=' + querySystem + '&chr=' + queryChr + '&start=' + queryStart + '&end=' + queryEnd
        console.log(callQueryAddress)
        fetch(callQueryAddress, {mode: 'cors'}).then(response => response.json()).then(data => singleResult= data).then(() => queryResults.push(singleResult))
    }

    console.log(queryResults[0])


    return {
        type: "CALL",
        payload: 'NODEMON OUTPUT'
    }
}

function addQueryFromCallback(queryResults, newResults) {
    return queryResults.concat(newResults)

} 


export default callQuery;