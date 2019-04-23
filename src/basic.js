// 1. 写出运行的结果

 [] === 0; //false
 [] == 0;  //"" 0 true
 null == 0; //false
 null === 0; //false
 null == undefined; //true

 Number(undefined) == NaN; //false
NaN === NaN; //false
NaN == NaN

isNaN(false) ; // false
isNaN('1px'); // true
false == 0;  //true

!![]; Boolean([]) //true
!!{}; //true
typeof {}; //"object"
typeof []; //"object"
// 判断数组的方法1 2
Array.isArray([])
Object.prototype.toString().apply([]) === "[object Array]"
Object.prototype.toString().call([]) === '[object Array]'
// 2.js 中定义变量的方式有几种
//var let function class import Symbol
//*2.1 函数声明和函数表达式的区别
/* 函数声明 function funName(){}--声明提前
函数表达式 var funName = function(){}-执行到此行才创建*/
// var a = b = 1; // 出现的问题是什么
/*
  同时赋值给一个引用类型，a和b引用关系相同
  b 会成为全局变量
*/
// 3. typeof x  有多少种结果
//"boolean" "undefined" "string" "number" "object" "function" + symbol
// 3.1 parseInt parseFloat Number 区别
/*
  parseInt可以指定两个参数，第二个参数是进制 parseFloat()只能解析十进制
  Number() false true '1px'
*/
// 3.2 isNaN()  // 存在的问题
// isNaN() false, true > false + 会使用Number进行类型转换

//4.实现一个数组的乱序排列

var arr;
arr.sort(randomSort()) // + arr.sort((a, b) => (Math.random() > 0.5))
function randomSort(val1,val2)
{
  var n = Math.random(0,arr.length)+1; // + Math.random()* arr.length + 1
  if(n/2 === 0)
  {
    return -1;
  }
  else{
    return 1;
  }
}
// 5.实现数组的排序
//  sort方法
var arr;
Array.property.method = function(f,index,arr) // 什么意思
{
   for(var i = 0; i<arr.length;i++)
   {
     f(arr)
   }
}


// 5.1 数组去重
for(var i = 0 ; i< arr.length; i++)
{
  for(var j = i+1; j<arr.length; j++)
  {
    if(arr[i] === arr[j]){
      arr.splice(i,1);
      j--;
    }
  }

}
var Res = [];
for(var i = 0;i <arr.length; i++ )
{
  if(Res.indexOf(arr[i]) === -1)
  {
    Res.push(arr[i]);

  }

}
// 对象的属性 [1,2,3,'1',1]
function unique (arr) {
  let obj = {}
  for (let i =0;i<arr.length; i++) {
    if (arr[i] in obj) {

    } else {
      obj[arr[i]] = true
    }
  }
  return Object.keys(obj)
}

// set
function unique(arr) {
  let set = new Set(arr)
  // return Array.from(set)
  return [...set]
}
//reduce
var Res = function(arr)
{
  return arr.reduce(function(prev,cur,index,arr)
  {
     if(prev.indexOf(cur) === -1)
     {
        prev.push(cur);

     }
     return prev;

  },[]);
}
// 6.实现两个数组的交集、并集
 var arr1, var arr2 ;
 var Res = [];
 //并集：
 for(var i = 0;i < arr1.length;i++){
   if(Res.indexOf(arr1[i] === -1))
   {
     Res.push(arr1[i]);
   }

   for(var j = 0; j <arr2.length;j++)
   {
     if(Res.indexOf(arr2[j]) === -1)
     {
        Res.push(arr2[j]);
     }

   }
 }
