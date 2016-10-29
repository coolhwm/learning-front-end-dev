/**
 * Created by 伟明 on 2016/9/27.
 */

var BAT = ['B', 'A', 'T'];
var student = [{name:"jack", age : 5}, {name:"tom", age : 5}]

var arr = new Array(1,2,3,4,5);
var arrL = new Array(100);


var B = BAT[0];
console.info(B);

var l = BAT.length;
console.info(l);

delete BAT[0];
console.info(BAT[0]);


arr.push('1');
console.info(arr);
arr.unshift("0");
console.info(arr);
arr.pop();
console.info(arr);
arr.shift();
console.info(arr);


for(var i = 0; i < arr.length; i++){
    console.info(arr[i]);
}

for(i in arr){
    console.info(arr[i]);
}
