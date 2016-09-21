/**
* Created by 伟明 on 2016/9/21.
*/
function Foo() {}

Foo.prototype.z = 3;
var obj = new Foo();
obj.y = 2;
obj.x = 1;

console.info(obj.z);    //3
console.info(typeof obj.toString);  //function
console.info('z' in obj);   //ture
console.info(obj.hasOwnProperty('z'));  //fasle

obj.z = 100;
console.info(obj.z);    //100
console.info(Foo.prototype.z);    //3

delete obj.z;
console.info(obj.z);

console.info(obj.__proto__);    //Foo { z: 3 }


console.info(obj.hasOwnProperty('z'));  //false
console.info('toString' in obj);   //true
console.info(obj.propertyIsEnumerable('x'));    //true
console.info(obj.propertyIsEnumerable('toString')); //fasle

if(obj && obj.z){
    console.info('z');
}

if(obj.z != undefined){
    console.info('z');
}

if(obj !== undefined){
    console.info('z')
}

console.info(obj);