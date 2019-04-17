// 继承 原型 原型链
// 实现继承的常见方法
//原型链继承 组合继承 经典继承 寄生继承
// 1.Object.create(null)  Object.create({})

// 2. 实现 构造函数B 继承构造函数A

// 3. 继承方式 原型继承 寄生继承 组合继承

//

function A(name){
//  null {}
var createNull = Object.create(null);
console.log(createNull);
var onull = null;
// console.log(onull.toString());
// console.log(createNull.toString());//createNull没有任何方法，真正空
var createEmptyObj = Object.create({});
console.log(createEmptyObj);
console.log(createEmptyObj.toString());
console.log({}.toString());
console.log([].toString());

// 2. 实现 构造函数Bfun 继承构造函数Afun

function Afun(name){
    this.name = name;
}
Afun.prototype.sayName = function () {
    console.log(this.name)
}

function Bfun(name, age){
   Afun.call(this,name)
   this.age = age
}
Bfun.prototype = new Afun(); // B.prototype.constructor =
Bfun.prototype.constructor = Bfun; // B
var bobj = new Bfun('xiaomi', 9)
console.log(bobj.name)
console.log(bobj.age)
console.dir(bobj)
bobj.sayName() //> xiaomi

// 3. 写出下面console出的结果
function Parent(){

}

Parent.prototype = {
    sayName:function () {
        console.log('111')
    }
}

var parent = new Parent();
console.log('****************')
console.log(parent.constructor) // Object Object
console.log(parent.__proto__) // Parent.prototype  Object
console.log(parent.prototype) // undefined Object
console.log(parent.__proto__ === Parent.prototype) // true  false
console.log(Object.getPrototypeOf(parent) === Parent.prototype) //true true
console.log(Parent.prototype.constructor) // Object
console.log(Parent.prototype.__proto__) // Object.prototype {}
console.log(Parent.prototype.prototype) //undefined
console.log(Object.prototype.__proto__);//null
console.log(Object.constructor);
console.log(Object.__proto__);
console.log(1111);
var kkk = {name:'lll'};
// console.log(kkk.prototype.__proto__);

// 4. 写出下列的值
function Test () {

}
Test.prototype = {
  say: function() {
    console.log('say')
  },
  constructor: Test
}
var test = new Test()

console.log(test.constructor) //Test
console.log(test.__proto__ === Test.prototype) //Object

// 5 写出下面结果
Function.prototype.name1 = 'function'
Object.prototype.name2 = 'object'
function Persion(name) {
  this.name = name
}
var p = new Persion('name')
console.log('__________________')
console.log(p.name, p.name1, p.name2) //'name' 'function' 'object'
console.log(Persion.name1, Persion.name2) //'function' 'object'

// 6.一个function A(){},一个function B (){} A上有属性，A的原型上有方法，手写实现B继承A

function A1 (name) {
   this.name = name;
}
A1.prototype.say = function(){
  console.log('hello')
}
function B1 () {
  A1.apply(this,name)
}
B1.prototype = new A1();
B1.constructor = A1;
// 7 手写实现Object.create()方法 Object.setPrototypeof(child, parent)
function create(oldObj,newObj)
{
  function f()
  {
    another.apply(this);
  }
  f.prototype = oldObj;
  function another(){}
  another.prototype = newObj;
   f.prototype = new another();
   f.constructor = another;
   var oRes = new f();
  return oRes;

}
function setPrototype(child,parent)
{
    var childPrototype = Object.getPrototypeOf(child);
    var parentPrototype = Object.getPrototypeOf(parent);
    childPrototype = new parentPrototype.constructor();

}









