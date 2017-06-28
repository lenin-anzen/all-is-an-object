'use strict';

// Objects
let person = {
  firstName: 'Lenin',
  lastName: 'Meza',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
};
let jsSiObjsFN = document.getElementById('js-simple-object-first-name');
jsSiObjsFN.innerHTML = person.firstName;
let jsSObjLN = document.getElementById('js-simple-object-last-name');
jsSObjLN.innerHTML = person.lastName;
let jsSObjM = document.getElementById('js-simple-object-method');
jsSObjM.innerHTML = person.fullName();

// Functions
function PersonFn(firstName, lastName) {
    // Arguments passed to the constructor
    console.log('PersonFn: arguments', arguments);
    document.getElementById('js-object-arguments')
    .innerHTML = JSON.stringify(arguments);
    // Constructor
    this.firstName = firstName;
    this.lastName = lastName;
    // Methods
    this.changeName = function(name) {
        this.firstName = name;
    };
}
let person2 = new PersonFn('', 'Meza');
person2.changeName('Lenin');
console.log('person2.firstName', person2.firstName);
console.log('person2.lastName', person2.lastName);
let jsObjFN = document.getElementById('js-object-first-name');
jsObjFN.innerHTML = person2.firstName;
let jsObjLN = document.getElementById('js-object-last-name');
jsObjLN.innerHTML = person2.lastName;
// Add method to an existing prototype
person2.fullName = function() {
    return this.firstName + ' ' + this.lastName;
};
let jsObjFullN = document.getElementById('js-object-full-name');
jsObjFullN.innerHTML = person2.fullName();

PersonFn.prototype.nationality = 'Mexican';
let jsObjN = document.getElementById('js-object-nationality');
jsObjN.innerHTML = person2.nationality;
