/**
 * Created by 伟明 on 2016/9/27.
 */

var obj = {x:1, y : true, z :[1,2,3]};
var json = JSON.stringify(obj);
console.info(json);

var obj = JSON.parse(json);
obj.toString = function () {
    return this.x + 1000000;
}
console.info(obj.toString());
