"use strict";

const numberOfFilms = +prompt('Cколько фильмов вы посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой фильм вы недавно смотрели?', ''),
      b = prompt('И как он вам?', ''),
      c = prompt('Какой фильм ещё смотрели недвано?', ''),
      d = prompt('И как он вам?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
