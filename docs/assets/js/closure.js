'use strict';

let count = (function() {
    let x = 0;
    return function() {
        return x++;
    };
})();

console.log(count);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
