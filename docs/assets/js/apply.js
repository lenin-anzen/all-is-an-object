'use strict';

let anyPerson = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
};
let myObject = {
    firstName: 'Lenin',
    lastName: 'Meza',
};
let jsFnApply = document.getElementById('js-function-apply');
jsFnApply.innerHTML = anyPerson.fullName.apply(myObject);

// min/max number in an array
let numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let jsFnApplyMax = document.getElementById('js-function-apply-max');
jsFnApplyMax.innerHTML = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)
let jsFnApplyMin = document.getElementById('js-function-apply-min');
jsFnApplyMin.innerHTML = Math.min.apply(null, numbers);

let greet = function(name1, name2) {
    let message = this.toUpperCase() + ' ' + name1 + ' y ' + name2;
    let jsFnApplyMsg = document.getElementById('js-function-apply-message');
    jsFnApplyMsg.innerHTML = message;
};
let names = ['Tom', 'Jerry'];
greet.apply('hola', names);
