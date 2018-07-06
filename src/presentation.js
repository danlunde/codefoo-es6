// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

import CodeSlide from 'spectacle-code-slide'
// import shiaLabeoufMagicGif from "./shiaLabeoufMagic.gif";
// import preloader from "spectacle/lib/utils/preloader";

// preloader({
//   shiaLabeoufMagicGif
// });

// Require code snippets
/* eslint import/no-webpack-loader-syntax: off */

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    secondary: 'Helvetica',
    primary: {
      name: 'Rubik',
      googleFont: true,
      styles: ['400', '700i'],
    },
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        contentWidth={1400}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide>
          <Heading>
            I <span role="img">❤️</span> ES6
          </Heading>
          <Text>or</Text>
          <Text>how I learned to tolerate writing JavaScript again</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide>
          <Heading>Arrow Functions</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/arrow-functions-1.example')}
          ranges={[
            { loc: [0, 0], title: '( ) => { }' },
            { loc: [0, 4] },
            { loc: [5, 7] },
            { loc: [8, 10] },
            { loc: [11, 13] },
            { loc: [14, 16] },
            { loc: [17, 20] },
          ]}
          notes={
            <div>
              <h4>
                Arrow functions are the shorthand form of anonymous functions that already exist
              </h4>
              <ul>
                <li>It's concise. Only requires the function arguments and function body</li>
                <li>Single line functions have an implicit return</li>
                <li>Functions with a single argument doesn't require parenthesis</li>
              </ul>
            </div>
          }
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/arrow-functions-2.example')}
          ranges={[
            { loc: [0, 0], title: 'Say no to this' },
            { loc: [0, 24] },
            { loc: [19, 20] },
            { loc: [3, 13] },
            { loc: [4, 8] },
            { loc: [8, 12] },
            { loc: [9, 10] },
            { loc: [25, 52] },
            { loc: [47, 48] },
            { loc: [28, 41] },
            { loc: [29, 40] },
            { loc: [30, 38] },
            { loc: [53, 73] },
            { loc: [56, 64] },
          ]}
          notes={
            <div>
              <h4>Arrow functions have implicit `this` binding</h4>
              <ul>
                <li>Never store `this` or bind again</li>
                <li>
                  The value of `this` within an arrow function is determined by where the arrow
                  function is defined and not by where it is used (a.k.a. lexical scoping)
                </li>
              </ul>
            </div>
          }
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/arrow-functions-3.example')}
          ranges={[
            { loc: [0, 0], title: '( ) => ( ) => ( ) => { }' },
            { loc: [0, 7] },
            { loc: [2, 6] },
            { loc: [8, 13] },
            { loc: [14, 19] },
          ]}
          notes={
            <div>
              <h4>Chain Arrows together</h4>
              <ul>
                <li>when returning a function, we can chain fat arrows together</li>
              </ul>
            </div>
          }
        />
        <Slide>
          <Heading>let &amp; const</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/let-and-const.example')}
          ranges={[
            { loc: [0, 0], title: 'let is the new var' },
            { loc: [0, 36] },
            { loc: [35, 36] },
            { loc: [3, 9] },
            { loc: [10, 15] },
            { loc: [16, 24] },
            { loc: [1, 2] },
            { loc: [25, 33] },
            { loc: [37, 55] },
            { loc: [39, 42] },
            { loc: [42, 45] },
            { loc: [46, 49] },
            { loc: [50, 53] },
          ]}
          notes={
            <div>
              <h4>let</h4>
              <ul>
                <li>
                  Variables declared via `let` are not available outside of the block in which they
                  are declared
                </li>
                <li>
                  Traditionally, one of the tricky parts of JavaScript has been the way that var
                  declarations work. In most C-based languages [such as C++, Java or C#], variables
                  are created at the spot where the declaration occurs. In JavaScript, however, this
                  is not the case. Variables declared using var are hoisted to the top of the
                  function (or global scope) regardless of where the actual declaration occurs.
                </li>
                <li>
                  `let` avoids this issue by being block-scoped; it only exists within the current
                  block
                </li>
              </ul>
              <h4>const</h4>
              <ul>
                <li>
                  `const` must be given a value when it is declared and variables declared via
                  `const` also cannot be updated
                </li>
                <li>
                  objects declared with `const` are not truly immutable. you can, however, use the
                  `Object.freeze` to achieve that
                </li>
                <li>
                  the only time you may need to still use `var` is for objects in the global scope
                  (i.e. namespaces or modules)
                </li>
              </ul>
            </div>
          }
        />
        <Slide>
          <Heading>Destructuring</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/destructuring.example')}
          ranges={[
            { loc: [0, 0], title: '{} and [], easy as 1, 2, 3' },
            { loc: [0, 5] },
            { loc: [6, 11] },
            { loc: [12, 18] },
            { loc: [19, 33] },
            {
              loc: [19, 33],
              note: 'you can not assign both parent and child properties at the same time',
            },
            { loc: [34, 41] },
            { loc: [42, 54] },
            { loc: [55, 65] },
            { loc: [66, 72] },
            { loc: [73, 79] },
            { loc: [80, 92] },
            { loc: [92, 98] },
            { loc: [99, 103] },
            { loc: [104, 108] },
            { loc: [109, 114] },
          ]}
          notes={
            <div>
              <h4>destructuring</h4>
              <ul>
                <li>If you wanted address and city as variables you'd need two statements</li>
                <li>
                  destructuring has a fail-soft approach where missing properties result in
                  `undefined`
                </li>
                <li>
                  however be cautious of destructuring a child whose parent property is also missing
                </li>
              </ul>
            </div>
          }
        />
        <Slide>
          <Heading>Parameters</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/parameters-1.example')}
          ranges={[
            { loc: [0, 0], title: 'lunch({sleepy = true})' },
            { loc: [0, 13] },
            { loc: [12, 13] },
            { loc: [2, 3] },
            { loc: [3, 5] },
            { loc: [14, 31] },
            { loc: [25, 30] },
            { loc: [15, 16] },
            { loc: [32, 39] },
            { loc: [40, 45] },
            { loc: [46, 57] },
            { loc: [62, 66] },
            { loc: [67, 73] },
            { loc: [74, 80] },
            { loc: [81, 86] },
            { loc: [87, 91] },
            { loc: [92, 96] },
            { loc: [97, 101] },
            { loc: [102, 105] },
            { loc: [106, 108] },
            { loc: [109, 111] },
            { loc: [112, 115] },
            { loc: [116, 119] },
            { loc: [120, 124] },
          ]}
          notes={
            <div>
              <h4>parameter handling</h4>
              <ul>
                <li>If you wanted address and city as variables you'd need two statements</li>
              </ul>
            </div>
          }
        />
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/parameters-2.example')}
          ranges={[
            { loc: [0, 0], title: 'howAreYou({i, need, ...rest})' },
            { loc: [0, 4] },
            { loc: [0, 10] },
            { loc: [11, 14] },
            { loc: [15, 22] },
            { loc: [24, 33] },
            { loc: [35, 41] },
            { loc: [42, 49] },
            { loc: [50, 56] },
            { loc: [57, 60] },
            { loc: [61, 65] },
          ]}
          notes={
            <div>
              <h4>parameter handling</h4>
              <ul>
                <li>
                  the spread operator allows us to separate an array into individual parameters,
                  taking the place of the `apply` function
                </li>
              </ul>
            </div>
          }
        />
        <Slide>
          <Heading>Object Literals</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/object-literals.example')}
          ranges={[
            { loc: [0, 0], title: "{literally, [can]: 'not'}" },
            { loc: [0, 12] },
            { loc: [13, 21] },
            { loc: [22, 30] },
            { loc: [31, 42] },
            { loc: [43, 53] },
            { loc: [54, 62] },
          ]}
          notes={
            <div>
              <h4>object literals</h4>
              <ul>
                <li>
                  since JSON has become the standard for data transport object literals make it
                  crazy easy to assemble an arbitrarily nested and dynamic set of data object while
                  still making it human-readable
                </li>
                <li>
                  property value shorthand lets us abbreviate the initialization of a property
                  within an object literal
                </li>
              </ul>
            </div>
          }
        />
        <Slide>
          <Heading>Template Literals</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/template-literals.example')}
          ranges={[
            { loc: [0, 0], title: '`i give this talk a ${rating}`' },
            { loc: [0, 4] },
            { loc: [5, 12] },
            { loc: [13, 32] },
            { loc: [33, 41] },
            { loc: [43, 52] },
            { loc: [52, 61] },
            { loc: [62, 65] },
            { loc: [66, 72] },
            { loc: [73, 78] },
          ]}
          notes={
            <div>
              <h4>template literals</h4>
              <ul>
                <li>
                  template literals are a brand new type of string literal, delimitied by backticks,
                  that support string interpolation and multi-line strings.
                </li>
                <li>
                  since it uses backticks, they can include single and double quotes without needing
                  to escapse them
                </li>
                <li>
                  tagged templates allow string processing of template literals by defining a
                  function
                </li>
              </ul>
            </div>
          }
        />
        <Slide>
          <Heading>Promises</Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/promises.example')}
          ranges={[
            { loc: [0, 0], title: '🤞' },
            { loc: [0, 6] },
            { loc: [7, 13] },
            { loc: [13, 17] },
            { loc: [17, 21] },
            { loc: [21, 25] },
            { loc: [26, 54] },
            { loc: [55, 66] },
            { loc: [41, 42] },
            { loc: [44, 53] },
            { loc: [67, 91] },
            { loc: [75, 84] },
            { loc: [75, 84], note: '🔥 callback hell 🔥' },
            { loc: [92, 113] },
            { loc: [95, 112] },
            { loc: [114, 115] },
            { loc: [115, 124] },
            { loc: [124, 127] },
            { loc: [127, 131] },
            { loc: [114, 115] },
          ]}
          notes={
            <div>
              <h4>promises</h4>
              <ul>
                <li>promises represent the eventual result of an asynchronous operation</li>
                <li>
                  rather than pass a callback in the call to an async function, the function returns
                  a promise
                </li>
                <li>
                  The callback pattern, while more convenient to use than event handlers, still had
                  several drawbacks. The first is apparent in the example. The callback function has
                  two ways of handling errors: if-else on the returned data and try-catch around any
                  operations within the function.
                </li>
                <li>
                  Secondly, callback functions proved to be untenable when developers had callbacks
                  within callback within callbacks. This affectionately became known as callback
                  hell. Let’s say for example after you retrieved /json/data.json you needed to make
                  another fetch request based on the returned data from the first request:
                </li>
              </ul>
            </div>
          }
        />
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    )
  }
}
