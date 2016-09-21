var obj = Object.create({x: 1});
console.info(obj);
console.info(obj.x);    //1
console.info(obj.__proto__);    //{ x: 1 }
console.info(obj.hasOwnProperty("x"));      //false


var obj2 = Object(null);
console.info(obj2.toString);


