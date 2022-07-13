// 1
function expo (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        for (let i = 1; i < b; i++)
        console.log(a ** i);
    }
}
expo(2,8);
console.log('-----------------------------1');

// 2 Fruits
let fruit = 'strawberries'
function printFavoriteFruit (fruit) {
    fruit = 'Peach'
    console.log('My favorite fruit is:', fruit);
}
printFavoriteFruit (fruit);
console.log('---------------------------2');

// 3
// let result = 0;
function exponent (a, b) {
     let result = a ** b
    //  return result;
     console.log(result);
}
exponent (2,8);
// 
console.log('---------------------------3');