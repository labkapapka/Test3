"use strict";

// if (4){
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }



// if (num < 49) {
//     console.log('Error')
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }
// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = '51';

switch (num) {
    case '49':
        console.log('Miss');
        break;
    case '100': 
        console.log('Miss');
        break;
    case '50':
        console.log('In dot!');
        break;
    default:
        console.log('Not right');
        break;
        
}