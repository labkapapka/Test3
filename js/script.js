
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
}

const a = prompt('Один из последних просмотренных фильмов? ', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из просмотренныз фильмов?', '' ),
      d = prompt('На сколько оцените его?' , '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[b] = c;



console.log(personalMovieDB);