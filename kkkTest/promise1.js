let p = new Promise(function(resolve,reject)
{
  if(true){
    resolve(111)
    console.log(Date.now())
  }else{
    reject(222)
  }
});
p.then(function resolve(oInfo){
     console.log('resolved')
     console.log(oInfo)
    throw new Error('oh')
},function reject(oMsg){
  console.log('rejected')
  console.log(oMsg)

}).catch(function reject(oError){
  console.log(oError)
});

async function myasync(){
  await Promise.resolve(111)
  console.log(111)
  // await Promise.reject(new Error(222))
  await Promise.reject(222).catch(function reject(err){console.log(err)})
  console.log(222)
  await Promise.resolve(333)
  console.log(333)
  try{
    await Promise.reject(444)
  }
  catch(err){
   console.log(err);
  }
  return new Error('5555')
}
myasync().then(res => console.log(res), _ => console.log(_))
