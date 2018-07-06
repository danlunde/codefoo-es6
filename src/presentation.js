// Import React
import React from 'react'

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Notes, Quote, Slide, Text, Code } from 'spectacle'

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
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} contentWidth={1400}>
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
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require('./snippets/arrow-functions-1.example')}
          ranges={
            [
              { loc: [0, 0], title: '( ) => { }' },
              { loc: [0, 4] },
              { loc: [5, 7] },
              { loc: [8, 10] },
              { loc: [11, 13] },
              { loc: [14, 16] },
              { loc: [17, 20] },
            ]
            // ...
          }
          notes={
            <div>
              <h4>Arrow functions are the shorthand form of anonymous functions that already exist</h4>
              <ul>
                <li>It's concise. Only requires the function arguments and function body</li>
                <li>Single line functions have an implicit return</li>
                <li>Functions with a single argument doesn't require parenthesis</li>
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
