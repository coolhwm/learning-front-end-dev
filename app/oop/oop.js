/**
 * Created by 伟明 on 2016/9/7.
 */
//立即执行的函数表达式
(function () {
    alert("exec");
})();

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


//函数声明
function add(a, b) {
    return a + b;
}

//函数构造器
var add_constructor = new Function("a", "b", "return a + b");



