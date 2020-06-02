'use strict';

const wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      box = document.getElementById('box');

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

console.log(oneHeart);


// box.style.backgroundColor = 'gold';
// box.style.width = '500px';

box.style.cssText = 'background-color: silver; width: 650px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'magenta';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'cyan';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
}); 

const div = document.createElement('div');
// const text = document.createTextNode('Some text here...');

div.classList.add('black');

wrapper.append(div);

// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[2]);

// circles[0].remove();
// wrapper.removeChild(hearts[2]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[1], hearts[2]);

div.innerHTML = "<h2>Hello, mazafaka!</h2>";

// div.textContent = "HALLO";

div.insertAdjacentHTML("afterend", '<h2>Hiwiwiw</h2>');