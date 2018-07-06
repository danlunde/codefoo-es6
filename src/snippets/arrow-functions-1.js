// Arrow functions are the shorthand form of anonymous functions that already exist
// It's concise. Only requires the function arguments and fucntion body
// Single line functions have an implicit return
// Functions with a single argument doesn't require parenthesis
const squares = [1, 2, 3].map(x => x * x)

const squares = [1, 2, 3].map(function(x) {
  return x * x
})

// two or more arguments
var sum = [9, 8, 7].reduce((memo, value) => memo + value, 0)

// no arguments
var getRandom = () =>
  Math.random() *
  (100)[
    // when returning objects with implicit return, wrap with parenthesis
    (4, 5, 1)
  ]
    .map(x => ({ foo: x }))

    [
      // This is wrong!
      (4, 5, 1)
    ].map(x => {
      foo: x
    })
