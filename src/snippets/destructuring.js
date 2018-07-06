// destructuring makes it easier to work with objects and arrays

// object pattern matching
let { lName, fName } = { fName: 'John', age: 15, lName: 'Doe' }

// output: Doe, John
console.log(lName + ', ' + fName)

// array pattern matching
let [first, second, third] = [8, 4, 100, -5, 20]

// output: 100, 4, 8
console.log(third, second, first)

// if we wanted to use different variable names
const user = { fName: 'John', age: 15, lName: 'Doe' }
const { lName: lastName, fName: firstName } = user

// output: Doe, John
console.log(lastName + ', ' + firstName)

// we can destructure into deeply nested objects
const user = {
  fName: 'John',
  age: 15,
  lName: 'Doe',
  addr: {
    street: '123 Main Street',
    city: 'Pleasantville',
    state: 'CA',
  },
}

const {
  addr: { city },
} = user

// Caveat, you can not assign both parent and child properties at the same time.
// If you wanted address and city as variables you'd need two statements

// destructuring has a fail-soft approach where missing properties result in `undefined`
// however be cautious of destructuring a child whose parent property is also missing

let options = {}
let {
  delay, // delay is undefined
  title,
  info: { name }, // trying to assign to name produces an error
} = options

// you can also use computed values in object destructuring
const thingsToDo = {
  movies: { title: 'Movies', likeability: 'Great' },
  games: { title: 'Games', likeability: 'The Best' },
  books: { title: 'Books', likeability: 'Wonderful' },
  chores: { title: 'Chores', likeability: 'Absolute Worst' },
}

const activity = 'games'
const {
  [activity]: { title, likeability },
} = thingsToDo

// you don't have to destructure when declaring a variable, but you must wrap the whole expression in parenthesis

let a,
  b = {}

  // some code
;({ a, b: b.count } = { a: 1, b: 2 })

// output: 1, {count: 2}
console.log(a, b)

// nested destructing works for arrays too
let myArray = [1, ['hello'], true]
let [number, [hello], booleanValue] = myArray

// output: 1, 'hello', true
console.log(number, hello, booleanValue)

// and you can skip any unneeded values
let sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
let [first, , third, fourth, , , seventh] = sequence

// output: 0, 1, 2, 8
console.log(first, third, fourth, seventh)

// and we can mix object & array destructuring, which we would typically use in parsing a JSON object
let json = {
    shapes: ['circle', 'square', 'triangle'],
    colors: 5,
    fill: true,
    author: {
      firstName: 'Ben',
      lastName: 'Ilegbodu',
      city: 'Pittsburg',
    },
  },
  {
    fill,
    author: { lastName, firstName, city },
    shapes: [, secondShape],
    colors: numColors,
  } = json

// output: true, square, 5
console.log(fill, secondShape, numColors)
// output: Ilegbodu, Ben, Pittsburg
console.log(lastName, firstName, city)

// we can use it to swap values
let a = 1
let b = 2
;[b, a] = [a, b]

// we can use it to destructure return values
let [, areaCode, exchange, lineNumber] = /^(\d\d\d)-(\d\d\d)-(\d\d\d\d)$/.exec('650-555-1234')

// output: 650, 555, 1234
console.log(areaCode, exchange, lineNumber)
