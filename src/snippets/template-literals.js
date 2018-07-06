// template literals are a brand new type of string literal, delimitied by backticks,
// that support string interpolation and multi-line strings.
// since it uses backticks, they can include single and double quotes without needing to escapse them
let firstName = 'Ben',
  lastName = `Ilegbodu`

// Basic template literal is surrounding by
// backticks so single/double quotes do need
// to be escaped
// output: He said, "It's your fault!"
console.log(`He said, "It's your fault!"`)

// Template literals support interpolation.
// The values within `firstName` and `lastName`
// are substituted into where the tokens are
// output: Name: Ilegbodu, Ben
console.log(`Name: ${lastName}, ${firstName}`)

// Template literals support multi-line strings
// output: This is
// 		multi-line text, so that
//		newline characters are
//
//
//		not needed. All whitespace
//			is respected, including tabs.
//
//
console.log(`This is
	multi-line text, so that
	newline characters are


	not needed. All whitespace
		is respected, including tabs.

`)

// ${} interpolation also allows expression interpolation
let timeOfDay = new Date().getHours(),
  mealCost = 7.99,
  tax = 0.09

// any sort of expression can go inside the
// substitution token
// output: Morning/Evening meal: $8.71
console.log(`${timeOfDay < 12 ? 'Morning' : 'Evening'} meal: $${(mealCost * (1 + tax)).toFixed(2)}`)

// -
// you can event use interpolation expressions which return template literals nested inside a template literal
let eventCardInfo = {
    title: 'Nodevember 2015',
    url: 'http://nodevember.org/',
    tagline: 'Two days of Node and JavaScript',
    tags: ['JavaScript', 'Node'],
  },
  { title, url, tagline, tags } = eventCardInfo,
  html = `<section>
				<h3><a href="${url}">${title}</a></h3>
				<p>${tagline}</p>
				<ul>
					${tags.map(tag => `<li>${tag}</li>`).join('\n')}
				</ul>
			</section>`

// -
// tagged templates allow string processing of template literals by defining a function
let firstName = 'Daniel',
  lastName = `Lunde`

// instead of using the default interpolation
// that ES6 offers, we're reimplementing it using
// `interpolate` function
// output: Name: Ilegbodu, Ben
console.log(interpolate`Name: ${lastName}, ${firstName}`)

function interpolate(literals, ...substitutions) {
  // literals = ['Name: ', ', ', '']
  // substitutions = ['Lunde', 'Daniel']
  // substitutions.length == literals.length - 1
  // implementation here
}

// often see that with css preprocessing in javascript and jsx
