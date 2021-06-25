// "use sctrict";
/*
let number = 4.6;
console.log(-4/0);
console.log('string' * 9);

const persone = 'Alex';

let und = "rtrt";
console.log(und);
const object = {
    name: "John",
    age: "10",
    isMarried: false
};

console.log(object.age);
*/
// alert("Hello");
// const result = prompt("How are you old", "18");
// console.log(result);

/*   ------------012--------------     */

// const numberOfFilms = +prompt('Crjkmrj фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false
// };

// const a = prompt('Один из последних фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

/*   ------------013--------------     */

// const num = 50;

// if(num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('OK!');
// }

// (num == 50) ? console.log('OK!') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('Верно');
//         break;    
//     default:
//         console.log('Не в этот раз');
//         break;
// }

/*   ------------018--------------     */

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}



function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
              if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                  personalMovieDB.movies[a] = b;
                  console.log('done');
              } else {
                  console.log('error');
                  i--;
              }
    }
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");    
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");        
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    }else {
        console.log("Произощла ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }        
}
showMyDB(personalMovieDB.privat);

    // console.log(personalMovieDB);

function writeYourGenres() {
    for (let index = 1; index < 4; index++) {
        personalMovieDB.genres[index-1] = prompt(`Ваш любимый жанр под номером № ${index}?`, '');
        // console.log(personalMovieDB.genres[index-1]);
    }
}
    writeYourGenres();
