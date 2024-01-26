/*
this is the implementation of the object.
*/
var person = {
    name: 'mitra',
    age: 23
};
// this gives the error 
// console.log(person.game)   
console.log(person.age);
// example 2
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(product.tags);
/// example 2
// in type script there is special type that is string[] which we have seen earlier
var palaces;
// name1 ='sefef' wil give error
palaces = ['hyderabad', 'vijayawada'];
console.log(palaces);
/*question here is the what if we have the mixed datatypes
for that there is speacial type to declare  that is any[] */
// example 4
var random;
random = ["string", 123, { game: 'chess' }];
console.log(random[2].game);
// example 5 
//  when the requirement is like is we know exact length and also the types
var person1 = {
    name: 'mitra',
    age: 23,
    arr: ['jenkins', 2]
};
// push is an exception in type script in tuples that cant catch the error in we push less
// than the length of the array 
//person1.arr.push["stdf",4,"sdfsdf"]; will give error
person1.arr[1] = 2;
console.log(person1.arr);
// example 5 working with the enum datatype is customed in type script only
// this will auto increment starting with zero.
var Rank;
(function (Rank) {
    Rank[Rank["Connel"] = 0] = "Connel";
    Rank[Rank["Major"] = 1] = "Major";
    Rank[Rank["General"] = 2] = "General";
    Rank["Captain"] = "role mission accomplishments";
})(Rank || (Rank = {}));
var person3 = {
    name: 'mitra',
    age: 23,
    role: Rank.Captain
};
console.log(person3.role);
