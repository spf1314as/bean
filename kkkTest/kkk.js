/*var kkk = "strgeljtkhikrjykstrghs";
var n = 0;
kkk.replace(/(tr)(g)/g,function(a,b,c,d,e,f){
console.log(arguments);
n++;

})
console.log(n);
isNaN("10blue")
console.log(isNaN("10blue"));

var arr = [1,2,1,2,3,1,5];
for(var i = 0 ; i< arr.length; i++)
{
  for(var j = i+1; j<arr.length; j++)
  {
    if(arr[i] === arr[j]){
      arr.splice(i,1);
    }
  }

}
console.log(arr)*/

// function Game () {
//   if (this instanceof Game) {
//     console.log('new')
//   } else {
//     console.log('normal')
//   }
// }

// Game()
// new Game()

//doudou-0419
// Function.prototype.apply2 = function(content,arr)
// {
//   var obj = Object(content)||window;
//   obj.fn = this;
//   if(!arr)
//   {
//     obj.fn();

//   }else
//   {
//     var args = [];
//      for(var i = 0;i<arr.length;i++)
//      {
//          args.push('arr['+i+']');

//      }
//      eval('obj.fn('+args+')');
//   }
//   delete obj.fn

// }
// Function.prototype.call2 = function(content,arr)
// {
//   var obj = Object(content)||window;
//   obj.fn = this;
//   if(!arr)
//   {
//     obj.fn();

//   }else
//   {
//     var args = [];
//      for(var i = 1;i<arguments.length;i++)
//      {
//          args.push('arguments['+i+']');

//      }
//      eval('obj.fn('+args+')');
//   }
//   delete obj.fn

// }
// Function.prototype.bind = function(content,arr)
// {
//   var that = this;
//   var obj = Object(content)||window;
//   var args = [].slice.call(arguments,1);

//   function fn(){
//     this.arguments = args.concat([].slice.apply(arguments))

//   }
//   fn.prototype = Object(that.prototype);
//   fn.constructor = fn;
//   return fn;

// }


//array.flat

//reduce 归并 数组展开 flat
;(function(){
  function flat(arr,n){
      return arr.reduce(function(prev,cur,index,array){
          if(Array.isArray(cur) && n >1){
              return flat(prev.concat(cur),--n);
          }else{
              return prev.concat(cur);
          }
      },[]);
  }
  var arr = [2,3,[[[5,6]]],[[[7]]]];
  console.log(flat(arr,3));
})()
//random
;(function(){
  function random(arr) {
    var newArr = [];
    var len = arr.length;
    do{
        var index = Math.floor(Math.random()*len);
        if(newArr.indexOf(arr[index]) === -1){
            newArr.push(arr[index])
        }

    }while (newArr.length < len)
    return newArr
}

var arr = [2,4,6,7,8,9,10];
console.log(random(arr))
})();

;(function(){
  function bubble(arr){
     var len = arr.length;
     for(var i = 0;i<len-1;i++){
       for(var j = 0;j<len-i-1;j++){
           if(arr[j] >= arr[j+1]){
             var tmp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = tmp;
           }
       }
     }
     return arr;
  }
  var arr = [2,4,9,1];
//  console.log(bubble(arr));
let result = []
 function quick(arr) {

  if(arr.length <2){
      return arr


  }
  var min = [];
  var max = [];
  for(var i = 1 ;i<arr.length;i++){
      if(arr[0] >= arr[i]){
          min.push(arr[i])
      }else{
          max.push(arr[i])
      }
  }

   return quick(min).concat(arr[0],quick(max))
 }
// var res = quick(arr);
// console.log(res);
// console.log(quick(arr));
//选择排序
   function select(arr){
      var len = arr.length;
      var minIndex = 0;
      for(var i = 0;i<len-1;i++){
        minIndex = i;
        for(var j = i+1;j<len;j++){
          if(arr[j] <= arr[minIndex]){
            minIndex = j

          }
        var temp = arr[i];
        arr[i]=arr[minIndex]
        arr[minIndex] =temp;

        }

      }
      return arr;
   }
console.log(select(arr));
})()
//deep-clone
;(function () {
  var arr = [12,{name:'doudou',age:18}]
  function deepclone(arr){

      if(Array.isArray(arr)){
          return arr.map(deepclone)
      }else if( typeof arr === 'object'){
          var obj = {};
          for(var key in arr){
              obj[key] = deepclone(arr[key])
          }
          return obj
      }else{
          return arr
      }

  }
  console.log(deepclone(arr));
  })();
//function return
;(function(){

  function foo(){
    return {};
  }
  var a = new foo();
  console.log(a);
})()


