// since JSON has become the standard for data transport
// object literals make it crazy easy to assemble an arbitrarily nested and dynamic set of data object while still making it human-readable

// property value shorthand lets us abbreviate the initialization of a property within an object literal
// provided that the property key matches an existing variable name
// you will use this all the time
function getCar(make, model, value) {
  return {
    // with property value shorthand
    // syntax, you can omit the property
    // value if key matches variable
    // name
    make,
    model,
    value,
  }
}

function getCar(make, model, value) {
  return {
    make: make,
    model: model,
    value: value,
  }
}

// computed property keys
function getCar(make, model, value) {
  return {
    // computed values now work with
    // object literals
    ['make' + make]: true,
  }
}

function getCar(make, model, value) {
  var car = {}

  // in ES3/ES5 the only way to use a
  // computed property key was in a
  // separate assignment statement
  car['make' + make] = true

  return car
}

// method definition shorthad
function getCar(make, model, value) {
  return {
    // Method definition shorthand syntax
    // omits `function` keyword & colon
    depreciate() {
      this.value -= 2500
    },
  }
}

function getCar(make, model, value) {
  return {
    depreciate: function() {
      this.value -= 2500
    },
  }
}
