// promises represent the eventual result of an asynchronous operation
// rather than pass a callback in the call to an async function, the function returns a promise
// Creating a promise wrapper for setTimeout
function wait(delay = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay)
  })
}

// Using a promise
wait(3000)
  .then(() => {
    console.log('3 seconds have passed!')
    return wait(2000)
  })
  .then(() => {
    console.log('5 seconds have passed!')
    x++ // ReferenceError triggers `catch`
  })
  .catch(error => {
    // output: ReferenceError
    console.log(error)
  })
  .then(() => {
    // simulate `finally` clause
    console.log('clean up')
  })
