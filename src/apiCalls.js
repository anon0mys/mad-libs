const fetchMadLib = () => {
    return fetch('http://madlibz.herokuapp.com/api/random')
    .then(response => response.json())
}

export {fetchMadLib}