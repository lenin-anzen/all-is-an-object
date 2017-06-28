'use strict';

let somePerson = {
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
let jsFnCall = document.getElementById('js-function-call');
jsFnCall.innerHTML = somePerson.fullName.call(myObject);

let person = {
  nombre: 'Lenin',
  saludar: function(amigo1, amigo2) {
      let msg = 'Hola ' + amigo1;
      msg =+ ' y ' + amigo2;
      msg =+ ', yo soy ' + this.nombre;
    console.log(msg);
  },
};

let myFunction = person.saludar;
myFunction.call(person, 'Juan', 'Pedro');

let greet = function(name1, name2) {
    let message = this.toUpperCase() + ' ' + name1 + ' y ' + name2;
    let jsFnCallMsg = document.getElementById('js-function-call-message');
    jsFnCallMsg.innerHTML = message;
};
let names = ['Tom', 'Jerry'];
greet.call('hola', names[0], names[1]);
