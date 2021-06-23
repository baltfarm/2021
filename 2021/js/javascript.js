"use sctrict";
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

const numberOfFilms = +prompt('Crjkmrj фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('Один из последних фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

