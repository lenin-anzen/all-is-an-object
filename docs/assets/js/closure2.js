'use strict';

var count = (function() {
    var x = 0;
    var inc = function() {
        return x++;
    }
    var dec = function() {
        return x--;
    }
    var getCount = function() {
        return x;
    }
    return {
        inc: inc,
        dec: dec,
        getCount: getCount,
    };
})();

console.log(count);
console.log(count.inc());
console.log(count.inc());
console.log(count.getCount());
console.log(count.dec());
console.log(count.getCount());

document.getElementById("js-closure").innerHTML = count.getCount();
