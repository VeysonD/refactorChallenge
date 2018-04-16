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
