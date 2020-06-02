'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Табы здесь || Tabs here

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // let timerId,
    //     i = 0;

    // const btn = document.querySelector('button.btn.btn_white');

    // btn.addEventListener('click', myAnimation);

    // function logger () {
    //     if (i == 3) {
    //         clearInterval(timerId);
    //     }

    //     console.log('text');
    //     i++;
    // }


    // let id = setTimeout(function log() {
    //     console.log('Hello from recursion!!!!!');
    //     id = setTimeout(log, 2000);
    // }, 2000); 

    // function myAnimation() {
    //     const elmnt = document.querySelector('div.header__right-block');
    //     elmnt.style.position = "absolute";
        
    //     let pos = 150;

    //     const id = setInterval(frame, 10);
    //     function frame() {
    //         if (pos == 1100) {
    //             clearInterval(id);
    //         } else {
    //             pos++;
    //             elmnt.style.left = pos + "px";
    //         }
    //     }
    // }

    // Таймер здесь || Timer here

    const deadline = '2020-06-22';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);


            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline);


    // Modal window

    const modal = document.querySelector('.modal'),
          modalOpen = document.querySelectorAll('[data-modal]'),
          modalClose = modal.querySelector('[data-close]');

    function modalOpenFunc() {
        modal.classList.add('show', 'fade');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalOpen.forEach(mod => {
        mod.addEventListener('click', modalOpenFunc);      
    });

    function modalCloseFunc() {
        modal.classList.remove('show', 'fade');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', modalCloseFunc);

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            modalCloseFunc();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == "Escape" && modal.classList.contains('show')) {
            modalCloseFunc();
        }
    });

    const modalTimerId = setTimeout(modalOpenFunc, 9000);

    function showModalOnBottom() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpenFunc();
            window.removeEventListener('scroll', showModalOnBottom);
        }
    }

    window.addEventListener('scroll', showModalOnBottom);


});