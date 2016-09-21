# JavaScript 面向对象 - 学习笔记

## 1. 函数和作用域
### 1.1 基本概念
- 函数是一段JavaScript代码，被定义一次，可以被调用多次；
- 函数也是对象，可以像其他对象一样操作和传递，所以也成为**函数对象**；
- 函数包含函数名、参数列表、函数体、返回值；
- 没有返回值时会在函数执行结束时返回`undifined`；
- 可以使用`new`调用，

### 1.2 创建函数
- 包含函数声明和函数表达式；

#### 1.2.1 函数声明
- 函数声明可以在声明前进行调用（声明提前）；
```
//函数声明
function add(a, b) {
    return a + b;
}
```

#### 1.2.2 函数表达式
- 函数表达式不能在声明前进行调用，变量声明本身会被提前，但是函数赋值给变量不会；
- 命名函数表达式：命名本身访问不到，为`undifine`；在调试时命名函数可以显示名字；
- 无法在函数体内使用函数的名字调用自身；
``` javascript
//返回函数  func_add()(1,2);
function func_add() {
    return function (a, b) {
        return a + b;
    };
}
//函数表达式
var add_exp = function (a, b) {
    return a + b;
}
//命名的函数表达式
var add_named = function add(a, b) {
    return a + b;
}
//立即执行的函数表达式
(function () {
    alert("exec");
})();
```
#### 1.2.3 函数构造器
- 函数构造器：使用`Function`函数构造器，传入形参字符串和代码字符串进行构造；
- 不会前置，没有函数名，可以立即调用，允许命名；
``` javascript
//函数构造器
var add_constructor = new Function("a", "b", "return a + b");
var add_constructor = Function("a", "b", "return a + b");
```

### 1.3 调用方式
- 直接调用：`foo()`；
- 对象方法：`o.method()`；
- 构造器：`new Foo()`；
- call/apply/bind：`func.call(o)`；


### 1.4 this
- 全局的`this`：在浏览器中为`window`对象；
- 一般函数的`this`：还是为`window`对象，在node.js中为`global object`；在严格模式中为`undifined`；
- 作为对象方法函数的`this`：指向方法所属的对象；
- 构造器中的`this`：指向空的对象；
- 对象原型链上的`this`;
- `get/set`方法；

## 2. 对象
### 2.1 概述
- 对象中包含一系列属性，这些属性是无序的，每个属性都有一个字符串key和对应的value；
- 对象的属性是可以动态的添加或删除的；
- 可以使用`writable`,`enumerable`,`configurable`,`value`,`get/set`，修饰属性；
- 每个对象都有一个原型`prototype`属性；

### 2.2 创建对象
#### 2.2.1 对象字面量
最简单的创建对象方式：
``` javascript
var obj2 = {
    x: 1,
    y: 2,
    o: {
        z: 3,
        n: 4
    }
}
console.info(obj2.o.z);
```
#### 2.2.2 原型链
- 创建函数对象时，函数对象会默认带一个`prototype`对象属性。
- 通过原型链，可以实现继承的功能；原型的属性、方法，被所有对象共享，对象无法修改原型的属性；
- 使用`new`构造器的方法创建对象，创建对象的原型会指向构造器的`prototype`属性；
- 所有对象都有原型，字面量创建的对象原型指向`Object.prototye`；
- 原型链的根为`Object.prototype`，许多通用的方法都定义在其中；
- 使用对象的`__proto__`属性，可以访问到原型；
- 在访问对象属性时，若自身定义的属性中未包含目标属性名称，则会顺着原型链依次查找，一直找到`null`；
- 在复制对象属性时，若自身没有定义目标属性，则会定义该属性，并不会影响原型链上的同名属性；
- 可以使用`hasOwnPorperty`函数判断属性是否为自身属性；
- 可以使用`in`操作符判断是否对象是否包含目标属性；
- 可以使用`delete`操作符删除对象的自身属性，但不会影响到原型链；
``` javascript
//函数对象
function foo() {}
//原型
foo.prototype.z = 3;
var obj = new foo();
obj.y = 2;
obj.x = 1;
//访问原型属性
console.info(obj.z);    //3
//访问原型方法
console.info(typeof obj.toString);  //function
//判断属性归属
console.info('z' in obj);   //ture
console.info(obj.hasOwnProperty('z'));  //fasle

//原型属性无法写入
obj.z = 100;
console.info(foo.prototype.z);    //3
console.info(obj.hasOwnProperty('z'));  //true

//访问原型
console.info(obj.__proto__);    //Foo { z: 3 }
```

