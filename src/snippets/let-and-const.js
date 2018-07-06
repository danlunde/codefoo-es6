//let is the new var

//Variables declared via `let` are not available outside of the block in which they are declared
//Variables declared via `const` also cannot be updated

function simpleExample(value) {
  const constValue = value

  if (value) {
    var varValue = value
    let letValue = value

    console.log('inside block', varValue, letValue)
  }

  console.log('outside block')

  // varValue is available even though it was defined
  // in if-block because it was "hoisted" to function scope
  console.log(varValue)

  try {
    // letValue is a ReferenceError because it
    // was defined w/in if-block
    console.log(letValue)
  } catch (e) {
    // e is a ReferenceError
    console.log('letValue not accessible', e)
  }

  try {
    // SyntaxError to try and update a variable
    // declared via const
    constValue += 1
  } catch (e) {
    // e is a SyntaxError
    console.log('constValue can not be changed', e)
  }
}

simpleExample(2)

//Traditionally, one of the tricky parts of JavaScript has been the way that var declarations work. In most C-based languages [such as C++, Java or C#], variables are created at the spot where the declaration occurs. In JavaScript, however, this is not the case. Variables declared using var are hoisted to the top of the function (or global scope) regardless of where the actual declaration occurs.
//`let` avoids this issue by being block-scoped; it only exists within the current block

// use `let` inside of for loops

function simpleLoopExample() {
  for (var i = 0; i < 5; i++) {
    console.log('i=', i)
  }
  for (let j = 0; j < 5; j++) {
    console.log('j=', j)
  }

  // i is accessible outside of the for loop
  // and has the value 5
  console.log('after i=', i)

  // j is not accessible outside of the for loop
  // and is a ReferenceError
  console.log('after j=', j)
}
simpleLoopExample()

// `const` must be given a value when it is declared.  use it when you want your values to be immutable
// objects declared with `const` are not truly immutable.  you can, however, use the `Object.freeze` to achieve that
// the only time you may need to still use `var` is for objects in the global scope (i.e. namespaces or modules)
