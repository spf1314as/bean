// 继承 原型 原型链

// 1.Object.create(null)  Object.create({})

// 2. 实现 构造函数B 继承构造函数A

// 3. 继承方式 原型继承 寄生继承 组合继承

// 

function A(name){
    this.name = name;
}
A.prototype.sayName = function () {
    console.log(this.name)
}

function B(name){

}

var b = new B('xiaomi')
// b.sayName() > xiaomi

function Parent(){

}

Parent.prototype = {
    sayName:function () {
        console.log('111')
    }
}

var parent = new Parent();

console.log(parent.constructor)
console.log(parent.__proto__)
console.log(parent.prototype)
console.log(parent.__proto__ === Parent.prototype)
console.log(Object.getPrototypeOf(parent) === Parent.prototype)
console.log(Parent.prototype.constructor)
console.log(Parent.prototype.__proto__)
console.log(Parent.prototype.prototype)










