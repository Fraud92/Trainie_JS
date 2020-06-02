'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adverts = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add'),
          formInput = form.querySelector('input[type="text"]'),
          wrapper = document.querySelector('.promo__menu'),
          navItem = document.querySelectorAll('.promo__menu-item'),
          formCheckbox = form.querySelector('input[type="checkbox"]');
    

    const sortArr = (arr) => {
        arr.sort();
    };

    const deleteAdv = (advert) => {
        advert.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драмма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    

    const refreshMovieList = (films, parent) => {
        
        parent.innerHTML = '';

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1}) ${film}
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {  
    
                console.log('Фильм "' + movieDB.movies[i] + '" удалён из списка');
                btn.parentElement.remove(); 
                movieDB.movies.splice(i, 1);
                
                refreshMovieList(movieDB.movies, movieList);
            });
        
        });

    };
        
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (formInput.value != '') {
            if (formInput.value.trim().length <= 21) {
                movieDB.movies.push(formInput.value.trim());
            } else {
                movieDB.movies.push(formInput.value.trim().substr(0, 21) + '...');
            }      
        } else {
            alert('Введите название фильма!');
        }
        
        if (formCheckbox.checked) {
            console.log('Добавляем любимый фильм!');
        }

        refreshMovieList(movieDB.movies, movieList);
        
        event.target.reset();
    });
    
    
    navItem.forEach((item, i)=> {
        item.addEventListener('click', () => {
            if (item.classList.contains('promo__menu-item_active')) {
                item.classList.toggle(`promo__menu-item_active`);
            } else {
                item.classList.toggle('promo__menu-item_active');
            }
        });
    });


    wrapper.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('promo__menu-item_active')) {
            console.log('SDASDASDASDASDASD');
        }
    });

    const btn = document.createElement('button');
    btn.classList.add('promo__menu-item');
    wrapper.append(btn);

    deleteAdv(adverts);
    makeChanges();
    refreshMovieList(movieDB.movies, movieList);
    
    
    
    
    
    
    // const butt = document.querySelector('button'),
    //       overlay = document.querySelector('.overlay');
    
    // let i = 0;
    
    // const deleteElement = (e) => {
    //     console.log(e.currentTarget);
    //     console.log(e.type);
    
        // i++;
        // if (i == 1) {
        //     butt.removeEventListener('click', deleteElement);
        // }
    // };
    
    // butt.addEventListener('click', deleteElement);
    // overlay.addEventListener('click', deleteElement);
    
    // const links = document.querySelectorAll('a');
    
    // links.forEach(link => {
    //     link.addEventListener('click', function (event) {
    //     event.preventDefault();
    
    //     console.log(event.target);
    //     }, {once: true});
    // });
    
    // link.addEventListener('click', function (event) {
    //     event.preventDefault();
    
    //     console.log(event.target);
    
    // });

});