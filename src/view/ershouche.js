function getData(i, arr){
  if (i >= arr.length) return
  return Promise.resolve(arr[i]).then(_ => getData(arr[++i], arr))
}

let list = [1, 2, 3, 4,]
let i = 0
let len = list.length
getData(i, list)


var urlList = [url1,url2,url3];
function dealData(i){
  return new Promise(function(resolve,reject)
  {
    $ajax({
      url:urlList[i],
      onSuc:function(){
        // ++i;
        resolve();
      },
      onFailed:reject()

    });

  });
}
var oPro;
for(var  i=0;i<urlList.length;i++)
{
  // var pro = function dealData(i){
  //   return new Promise(function(resolve,reject)
  //   {
  //     $ajax({
  //       url:urlList[i++],
  //       onSuc:function(){
  //         // ++i;
  //         resolve();
  //       },
  //       onFailed:reject()

  //     });

  //   });
  // }
  oPro = new Promise(function(resolve,reject){
    resolve(dealData());
  });
  pro.then(function(){
    resolve(dealData(i));

  }).catch(function(){
    break;
  })

}
