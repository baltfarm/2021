'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelectorAll('.tabcontent'),
    tabHeader = document.querySelector('.tabheader__items'),
    tab = document.querySelectorAll('.tabheader__item');

    function hide() {
        tabContainer.forEach(item => {
            //item.style.display = "none";
            item.classList.remove('fade','show');
            item.classList.add('hide');
            //item.classList.remove('fade');
        });
    };

    function show(i = 0) {
        //tabContainer[i].style.display = "block";
        tabContainer[i].classList.remove('hide');
        tabContainer[i].classList.add('fade','show');
        //tabContainer[i].classList.add('fade');
    };

    function selectMenu(activ) {
        tab.forEach((item, i) => {
            item.classList.remove('tabheader__item_active');
            tab[activ].classList.add('tabheader__item_active');
        })
    }

    hide();
    show();

    tabHeader.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains("tabheader__item")) {
            tab.forEach((item, i) => {
                if(item == target) {
                    hide();
                    show(i);
                    selectMenu(i);
                    i++;
                };    
            });
        };       
    });  
});