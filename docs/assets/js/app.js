'use strict';

var Demo = angular.module( "Demo", [] );

(function( ng, app ){
    app.controller( "AppController", function( $scope ) {
        // Function
        var Person = function(firstName, lastName) {
            // Constructor
            this.firstName = firstName;  
            this.lastName = lastName;
        }
        // Add a method to the object prototype
        Person.prototype.getFullName = function() {
            return this.firstName + " " + this.lastName;
        };
        $scope.father = new Person("Jose", "Meza");
        $scope.mother = new Person("Raquel", "Zarco");

        var getName = function() {
            return this.name;
        }
        var objectA = {
            name: "Alice",
            getName: getName
        };
        var objectB = {
            name: "Bob",
            getName: getName
        };
        console.log(objectA.getName());
        console.log(objectB.getName());
	});
})( angular, Demo );
