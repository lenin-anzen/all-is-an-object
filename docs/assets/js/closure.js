'use strict';

var count = (function() {
    var x = 0;
    return function() {
        return x++;
    }
})();

console.log(count);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
