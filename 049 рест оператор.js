const log = function(a, b, ...rest) {            //додається в кінці пісоя ... може мати будь яку назву
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

// function calcOrDouble(number, basis) {
//     basis = basis || 2;
//     console.log(number * basis);
// }

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);

