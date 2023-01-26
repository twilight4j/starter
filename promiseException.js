function a(number) {
  return new Promise(function (resolve, reject){
    if (number > 4){
      reject()
      return
    }  
    setTimeout(() => {
          console.log('A')
          resolve('Hello A')
      }, 1000)
  })
}
// function test() {
//   const res = a(5)
//   .then(() => {
//     console.log('Resolve!')
//   })
//   .catch(() => {
//     console.log('Reject!')
//   })
//   .finally(() => {
//     console.log('Done!')
//   })
// }
async function test() {
  try {
    await a(8)
    console.log('Resolve!')
  } catch(error) {
    console.log('Rejecet')
  } finally {
    console.log('Done!')
  }
}
test()