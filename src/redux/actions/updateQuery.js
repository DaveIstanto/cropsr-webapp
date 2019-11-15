const updateGenome = (genome) => {
    return {
        type: 'GENOME',
        payload: genome
    }
}

const updateCrisprSystem = (sys, val) => {
    return {
        type: 'CRISPRSYSTEM',
        payload: {system: sys, value: val}
    }
}

const updateChr = (chr) => {
    return {
        type: 'CHROMOSOME',
        payload: chr
    }
}

const updateStart = (start) => {
    return {
        type: 'START',
        payload: start
    }
}

const updateEnd = (end) => {
    return {
        type: 'END',
        payload: end
    }
}

export { updateChr, updateStart, updateEnd, updateGenome, updateCrisprSystem }