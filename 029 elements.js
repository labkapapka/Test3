'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.background = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }


hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут біл я');

div.classList.add('black');


wrapper.append(div);
// wrapper.appendChild(div);
//wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].before(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[1].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[1]);
div.innerHTML = "<h1>Hello world!</h1>";

// div.textContent = "Hello world!";

div.insertAdjacentHTML('beforeend', '<h2>Heioo</h2>');


