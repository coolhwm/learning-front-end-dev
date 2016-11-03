/**
 * Created by 伟明 on 2016/9/27.
 */

/*
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
*/



/*
var arr = [[0.1], [2,3], [4.5]];

var i = 0, j = 0;
var row;
for(;i < arr.length; i++){
    row = arr[i];
    console.log("row" + i);
    for(j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}*/


/*

//join：数组转换成字符串，可以指定分隔符
var arr1 = [1,2,3]
console.info(arr1.join("|"));       //1|2|3

//reverse：数组逆序（影响原数组）
console.info(arr1.reverse());       //[ 3, 2, 1 ]

//sort：按字母排序（不是大小）
var arr2 = [11,13, 23, 2, 33];
console.info(arr2.sort());          //[11,13,2,23,33]

console.info(arr2.sort(function (a, b) {
    return a - b;
}));    //[ 2, 11, 13, 23, 33 ]

//conact：合并数组
console.info(arr1.concat(arr2));    //[3,2,1,2,11,13,23,33]

//slice：切片（左闭右开）/负索引为倒数
console.info(arr2.slice(1,3));      //[11,13]

//splice：删除/添加元素（影响原数组）
arr2.splice(1,3, 'a', 'b');         //[11,13]
console.info(arr2);                 //[2,'a','b',33]*/

//forEach 数组遍历
var arr = [1,2,3,4,5,6];
arr.forEach(function (x, index, a) {
    console.info(x);
});

//map 数组映射
arr = arr.map(function (x) {
    return x + 10;
});
console.info(arr);  //[11,12,13,14,15,16]

//filter 数组过滤
arr = arr.filter(function (x, index) {
    return x > 13;
});
console.info(arr);  //[14,15,16]

//every 数组判断（每一个）
var b1 = arr.every(function (x) {
    return x > 10;
});
console.info(b1);   //true

// some 数组判断（有一个）
var b2 = arr.some(function (x) {
    return x === 14;
});
console.info(b2);   //true

//reduce/reduceRight(反向)
var max = arr.reduce(function (x, y) {
    return x > y ? x : y;
}, 0);
console.info(max);  //16

//indexOf 数组检索
console.info(arr.indexOf(16));

//isArray 数组判断
console.info(Array.isArray([]));
console.info([] instanceof  Array);

