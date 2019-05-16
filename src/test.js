let p1 = new Promise((resolve, reject) => {
    for(let i = 0 ; i < 100000; i++) {
        resolve('p1')
    }
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(_ => reject('p2'), 3000)
})

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