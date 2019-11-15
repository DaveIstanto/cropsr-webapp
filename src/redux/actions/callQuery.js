const callQuery = (query) => {
    // Parse query, ask nodemon for mongodb output. 
    // Then set a state in redux store for 'queryresult' as an array
    return {
        type: "CALL",
        payload: 'NODEMON OUTPUT'
    }
}

export default callQuery;