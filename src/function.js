// 1. bind

// 2. call apply
(function()
{
   function add(a,b)
   {
     return a+b;
   }
   add.call = function(scope,ars)
   {
       this = scope;
       add.arguments = ars;
       return add;
   }
})()
// 3. 函数节流
function throltt(fun,delay)
{
  var last,that = this;
  var now = +new Date();
  var oTimer;
  return function(...res)
  {
    if(last && last+now < delay)
    {
      oTimer && clearTimeout(oTimer);
      oTimer = setTimeout(function()
      {
         fun.apply(that,arguments);
      },delay)

    }
    else if((last && last+now != delay) || !last)
    {
      last = now;
      fun.apply(that,arguments);

    }

  }

}
// 4. 函数抖动
function debounce(fun,delay = 3000)
{
  var oTimer;
  var that = this;
    return function(...res)
    {
      oTimer && clearTimeout(oTimer);
      oTimer = setTimeout(function()
      {
        fun.apply(that,arguments);
      },delay);
    }
}
// 5. iife 创建局部作用域
(function()
{
  let name = '';
  return
  {
    name:name,
    getName: function ()
    {
      return name
    },
    setName:function(){}
  };

})()
// 6. 订阅发布模式 bus插件就是 npm bus典型的订阅发布


// 7. Object.defineProperty()

var obj = {};
Object.defineProperty(obj,'name',{
  writable:false,
 getName:function(){
   return this.Name;
 },
 setName:function(data){
    this.Name = data;
 }
});
// 8. 下面代码输出结果

function out() {
    for(var i= 0; i<10;i++){
        setTimeout(function () {
            console.log(i)

        },1000)
    }

}

out() //9 + > 10个10
// 写出console出来的结果

new Promise(function (resolve,reject) {
    console.log('1')
    resolve(true)
}).then(function(res){
    console.log('2')
})
setTimeout(function () {
    console.log(3)
},1000*1)
console.log(4)//4 1 2 3

// 写出执行结果
function a() {
  console.log(b)

}
a()
var b = 1;
b= 2;
a();
//2 2
var obj = {
    a: 'obj',
    get:function () {
        console.log(this.a)
    }
}
obj.get()//'obj'
var objGet = obj.get;
objGet();//undefined
var objGet2 = obj.get.bind(obj)
objGet2();//'obj'

// 9. promise
// 9.1 Promise.all()  then  catch

//9.2 手写promise

//9.3 取消promise

//10 函数柯里化 纯函数 高阶函数 函数编程

// 10.1 实现 show(5)(2) > 7

function show(a)
 {
    return function(b)
    {
       return a+b;
    }
 }
// 11 var d = new Date() 实现d.formate() 输出 xxxx年xx月xx日

// Date.prototype.formate = function() {console.log(`${this.getFullYears()}年`)}
(function()
{
   Date.prototype.formate = function(){
     var that = this;
     var sRes = "";
     sRes+=that.getFullYear()+'年'+that.getMonth()+'月'+that.getDay()+'日：“';
   }

})()
// 12 实现链式调用
var obj =
{
  name:'MADONGMEI',
  color:'red',
  setName:function(val)
  {
    var me = this;
    me.name= val;
    return me;
  },
  setColor:function(val2)
  {
    var me = this;
    me.color = val2
    return me;
  }
};
obj.setName('LILI').setColor('GREEN');


