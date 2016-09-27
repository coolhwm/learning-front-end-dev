/**
 * Created by 伟明 on 2016/9/27.
 */

var desc = Object.getOwnPropertyDescriptor({pro: true}, 'pro');
console.info(desc);


var person = {};
Object.defineProperty(person, "name", {
    configuable : false,
    writable : false,
    enumerable : true,
    value : "Test"
});

console.info(person.name);
person.name = 123;
console.info(person.name);
console.info(Object.keys(person));

Object.defineProperties(person, {
    title : {enumerable : true, value : "title"},
    age : {enumerable : false,value : "age"
    }
});

console.info(Object.keys(person));