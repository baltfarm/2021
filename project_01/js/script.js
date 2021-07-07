/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const advert = document.querySelectorAll('img');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

advert.forEach((element, i) => {   
    if (i !== 0) { 
    element.remove();
    // console.log(element); 
    }  
});

const movieGenre = document.querySelector('.promo__genre');
//movieGenre.innerHTML = 'Драмма';
movieGenre.textContent = 'Драма';
//console.log(movieGenre);

const movieBG = document.querySelector('.promo__bg');
movieBG.style.backgroundImage = 'url(../img/bg.jpg)';

const movieItem = document.querySelectorAll('.promo__interactive-item');
console.log(movieItem[1]);
console.log(movieDB.movies[1]);
movieDB.movies.sort();
movieItem.forEach((element, i) => {
    element.textContent = movieDB.movies[i];
})

const ulNumber = document.querySelectorAll('.promo__interactive-item');
ulNumber.forEach((element, i) => {
    element.textContent = i+1 + '. ' + element.textContent;
})
