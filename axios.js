function fetchMovies(title) {
  // 대기(pending): 이행하거나 거부되지 않은 초기 상태.
  const OMDB_API_KEY = '7035c60c'
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`)
      // 이행(fulfilled): 연산이 성공적을 완료됨.
      resolve(res)
    } catch(error) {
      console.log(error.message)
      // 거부(rejected): 연산이 실패함.
      reject('error?!')
    }
  })
}
async function test() {
  try {
    const res = await fetchMovies('frozen')
    console.log(res)
  } catch(e) {
    console.log(e)
  }
}
test()