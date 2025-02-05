/**
 * [(lv.1)[1]Promise-객체-만들기.js]
 *
 * 함수 returnHello는 "Hello"를 resolve하는 Promise를 반환합니다.
 *
 * @returns {Promise<string>}
 */
function returnHello() {
  let newArr = new Promise((resolve) => {
    resolve("Hello")
  })
  return newArr;
}

// export를 수정하지 마세요.
export { returnHello };
