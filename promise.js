function a() {
    // promise: 약속의 객체!
    return new Promise(function (resolve){
        setTimeout(() => {
            console.log('A')
            resolve('Hello A')
        }, 1000)
    })
}
function b() {
    // promise: 약속의 객체!
    return new Promise(function (resolve){
        setTimeout(() => {
            console.log('B')
            resolve('Hello B')
        }, 1000)
    })
}
function c() {
    // promise: 약속의 객체!
    return new Promise(function (resolve){
        setTimeout(() => {
            console.log('C')
            resolve('Hello C')
        }, 1000)
    })
}
function d() {
    // promise: 약속의 객체!
    return new Promise(function (resolve){
        setTimeout(() => {
            console.log('D')
            resolve('Hello D')
        }, 1000)
    })
}
async function test() {
    const h1 = await a()
    const h2 = await b()
    const h3 = await c()
    const h4 = await d()
    console.log('Done!')
    console.log(h1, h2, h3, h4)
}
test()