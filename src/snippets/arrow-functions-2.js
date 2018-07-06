// Never store `this` or bind again
// Arrow functions have implicit `this` binding
// The value of `this` within an arrow function is determined by where the arrow function is defined and not by where it is used (a.k.a. lexical scoping)

var car = {
  speed: 0,
  accelerate: function() {
    // store a reference to `this` in a variable that will be
    // be available for use within the anonymous function
    // callback
    var self = this
    this.accelerator = setInterval(function() {
      self.speed++
      console.log(self.speed)
    }, 100)
  },
  cruise: function() {
    clearInterval(this.accelerator)
    console.log('cruising at ' + this.speed + ' mph')
  },
}

car.accelerate()

setTimeout(function() {
  car.cruise()
}, 5000)

var car = {
  speed: 0,
  accelerate: function() {
    this.accelerator = setInterval(
      // bind returns a new "cloned" function
      // such that _this_ within the function
      // matches _this_ outside of it by passing it
      // as the argument.
      function() {
        this.speed++
        console.log(this.speed)
      }.bind(this),
      100
    )
  },
  cruise: function() {
    clearInterval(this.accelerator)
    console.log('cruising at ' + this.speed + ' mph')
  },
}

car.accelerate()

setTimeout(function() {
  car.cruise()
}, 5000)

var car = {
  speed: 0,
  accelerate: function() {
    this.accelerator = setInterval(() => {
      // _this_ is the same as it is outside
      // of the arrow function!
      this.speed++
      console.log(this.speed)
    }, 100)
  },
  cruise: function() {
    clearInterval(this.accelerator)
    console.log('cruising at ' + this.speed + ' mph')
  },
}

car.accelerate()

setTimeout(() => car.cruise(), 5000)
