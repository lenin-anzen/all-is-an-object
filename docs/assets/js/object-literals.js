'use strict';

let user1 = {
    name: 'Lenin',
    lastName: 'Meza',
    address: {
        country: 'Mexico',
        zc: '01000',
    },
};
console.log('user1:', user1);

let user2 = new Object();
user2.name = 'Lenin';
user2.lastName = 'Lenin';
user2.address = new Object();
user2.address.country = 'Mexico';
user2.address.zc = '01000';
console.log('user2:', user2);

let Person = function(name, lastName, address) {
    this.name = name;
    this.lastName = lastName;
    this.address = address;
};
let user3 = new Person('Lenin', 'Meza', {country: 'Mexico', zp: '01000'});
console.log('user3:', user3);
