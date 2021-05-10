const movie = {
    title: 'a',
    releaseYear: 2018,
    reating: 4.5,
    director: 'b'
}
//display only string value from an object 
function showproperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])
}
showproperties(movie)
