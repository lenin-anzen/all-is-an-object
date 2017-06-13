'use strict';

var somePerson = {
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
document.getElementById("js-function-call").innerHTML = somePerson.fullName.call(myObject);

var person = {
  nombre: "Lenin",
  saludar: function(amigo1, amigo2) {
    console.log("Hola " + amigo1 + " y " + amigo2 + ", yo soy " + this.nombre);
  }
};

var myFunction = person.saludar;
myFunction.call(person, "Juan", "Pedro");

var greet = function(name1, name2) {
    var message = this.toUpperCase() + ' ' + name1 + ' y ' + name2; 
    document.getElementById("js-function-call-message").innerHTML = message;
}
var names = ['Tom', 'Jerry'];
greet.call('hola', names[0], names[1]);
