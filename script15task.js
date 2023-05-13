
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
}

// const a = prompt('Один из последних просмотренных фильмов? ', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из просмотренныз фильмов?', '' ),
//       d = prompt('На сколько оцените его?' , '');
//       z = prompt('На сколько оцените его?' , '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[b] = c;

for (let i = 0; i <2; i++ ){
    const a = prompt('Один из последних просмотренных фильмов? ', ''),
          b = prompt('На сколько оцените его?', '');
          personalMovieDB.movies[a] = b;
}
<h1>comment2</h1>
<h3>H3</h3>

console.log(personalMovieDB);

