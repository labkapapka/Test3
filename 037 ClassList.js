const btns = document.querySelectorAll('button');

//console.log(btns[0].classList.length);
//console.log(btns[0].classList.item(1));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[0].classList.contains('red')) {
//     console.log('red');
// };


btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    //   }
    btns[1].classList.toggle('red');


});

console.log(btns[0].className);

// 11:24 время. Делегирование событий
