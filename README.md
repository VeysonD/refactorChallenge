
# Front End Refactoring Challenge

## Table of Contents

1. [Intro](#intro)
1. [Refactor](#refactor)
1. [Thoughts](#thoughts)

## Intro

So we have a pretty cool idea for a new app.  It can keep track of things that you need to do.
We're going to call it a "to-do" app.  It's pretty ground breaking stuff.

The app works fine and does what we want it to do. Sure the styling is off, but
you should not worry about that for now.  We are just concerned about the JavaScript and React code.

One of the previous developers from forever ago said that he knew how to code a
React app like a pro.  But looking over what he coded, we aren't so sure
he did things correctly.  Can you take a look over the codebase and refactor
it to how you think a React app should be?

You can do whatever you think is best:
install libraries, add/remove/reorganize files, etc.
Just use your best judgment to help us in making the code better and easier to maintain.

Notes:
- Clone this repo.  `npm install`, then `npm start` to get your development environment running.

- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

- You call the shots on what you think is best on how to improve this project.  But **do not add or remove any features**.

- Again, **don't worry about styling or CSS**. Just focus on JavaScript and React.

- Feel free to add notes your cloned repo to explain your thought process.

## Refactor

- First JQuery was removed from the whole application to trim down the size and increase the speed as the app did not need it

- Every component was moved into its own file to establish modularity

- All styles were moved into a styles folder

- Added ESLint with Airbnb rules to help clean up and unify the application's syntax and coding style

- Moved setInterval function to not be saved in state and to be cleared with clearInterval on the Timer component's componentWillUnmount lifecycle

- Added PropTypes for prop validation and type checking for components that receive props. [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

- Converted class components that did not manipulate state into functional components

- Generated unique keys for mapping that did not rely on the index. [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

## Thoughts

- Debated whether to merge the TodoHeader component into the App component as it was only one line.  I decided against it as the TodoHeader component may very well grow into its own robust stateful class component someday

- Folder restructuring was kept relatively simple as the size of the project is simple.  This structure would change should the application grow in size

- Decided against tests as the project is quite small and relatively easy to debug

- Decided with PropTypes over TypeScript as again, the project is quite small and relatively easy to debug.

- If I were to approach a project like this again, I would first encourage the engineer who wrote this to install a linter in their IDE and/or project as many of the problems could have easily been avoided.
