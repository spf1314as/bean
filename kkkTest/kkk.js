var kkk = "strgeljtkhikrjykstrghs";
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
console.log(arr)

