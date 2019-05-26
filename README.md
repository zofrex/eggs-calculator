This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). If you are not familiar with React projects, those docs are a good starting point.

# About

[This is a calculator](https://eggs.zofrex.com/) to help people with the game Egg, Inc. If you haven't played that game, nothing here will make sense to you.

# Setting up project

Requirements:

* node.js and npm

Install dependencies:

```
npm install
```

## Running project

```npm start```

## Running Tests

### Unit tests:

```npm run test```

This will initially run the tests, but will then stay open and will automatically re-run tests that you change, and tests for areas of code that you change. You can force it to re-run all tests by pressing "a".

### End-to-end tests:

```$(npm bin)/cypress run```

This will run the tests just once. You can keep the test runner open instead with:

```$(npm bin)/cypress open```

And use the GUI to run the tests. This is useful for debugging tests that are failing.

[The Cypress.io documentation](https://docs.cypress.io/guides/core-concepts/test-runner.html) on the test runner is useful.

# Developing

## Tests

Everything should be tested, preferably with tests written first.

For user-facing functionality, end-to-end BDD-style tests are written using [Cypress](https://docs.cypress.io/) and live in the `cypress` directory.

All of the maths handling functions are unit tested with Jest, as per the default `create-react-app` setup. Refer to those docs for more information. These tests live alongside the code in the `src` directory.

In principle there is a third testing strategy available using Enzyme to test React components in isolation. The boundary between these tests and the BDD tests is not firmly set yet.

## Architecture

Most choices made in this app were either made by `create-react-app` or by accident. Refer to documentation for `create-react-app` for more on the former, any of the latter are up for debate.

The code and the unit tests live in `src`, the BDD tests live in `cypress`.

Everything handling maths and number crunching should be pure JavaScript with no React, and should be fully unit tested with all edge-cases covered.

## Contributing

Please file issues if you find bugs. For feature requests, please discuss on Discord rather than filing issues.

Pull requests welcome for little fixes or improvements, but for larger contributions please discuss first to avoid any disappointment.

All pull requests are tested on [Travis-CI](https://travis-ci.com/), and merged by [Bors](https://bors.tech/) to ensure the master branch is always green. [The "Not Rocket Science" blogpost by Graydon](https://graydon2.dreamwidth.org/1597.html) explains why this is helpful, if you are interested.

Master is deployed to production automatically by [Netlify](https://www.netlify.com/).