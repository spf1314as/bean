/*let p1 = new Promise((resolve, reject) => {
    for(let i = 0 ; i < 100000; i++) {
        resolve('p1')
    }
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(_ => reject('p2'), 3000)
}).catch(_ => 3)

let p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('p3')
    }, 5 * 1000);
})


Promise.all([p1, p2, p3]).then(res => {
    console.log('resolve')
    console.log(res)
}).catch(res => {
    console.log('catch')
    console.log(res)
}).finally((res) => {
    console.log(res)
    console.log('finally')
})
*/

/*let a = [1,2,3]
let b = [1,2,3]
let c = '1,2,3'
console.log(a == b) // false
console.log(a == c) // true
console.log(b == c) // true
*/