function callQuery(queryResult) {
    return {
        type: 'CALL',
        payload: queryResult
    }
}

export default callQuery;