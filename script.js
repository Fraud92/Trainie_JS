"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой фильм смотрели недавно?', ''),
      b = prompt('Как оцените его?', ''),
      c = prompt('Какой ещё фильм смотрели недавно?', ''),
      d = prompt('И его оцените...', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);