//或者：
Res = arr1.concat(arr2);
//Res去重
//交集：
//交集1
var ResJ = [];
for(var i = 0;i<arr1.length;i++)
{
  for(var j = 0; j<arr2.length;j++)
  {
    if(arr1[i] === arr2[j])
    {
      if(ResJ.indexOf(arr1[i]) === -1)
      {
        ResJ.push(arr1[i]);

      }
    }
  }
}
// 交集2
for(var i = 0;i<arr1.length;i++)
{
  if(arr2.indexOf(arr1[i]) !== -1 && ResJ.indexOf(arr1[i]) === -1)
  {
   ResJ.push(arr1[i]);
  }
}
//7.实现数组的reduce方法  5 stars
Array.property.reduce = function(f,value)
{
   for(var i = 0 ; i < this.length; i++)
   {
     value = f(this[i],value);
   }
   return value;
}
//7.0 实现多层数组的展开
var arr = [
  [1,2,3],
  [3,[4,5,6]]
];
//reduce
var Res = function(arr)
{
  return arr.reduce(function(prev,cur,index,arr)
  {
    return prev.concat(Array.isArray(cur) ? Res(cur) : cur)
  },[])
}
//ES6
var newArr = functing(arr)
{
   return arr.reduce((prev,cur) => prev.concat(Array.isArray(cur) ? newArr(cur) : cur), [])
}
var Res = [];
function openArray(arr)
{
  var aTmp = [];
  for(var i =0; i<arr.length; i++)
  {
    if(Object.prototype.toString.apply(arr[i]) === "[object Array]")
   {
     aTmp = aTmp.concat(openArray(arr[i]));

   }else
   {
     aTmp.push(arr[i])
   }

  }
  return aTmp;
}
// 7.1 深拷贝
var arr;
var res = [];
function deepclone(arr) // 不对
{
  var res = [];
  if(Array.isArray(arr))
  {
     res = res.concat(arr.map(deepclone)) // + res.concat(arr.map(deepclone))
  }
  else if(Object.prototype.toString.apply(arr) === "[object object]") // + [object Object]
  {
    for(var key in arr)
    {
      res =
    }
    res = res.concat(arr);

  }
  else
  {
    res = res.concat(arr);
  }
 return res;

}
let obj = (function () {
  let name = 'eeee'
   function deepclone(arr) {
       if(Array.isArray(arr))
       {
         return arr.map(deepclone);

       }
       else if(typeof arr === "object" && arr !== null)
       {
         var obj = {};
         for(var key in arr)
         {
            obj[key] = deepclone(arr[key])
         }
         return obj;
       }
       else
       {
         return arr;
       }
   }
   return {name};
})()
// 7.2 判断两个对象是否相同
var obj1 = {name:'lilei',age:18,fruit:['apple','banna']};
var obj2 = {name:'lilei',age:18,fruit:['apple','banna']};
// 7.3 Object.create()

(function () {
    function create (obj) {
      var oFun = function () {
      }
      oFun.prototype = obj;
      return new oFun();
    }
})()
// 7.4 for...in Object.keys的区别 判断属于自身属性的方法
// for in包括原型中的属性，
// 8. ./a/b/c  ../a/c 相对路径表示出来
//  ./b/c     ../c
  function join (path1, path2) {
    let arr1 = path1.split('/') // ['..','a','b', 'c]
    let arr2 = path2.split('/') // ['..', 'a', 'c']
    for(var i = 0;i<arr1.length;i++){
      if(arr1[i] == '..'){
        var sTmp = arr[i+1];


      }
      for(var j = 0;j<arr2.length;j++){
        if(arr2[j] == '..'){
           var sTmp2 = arr2[j+1];
        }
      }

    }
  }

// 9. 闭包 作用域链
//
// 9.1 this arguments

// 10. jsonp原理(手写jsonp) websocket  跨域的其他方法 axios preflight withcredients
(function(window,document){

  var jsonp = function(){
    var sUrl = "http://127.0.0.1";
    var oData ={name:'doudou',age:18};
    sUrl += sUrl.indexOf('?')==-1?'?':'';
    for(var key in oData){ // index.htm?name=key&
      sUrl+='&'+key+'='+oData[key];

    }
    var sFunCall = 'myjsoncallback'+new Date.getTime();
    sUrl+='callback='+sFunCall;
    var script = document.createElement('script')
    script.src = url;
    window.sFunCall = function(data)
    {
      callback(data);
      function callback(){ //$.ajax({url,data:data, onsuccess:)

      }
      document.body.removeChild(script);
      window.sFunCall = null

    }
    document.body.appendChild(script);

  }
  window.$jsonp = jsonp;
})(window,document)  //jsonp(url,data,fn)
// 10.1 fetch xhr
//
// 11. http 的状态码
//200-OK 204 206 301 302-资源重定向 304  401 403 404-找不到 405 500-服务器错误 502 503
// 11.1 输入url 到页面渲染出来的过程
/*dns解析 返回静态资源文件
* css js 阻塞html 渲染 defer async type=module
*/
//11.2 首屏加载的优化

// 12 常用的图片的格式  webp
//jpg gif png

// 13. js垃圾回收机制  标记清除 引用计数

//14. requestAnimationFrame
//执行一个动画，浏览器在下次重绘前使用指定的回调函数更新动画，返回值一个整数，表示请求id
//通常与浏览器刷新次数相匹配
//一个作用域问题
function sendrequest()
{
  function onSucess()
  {
     console.log(sFileName);
  }
  var sFileName = "kkk.pdf";

  Utis.Request.action([],
    {
      onSucess:onSucess,
      onSucess:function()
      {
        onSucess(sFileName);
      },
      onFailed: onFailed
    });
}
