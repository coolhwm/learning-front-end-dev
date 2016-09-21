var obj = {x1: 1, x2: 2};
console.info(obj.x1);
console.info(obj["x1"]);

var p;
for (p in obj) {
    console.info(obj[p]);
}

console.info(obj.y);    //undefined
//console.info(obj.y.z);    //TypeError: Cannot read property 'z' of undefined
//obj.y.z = 1               //TypeError: Cannot set property 'z' of undefined

obj.y = {z: 2};
var yz = obj && obj.y && obj.y.z;   //2
console.info(yz);

console.info(Object.getOwnPropertyDescriptor(Object, 'prototype'));
/*
 { value: {},
 writable: false,
 enumerable: false,
 configurable: false }*/


obj.test = function () {
};
console.info(obj.test);
delete obj.test;
console.info(obj.test);

Object.defineProperty(obj, 'zz', {enumerable: false, value: 100});
console.info(obj.zz);   //100
console.info(obj.propertyIsEnumerable('zz'));   //fasle




