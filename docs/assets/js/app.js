'use strict';

let Demo = angular.module( 'Demo', [] );

(function( ng, app ) {
    app.controller( 'AppController', function( $scope ) {
        // Function
        let Person = function(firstName, lastName) {
            // Constructor
            this.firstName = firstName;
            this.lastName = lastName;
        };
        // Add a method to the object prototype
        Person.prototype.getFullName = function() {
            return this.firstName + ' ' + this.lastName;
        };
        $scope.father = new Person('Jose', 'Meza');
        $scope.mother = new Person('Raquel', 'Zarco');

        let getName = function() {
            return this.name;
        };
        let objectA = {
            name: 'Alice',
            getName: getName,
        };
        let objectB = {
            name: 'Bob',
            getName: getName,
        };
        console.log(objectA.getName());
        console.log(objectB.getName());
	});
})( angular, Demo );
