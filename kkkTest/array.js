var arr = [2,[3,4],[[5,[[[[[[6]]]]]]]]];
function flat(arr){
 return (function deal(aRes,arr){
  for(var i = 0;i<arr.length;i++){
     if(Array.isArray(arr[i])){
      aRes.concat(deal(aRes,arr[i]))
     }else{
      aRes.push(arr[i])
     }
   }
   return aRes;
 })([],arr)

}
function flat2(arr){
   return arr.reduce(function(prev,cur,index,array){
     if(Array.isArray(cur)){
     return   prev.concat(flat2(cur))
    //  return flat2(prev.concat(cur))
     }else{
      return prev.concat(cur);
     }

  },[])
}
console.log(flat(arr));
console.log(flat2(arr));
