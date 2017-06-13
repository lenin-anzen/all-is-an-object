'use strict';

// Objects
var person = {
  firstName: "Lenin", 
  lastName: "Meza", 
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("js-simple-object-first-name").innerHTML = person.firstName;
document.getElementById("js-simple-object-last-name").innerHTML = person.lastName;
document.getElementById("js-simple-object-method").innerHTML = person.fullName();

// Functions
function PersonFn(firstName, lastName) {
    // Arguments passed to the constructor
    console.log('arguments:', arguments);
    document.getElementById("js-object-arguments").innerHTML = arguments.length;
    // Constructor
    this.firstName = firstName;  
    this.lastName = lastName;
    // Methods
    this.changeName = function (name) {
        this.firstName = name;
    }
}
var person2 = new PersonFn("", "Meza");
person2.changeName("Lenin");
document.getElementById("js-object-first-name").innerHTML = person2.firstName;
document.getElementById("js-object-last-name").innerHTML = person2.lastName;
// Add method to an existing prototype
person2.fullName = function () {
    return this.firstName + " " + this.lastName;
};
document.getElementById("js-object-full-name").innerHTML = person2.fullName();

PersonFn.prototype.nationality = "Mexican";
document.getElementById("js-object-nationality").innerHTML = person2.nationality;
