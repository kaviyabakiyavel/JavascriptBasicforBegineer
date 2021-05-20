const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2019, rating: 3 },
    { title: 'c', year: 2021, rating: 2 },
    { title: 'd', year: 2017, rating: 4.5 },
    { title: 'e', year: 2018, rating: 4.7 },
]
// 1) All the movies in 2018 with rating > 4
// 2) sort them by their rating 
// 3) Descending order
// 4) pick thier title

  const output = movies
                    .filter(data => data.year === 2018 && data.rating >= 4) 
                    .sort((a,b) => {a.rating - b.rating})
                    .reverse()
                    .map(data => data.title)

console.log(output)