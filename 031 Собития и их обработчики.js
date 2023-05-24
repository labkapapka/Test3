//для начала необходимо назначить обработчик собітий


//1 способ указать прямо в верстке, файл HTML (не рекомендуется использовать, исключение маленькие тестовіке проекти)

//2 способ. тоже не используется, проблематичній? если повторится второй раз то первий не исполнится


const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Click');
// };


// btn.onclick = function () {
//     alert('SecondClick'); 
// };                                   ця частина тільки виповниться, перша ні, в цьому і недолік!



// 3 спосіб, самий правильний
// btn.addEventListener('click', () => {
//     alert('Error!')
// });

// btn.addEventListener('click', () => {
//     alert('3Error!')
// });

let i = 0;
const deleteElement = (e) =>{
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);



// btn.addEventListener('mouseenter', (e) => {
//     //console.log('Hover');
//     // console.log(e.target);
//     // e.target.remove();
// });

btns.forEach(btns =>{
    btns.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', function(events) {
    events.preventDefault();
    console.log(events.target);

});

