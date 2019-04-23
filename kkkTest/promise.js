let p = new Promise((resole) => {
  console.log('00')
  resole('promise')
})
p.then(_ => console.log(_))
console.log('111')
setTimeout(_ => {
  console.log('timeout')
},0)
console.log('222')
// 111 222 00 promise timeout

function out() {
  for(var i= 0; i<10;i++){
    var j = i;
      setTimeout(function () {
          console.log(j)
      },1000)
  }
}

out() //10*10
function out1() {
  for(let t= 0; t<10;t++){
    // var j = i;
      setTimeout(function () {
          console.log(t)
      },1000)
  }
}

out1() //10*10
