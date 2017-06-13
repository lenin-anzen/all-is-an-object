'use strict';

var anyPerson = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Lenin",
    lastName: "Meza",
}
document.getElementById("js-function-apply").innerHTML = anyPerson.fullName.apply(myObject);

// min/max number in an array
var numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
document.getElementById("js-function-apply-max").innerHTML = Math.max.apply(null, numbers); 
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)
document.getElementById("js-function-apply-min").innerHTML = Math.min.apply(null, numbers);
