"use strict";

const numberOfFilms = +prompt('Cколько фильмов вы посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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


let i = 0;

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


do {
    const a = prompt('Какой фильм вы недавно смотрели?', ''),
            b = prompt('И как он вам?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }

    i++;
} while (i < 2);


if (personalMoviesDB.count < 10) {
    console.log('Мало фильмов поглядел...');
} else if(personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('Норм так фильмов поглядел...');
} else if (personalMoviesDB.count >= 30) {
    console.log('Киноманищееее...');
} else {
    console.log('SHIT HAPPENS...');
}

console.log(personalMoviesDB);