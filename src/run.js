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
   return {
     name,
     getName() {
       console.log(name)
     },
     setName(v) {
       name = v
     }
  }
})()

obj.name = 9999
console.log(obj.name)
obj.getName()
obj.setName('doudou')
obj.getName()

