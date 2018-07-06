// parameter handling

// es6 allows us to define default values for parameters, making them optional

function getData(data, useCache = true) {
  if (useCache) {
    console.log('using cache for', data)
  } else {
    console.log('not using cache', data)
  }
}

// `useCache` is missing and is `undefined`.
// therefore `useCache `defaults to `true`
getData({ q: 'churches+in+Pittsburg' })

// -
// object destructuring gives us the same benefits of named arguments
const ajax = (url, { method, delay, callback }) => {
  console.log(url, method, delay)
  setTimeout(() => callback('DONE!'), delay)
}

// the second parameter to the function
// is an object whose properties are
// destructured to individual variables
// simulating named parameters
ajax('http://api.eventbrite.com/get', {
  delay: 2000,
  method: 'POST',
  callback: function(message) {
    console.log(message)
  },
})

// if we want to make the entire second argument optional, use a default param
const ajax = (url, { method, delay, callback } = {}) => {
  // default {} is used to allow
  // object to be unspecified w/o
  // causing an error
  // rest of the function
}

// and if we wanted those inner options to have default values...
const ajax = (url, { method = 'GET', delay = 1000, callback } = {}) => {
  // default values w/in destructure pattern
  // rest of the function
}

// -
// since JS will not throw an error if you leave a required parameter unspecificed, here's a quick technique to enforce a parameter
/**
 * Gets called if a parameter is missing and the expression
 * specifying the default value is evaluated.
 */
function throwIfMissing() {
  throw new Error('Missing parameter')
}
function func(requiredParam = throwIfMissing()) {
  // some implementation
}

// -
// parameter values can also be functions and expressions
function getWidth() {
  console.log('getWidth called')
  return 7
}
function drawRect(width = getWidth(), height = width * 2, options = { color: 'red' }) {
  console.log(width, height, options)
}

// `getWidth` is called to retrieve default
// value for `width` since it was unspecified.
// output:
//   getWidth called
//   7, 14, {color:'red'}
drawRect()

// `getWidth` is not called because `width` is
// specified. `height` is still defaulted to
// 2x `width`.
// output:
//    17, 34, {color:'red'}
drawRect(17)

// `height` is no longer defaulted to 2x `width`
// but options are still defaulted.
// ouput:
//    4, 11, {color:'red'}
drawRect(4, 11)

// nothing is defaulted
// output:
//    7,5, 11, {color:'blue'}
drawRect(7.5, 11, { color: 'blue' })

// -
// only when the calling arguments is undefined, will the default value be used
function drawCube(x, y = 7, z) {
  console.log('cube', x, y, z)
}

// `y` is defaulted, but `x` & `z` are not
// so they are `undefined`.
// output: cube, undefined, y, undefined
drawCube()

// `y` is still defaulted, but `z` isn't.
// output: cube, 2.5, 7, undefined
drawCube(2.5)

// output: cube, 9, 15, undefined
drawCube(9, 15)

// output: cube, 4, 1.7, 18
drawCube(4, 1.7, 18)

// `y` is once again defaulted
// output: cube, 11, 7, 8.8
drawCube(11, undefined, 8.8)

// `null` does not trigger `y` to default
// output: cube, 14, null, 72
drawCube(14, null, 72)

// -
// which also includes arrow functions
// 2nd parameter is `undefined`, triggers
// default of 100.
// output: 2, 200, 10
console.log([1, undefined, 5].map((x = 100) => x * 2))

// -
// rest parameters replaces the need for the special `arguments` variable
function join(separator, ...values) {
  return values.join(separator)
}

// all of the parameters after the first
// are gathered together into `values`
// which is a true `Array`
// output: "one//two//three"
console.log(join('//', 'one', 'two', 'three'))

// this is super handy when you want to pull off a subset of properties but pass the remaining values on
const getComments = ({ url, ...options }) => fetch(url, options)

// or in a React component
const PageLayout = ({ title, ...values }) => (
  <>
    <Title>{title}</Title>
    <Page {...{ values }} />
  </>
)

// -
// the spread operator allows us to separate an array into individual parameters, taking the place of the `apply` function
function volume(width, length, height) {
  return width * length * height
}

// the array values are separated into
// separate parameters
// output: 80 (2 * 8 * 5)
console.log(volume(...[2, 8, 5]))

// -
// you can also use it in destructuring
let list = [9, 8, 7, 6, 5],
  [first, second, ...rest] = list

// output: [7, 6, 5], 8, 9
console
  .log(rest, second, first)

  [
    // -
    // use it to replace .concat for creating new arrays with mutating the existing ones
    // ES5
    (11, 10)
  ].concat(list)

// ES6
;[11, 10, ...list]

// [11, 10, 9, 8, 7, 6, 5]
