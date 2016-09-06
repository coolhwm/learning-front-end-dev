# JavaScript 面向对象 - 学习笔记

## 1. 函数
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

### 调用方式
- 直接调用：`foo()`；
- 对象方法：`o.method()`；
- 构造器：`new Foo()`；
- call/apply/bind：`func.call(o)`；


