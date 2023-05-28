// события на мобильном устройстве:

//touchstart при возниикновении касания к элементу
//touchmove  палец движеться по елементу
//touchend   палец оторвался от элемента

//touchenter    ведем пальцем по экрану 
//touchcancel    точки соприкосновения больше не фиксируется в браузере

window.addEventListener('DOMContentLoaded', () => {
    
    const box = document.querySelector('.box');
    
    
    box.addEventListener('touchstart', (e) =>{
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });


    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });

});


// touches
// targetTouches
// changedTouches
