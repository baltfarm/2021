/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

 'use strict';



const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// // const advert = document.querySelectorAll('img');

// // advert.forEach((element, i) => {   
// //     if (i !== 0) { 
// //     element.remove();
// //     // console.log(element); 
// //     }  
// // });

// const advert = document.querySelectorAll(".promo__adv img");
// advert.forEach(item => {
//     item.remove();
// })

// const movieGenre = document.querySelector('.promo__genre');
// //movieGenre.innerHTML = 'Драмма';
// movieGenre.textContent = 'Драма';
// //console.log(movieGenre);

// const movieBG = document.querySelector('.promo__bg');
// // movieBG.style.backgroundImage = 'url(../img/bg.jpg)';
// movieBG.style.backgroundImage = "url('/img/bg.jpg')";

// // const movieItem = document.querySelectorAll('.promo__interactive-item');
// // console.log(movieItem[1]);
// // console.log(movieDB.movies[1]);
// // movieDB.movies.sort();
// // movieItem.forEach((element, i) => {
// //     element.textContent = movieDB.movies[i];
// // })

// // const ulNumber = document.querySelectorAll('.promo__interactive-item');
// // ulNumber.forEach((element, i) => {
// //     element.textContent = i+1 + '. ' + element.textContent;
// // })

// const movieItem = document.querySelector(".promo__interactive-list");
// movieItem.innerHTML = "";
// movieDB.movies.sort();
// movieDB.movies.forEach((item, i) => {
// movieItem.innerHTML += `<li class="promo__interactive-item">${i+1}. ${item}</li>`;
// })

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// 'use strict';

// Возьмите свой код из предыдущей практики
window.addEventListener('DOMContentLoaded', () => {

const btn = document.querySelector("button"),
      formMovie = document.querySelector('form.add'),
      newMovie = document.querySelector('.promo__interactive-list'),
    //   deleteMovie = document.querySelectorAll('.delete'),
      addMovie = formMovie.querySelector('.adding__input'),
      checkbox = formMovie.querySelector('[type="checkbox"]');
          

  
        
    function newList(newMovies, dBase) {
        newMovies.innerHTML = "";
        dBase.forEach((item, i) => {
            newMovies.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${item}
                <div class="delete"></div>
            </li>
            `
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            console.log('Work2');
            item.addEventListener('click', (event) => {
                console.log('Work');
                event.preventDefault();
                delete movieDB.movies[i];
                console.log('Work');
                 newList(newMovie, movieDB.movies);
            });
        }); 
    };

    formMovie.addEventListener('submit', (event) => {
        event.preventDefault();
        if (addMovie.value) {
            if (addMovie.value.length > 21) {            
                addMovie.value = addMovie.value.slice(0, 21) + ' ...';
            }
            movieDB.movies.push(addMovie.value);
            movieDB.movies.sort();        
            newList(newMovie, movieDB.movies);
        //addMovie.value = "";
        //formMovie.reset();
            event.target.reset();
        }
    });
});