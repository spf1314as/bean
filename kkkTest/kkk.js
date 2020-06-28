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
})();

function bubble(arr) {
  var len = arr.length;
  for(var i =0,bChange = true;i<len-1 && bChange;i++){
    bChange  = false;
      for(var j =0;j<len-i-1;j++){
          if(arr[j]>= arr[j+1]){
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
              bChange = true;
          }
      }
  }
  return arr
  // var len = arr.length;
  // for(var i = 0,bChange = true;i<len-1 && bChange;i++)
  // {
    // bChange = false
  //     for(var j = 0;j<len-i+1;j++)
  //     {
  //       if(arr[j] > arr[j+1])
  //       {
  //          var tmp = arr[j];
  //          arr[j] = arr[j+1];
  //          arr[j+1] = tmp;
             //bChange = true;

  //       }

  //     }

  // }
}
bubble([1,2,3,4,5]);
function select(arr) {
  var len = arr.length;
  var minIndex = 0;

  for(var i=0;i<len-1;i++){
      minIndex = i;
      for(var j = i+1;j<len;j++){
          if(arr[j]<= arr[minIndex]){
              minIndex = j;
          }
      }
      var temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp
  }
  return arr
  // var len = arr.length;
  // var minIndex = 0;
  // for(var i = 0; i<len-1;i++){
  //   minIndex = i;
  //   for(var j = i+1;j<len;j++){
  //     if(arr[j] <=arr[minIndex]){
  //         minIndex = j;
  //     }
  //   }

  // }

}
console.log(select([2,5,6,7,9,3]));
function insertSort(arr) {
  var len = arr.length;
  var temp;
  for (var i = 1;i < len;i++){
      temp = arr[i]
      for (var j = i;j > 0 && temp < arr[j-1];j--){
          // 当前值和之前的每个值进行比较，发现有比当前值小的值就进行重新赋值
          arr[j] = arr[j-1];
      }
      arr[j] = temp;
  }
  return arr;
}
console.log(insertSort([2,5,4,7,9,3]));

var nIndex = 0;
var arrtry =[2,4,5,6,7,8,9];
var Res = arrtry[0];
function getFourth(arr)
{
  if(nIndex===4){ return Res;}
   var Max = Math.max.apply(null,arr);
   if(nIndex < 4)
   {
    Res = Max;
    nIndex++;
    arr.splice(arr.indexOf(Max),1);
      getFourth(arr);
      // return Max;
   }



}
getFourth(arrtry)
console.log(Res);

var nIndex2 = 0;

function getFourth2(arr,n){
  // var aRes = [];

  //  return [].concat((function(aRes){
  //   // if(aRes.length === 4){return}
  //   var Max = Math.max.apply(null,arr);
  //   aRes.push(Max);
  //   arr.splice(arr.indexOf(Max),1);
  //  return aRes.length===4 ? aRes: getFourth2(arr);
  //   // return aRes;
  //  })([]));
   return (function dealData(aRes){
    var Max = Math.max.apply(null,arr);
    aRes.push(Max);
    arr.splice(arr.indexOf(Max),1);
   return aRes.length===n ? aRes: dealData(aRes);
   })([])
  //  aRes.length<4&&aRes.concat(getFourth2(arr))
  //  return aRes.concat(getFourth2(arr))
}
console.log(getFourth2([2,4,5,6,7,8,9],4))

function getFourth3(arr){
  var len = arr.length;
  var max = [],min = [];
    for(var i = 1;i<len-1;i++){
       if(arr[0]>=arr[i]){
          min.push(arr[i]);
       }else{
         max.push(arr[i]);
       }
    }
    return
}
//字符串中出现最多次数的字符
//数组中寻找和最接近m的两个元素
//不使用loop，创建一个长度为100的数组且每个元素的值等于下标
/**  number*/
function dealNumber(num)

{
if(num < 1000)return num;
var pieNum = parseInt(num/1000);
  if(num%1000 < 1000){
    // return ','+num%1000+dealNumber(pieNum);
    return dealNumber(pieNum)+','+num%1000;
  }

}
console.log(dealNumber(1456789));
