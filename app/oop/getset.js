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


var user = Object.create(man);
console.log(user.age);  //28
user.age = 100;

Object.defineProperty(user, 'age',{value:0, configurable:true})
console.log(user.age);  //0
delete user.age;
console.log(user.age);  //28