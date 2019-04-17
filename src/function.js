// 1. bind

// 2. call apply

// 3. 函数节流

// 4. 函数抖动

// 5. iife 创建局部作用域

// 6. 订阅发布模式 bus插件就是

// 7. Object.defineProperty()

// 8. 下面代码输出结果

function out() {
    for(var i= 0; i<10;i++){
        setTimeout(function () {
            console.log(i)

        },1000)
    }

}

out()

new Promise(function (resolve,reject) {
    console.log('1')
    resolve(true)
}).then(function(res){
    console.log('2')
})
setTimeout(function () {
    console.log(3)
},1000*1)
console.log(4)


function a() {
    console.log(b)

}
a()
var b = 1;
b= 2;
a();

var obj = {
    a: 'obj',
    get:function () {
        console.log(this.a)
    }
}
obj.get()
var objGet = obj.get;
objGet();
var objGet2 = obj.get.bind(obj)
objGet2();

// 9. promise
// 9.1 Promise.all()  then  catch

//9.2 手写promise

//9.3 取消promise

//10 函数柯里化 纯函数 高阶函数 函数编程

// 10.1 实现 show(5)(2) > 7

// 11 var d = new Date() 实现d.formate() 输出 xxxx年xx月xx日
// 12 实现链式调用




