// when returning a function, we can chain fat arrows together

const matchKey = key => {
  return event => {
    const value = event.target.value
    if (key === value) return true
  }
}

const matchKey = key => event => {
  const value = event.target.value
  if (key === value) return true
}

// returns a function that matches the key
const matchFoo = matchKey('foo')(<input onChange={matchFoo} />)
