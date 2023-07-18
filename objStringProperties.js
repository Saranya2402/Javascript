const movie = {
    title: 'Tangled',
    releaseYear: 2017,
    rating: 9.8,
    director:'Saranya'
}

showProperties(movie)

function showProperties(obj) {
    for(let item in movie)
        if(typeof movie[item] === 'string') console.log(item, movie[item])
}