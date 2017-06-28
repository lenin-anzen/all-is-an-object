'use strict';

let count = (function() {
    let x = 0;
    let inc = function() {
        return x++;
    };
    let dec = function() {
        return x--;
    };
    let getCount = function() {
        return x;
    };
    return {
        inc: inc,
        dec: dec,
        getCount: getCount,
    };
})();

console.log(count);
console.log(count.inc());
console.log(count.inc());
document.getElementById('js-closure-1').innerHTML = count.getCount();
console.log(count.getCount());
console.log(count.dec());
console.log(count.getCount());

document.getElementById('js-closure-2').innerHTML = count.getCount();
