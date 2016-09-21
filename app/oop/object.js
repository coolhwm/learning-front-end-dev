//对象字面量1
var obj1 = {x: 1, y: 2}

console.info(obj1);

var obj3 = Object.create(obj1);
obj3.z = 3;
console.info(obj3);

var key;
for(key in obj3){
    console.info(key);
}


//对象字面量2
var obj2 = {
    x: 1,
    y: 2,
    o: {
        z: 3,
        n: 4
    }
}