#### 2.2.3 Object.create
- 使用`Object.create()`方法创建对象，可以让创建对象的原型指向其构造的参数；
``` javascript
//构造对象
var obj = Object.create({x: 1});
console.info(obj.x);    //1
//访问原型
console.info(obj.__proto__);    //{ x: 1 }
//判断属性归属
console.info(obj.hasOwnProperty("x"));      //false
```

### 2.3 属性操作
#### 2.3.1 读写属性
- 可以使用点操作符或中括号进行属性访问；
- 可以使用`for in `来遍历属性，但是会遍历到原型链中的属性；
- 如果访问`undefined`的属性，那么会抛出`TypeError`；
- 可以使用`var yz = obj && obj.y && obj.y.z;`巧用运算符进行读取属性；
- 可以使用`getOwnPropertyDescriptor`方法获取属性的标签；
- 可以使用`Object.defineProperty(obj, prop, desc)`创建对象属性，默认标签都是`false`；
``` javascript
//访问属性
var obj = {x1 : 1, x2 :2};
console.info(obj.x1);
console.info(obj["x1"]);
//遍历属性
var p;
for(p in obj){
    console.info(obj[p]);
}
//链式访问属性
obj.y = {z:2};
var yz = obj && obj.y && obj.y.z;   //2
console.info(yz);
//获取属性标签
console.info(Object.getOwnPropertyDescriptor(Object, 'prototype'));
/*
 { value: {},
 writable: false,
 enumerable: false,
 configurable: false }*/

//使用defineProperty创建属性并自定义标签
Object.defineProperty(obj, 'zz', {enumerable: false, value: 100});
console.info(obj.zz);   //100
console.info(obj.propertyIsEnumerable('zz'));   //fasle
```

#### 2.3.2 删除属性
- 使用`delete`运算运算符就可以删除属性、方法；
- 返回`true`操作不一定会生效，但能够确保被删除；
- 原型链上的属性、方法不能删除；
- 局部变量和全局变量不能删除、函数也是如此；

```
//删除属性
delete obj.z;
console.info(obj.z);
```

#### 2.3.3 属性检测
- 可以使用`hasOwnPorperty`函数判断属性是否为自身属性，不包含原型链的属性；
- 可以使用`in`操作符判断是否对象是否包含目标属性，包含原型链的属性；
- 可以使用`propertyIsEnumerable`函数判断属性是否可以被枚举；

``` javascript
function Foo() {}
Foo.prototype.z = 3;
var obj = new Foo();
obj.y = 2;
obj.x = 1;
//判断是否为自身属性
console.info(obj.hasOwnProperty('z'));  //false
//判断是否包含属性
console.info('toString' in obj);   //true
//判断属性是否可枚举
console.info(obj.propertyIsEnumerable('x'));    //true
console.info(obj.propertyIsEnumerable('toString')); //fasle

//属性访判断
if(obj && obj.z){
    console.info('z');
}
//属性不为null且不为undifined
if(obj.z != undefined){
    console.info('z');
}
//属性不为undifined
if(obj !== undefined){
    console.info('z')
}
```

#### 2.3.4 属性遍历
- 可以使用`for in `语法来遍历所有的属性；
- 自定义的属性默认是可以遍历的，可以使用`hasOwnProperty`方法进行判断，只处理自身属性；

#### 2.3.5 get/set方法
- 使用`get/set`关键词可以定义get/set方法；
- 是用`get/set`方法读写属性时，和读写属性一致；
- 在`get/set`方法中可以做一些初始化等特殊操作；
- 当原型链上存在`get/set`方法时，就无法直接定义同名的自身属性；可以使用`Object.defineProperty`函数覆盖；

``` javascript
var man = {
    name : 'Bosn',
    weibo : '@Bosn',
    //定义get方法
    get age(){
        return new Date().getFullYear() - 1988;
    },
    //定义set方法
    set age(val){
        console.log("Age can't be set to " + val);
    }
};
//通过get方法访问属性
console.log(man.age);
//通过set方法设置属性
man.age = 100;
console.log(man.age);

//继承man，试图覆盖原型链上的age属性，但是无法覆盖
var user = Object.create(man);
console.log(user.age);  //28
user.age = 100;
//使用defineProperty覆盖原型链的属性
Object.defineProperty(user, 'age',{value:0, configurable:true})
console.log(user.age);  //0
delete user.age;
console.log(user.age);  //28
```

