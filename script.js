"use strict";

// const personalMoviesDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMoviesDB.count = +prompt('Cколько фильмов вы посмотрели?', '');
    
//         while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
//             personalMoviesDB.count = +prompt('Cколько фильмов вы посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Какой фильм вы недавно смотрели?', ''),
//                   b = prompt('И как он вам?', '');
            
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMoviesDB.movies[a] = b;
//                 console.log('Done!');
//             } else {
//                 console.log('Error!');
//                 i--;
//             }       
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMoviesDB.count < 10) {
//             console.log('Мало фильмов поглядел...');
//         } else if(personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
//             console.log('Норм так фильмов поглядел...');
//         } else if (personalMoviesDB.count >= 30) {
//             console.log('Киноманищееее...');
//         } else {
//             console.log('SHIT HAPPENS...');
//         }
//     },
//     showMyDB: function (hidden) {
//         (hidden == true) ? console.log("Sorry, my DB is private") : console.log(personalMoviesDB);
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMoviesDB.privat) {
//             personalMoviesDB.privat = false;
//         } else {
//             personalMoviesDB.privat = true;
//         }
//     },
//     writeYourGenres: () => {

//         for (let i = 1; i < 2; i++) {
     
//             // let a = prompt(`Ваш любимый жанр под номером ${i}?`, '');
    
//             // if (a === '' || a == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             //     i--;
//             // } else {
//             //     personalMoviesDB.genres[i - 1] = a;
//             // }

//             let genres = prompt('Введите ваши любимые жанры через запятую', '').toLowerCase();

//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMoviesDB.genres = genres.split(', ');
//             }
//         }

//         personalMoviesDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };


console.log(+"Infinity");