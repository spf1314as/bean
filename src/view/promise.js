let p1 = function (){
  return new Promise(resolve => {
    setTimeout(_ => {
      resolve(1111)
    }, 3 * 1000)
  })
}
let p2 = _ => {
  return new Promise(resolve => {
    setTimeout(_ => {
      resolve(1111)
    }, 5 * 1000)
  })
}

let pp1 = p1()
let pp2 = p2()

Promise.all([p1(), p2()]).then(res => {
  console.dir(res)
})

let ajax = function () {
  return new Promise((res, rej) => {
    $ajax({
      success: function(e) {
      },
      fail: function(error) {
        rej(error)
      }
    })
  })
}
ajax.then(res => {}, _ => {})
Promise.reject().then(_ => {})

