'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const tabContant = document.querySelectorAll('.tabcontent'),
          tabHeaderAll = document.querySelector('.tabheader__items'),
          tabHeader = document.querySelectorAll('.tabheader__item');

    function hide() {
        tabContant.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show");
        });
    };

    function show(i=0) {
        tabContant[i].classList.remove("hide");
        tabContant[i].classList.add("show");
    };

    hide();
    show();
console.log('work');

tabHeaderAll.addEventListener('click', (event) => {
    const target = event.target;    
        if(target && target.classList.contains('tabheader__item')) {
            tabHeader.forEach((item, i) => {
                if(target == item) {
                    hide();
                    show(i);
                }

        });
    };    
});

});
