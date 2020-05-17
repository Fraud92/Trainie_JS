"use strict";

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Cколько фильмов вы посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Cколько фильмов вы посмотрели?', '');
//     }
// }

// start();

// const personalMoviesDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function writeYourGenres() {

//     for (let i = 1; i < 4; i++) {
 
//         const a = prompt(`Ваш любимый жанр под номером ${i}?`, '');

//         while (a == '' || a == null) {
//             const a = prompt(`Ваш любимый жанр под номером ${i}?`, '');
//             return a;
//         }
        
//         personalMoviesDB.genres[i - 1] = a;
        
//         console.log(a);
//     }
// }

// writeYourGenres();

// function showMyDB(hidden) {
//     (hidden == true) ? console.log("Sorry, my DB is private") : console.log(personalMoviesDB);
// }


// 1

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Какой фильм вы недавно смотрели?', ''),
//           b = prompt('И как он вам?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMoviesDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('Error!');
//         i--;
//     }

    
// }

// showMyDB();

// let i = 0;

// while (i < 2) {

//     const a = prompt('Какой фильм вы недавно смотрели?', ''),
//           b = prompt('И как он вам?', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMoviesDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('Error!');
//         i--;
//     }

//     i++;
// }


// do {
//     const a = prompt('Какой фильм вы недавно смотрели?', ''),
//             b = prompt('И как он вам?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMoviesDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('Error!');
//         i--;
//     }

//     i++;
// } while (i < 2);


// if (personalMoviesDB.count < 10) {
//     console.log('Мало фильмов поглядел...');
// } else if(personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
//     console.log('Норм так фильмов поглядел...');
// } else if (personalMoviesDB.count >= 30) {
//     console.log('Киноманищееее...');
// } else {
//     console.log('SHIT HAPPENS...');
// }

//console.log(personalMoviesDB);

function done() {
    console.log("Я стал Яваскриптизёром через 3 секунды таймаута!!!!");
}

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}!`);
    
    setTimeout(function() {
        callback();
    }, 3000);
}

learnJS('JavaScript', done);