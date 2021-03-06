# Notes perso

For more details see => [btholt course](https://btholt.github.io/complete-intro-to-react/)

## 1. Complete Intro To React V3

### 1.2 Yarn Dependency Manager

Install of [`NVM`](https://github.com/coreybutler/nvm-windows) for windows to switch on node6, otherwise it can't build.

## 2. Tools

### 2.2 ESLint

I had to install all these dependencies globally:

- eslint@3.19.0
- eslint-config-airbnb@15.0.1
- eslint-config-prettier@2.1.1
- eslint-config-react@1.1.7
- eslint-plugin-import@2.3.0
- eslint-plugin-jsx-a11y@5.0.3
- eslint-plugin-prettier@2.1.1
- eslint-plugin-react@7.0.1

### 2.4 Configuring webpack

The default webpack config can be used by default to build our App.  
We just need to add the entry and output files like below:

#### Linux

```bash
~$ ./node_modules/.bin/webpack js/ClientApp.jsx public/bundle.js
```

#### windows

```bash
c:\mooc-react>node_modules\.bin\webpack js\ClientApp.jsx public\bundle.js
```

### 2.6 Configuring webpack

In CLI mode, if we launch only `webpack`, it seek the config file `webpack.config.json`.

## 5. Testing React

### 5.2 Running jest

#### On Linux

```bash
~$ NODE_ENV=test ./node_modules/.bin/jest
```

#### On Windows

```bash
c:\mooc-react>node_modules\.bin\jest
```

### 5.3 Shallow Testing with Enzyme

If we want to go deeper, we can use two others component from `enzyme` slower than `shallow`:

```js
import { shallow, render, static } from 'enzyme';
```

- `render`: emulate a dom with like jsdom
- `static`: bring in cherrio for like dom exploring.

Stick to `shallow` if possible.

### 5.7 Test coverage with Istanbul

We can run code coverage with `jest` and `Istanbul` library:

```bash
yarn test -- --coverage
```

## 7. Flow

### 7.2 Init Flow

1. Init flow project with this command:

   ```bash
   yarn flow -- init
   ```

1. Add flow-typed

   First add global package:

   ```bash
   yarn global add flow-typed
   ```

   Then install flow-typed open source in the projet:

   ```bash
   flow-typed install
   ```

1. Launch flow check:

   ```bash
   yarn flow
   ```

The installed file `express_v4.x.x.js` in CLI mode is different from the Brian repository and it fails the `flow` process.  
I need to go deeper to understand why !! ??

### 7.3 Applying Flow

On VSCode windows, I have to install [`vscode-flow-ide`](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide) extension and flow globaly with this command:

```bash
npm i flow-bin -g
```

The extension can't resolve path in local dependencies.

See [https://flow.org](https://flow.org) for more details

## 8. Data In React

### 8.3 Finishing the Details Component

Pb with ESLINT and props type.  
I have to disabled es-lint check with `/* eslint-disable */` annotation for not having `no-types-missing-file-annotation` error.

### 8.7 React Lifecycle Methods

1. The `componentWillMount` method can be used for server side rendering.
1. The `componentDidMount` method can be used after the DOM is fully loaded. The `window` component is available on this step.
1. The `componentWillReceiveProps` method get brand new props from a parent.
1. The `shouldComponentUpdate` method can be used if there is performance issue.
1. The `componentWillUnmount` method is invoked when the component leave the DOM and to clean up stuffs.

### 8.12 React Performance Tools

Some useful methods:

- [`Perf.printWasted()`](https://reactjs.org/docs/perf.html#printwasted): print an array of wasted times
- [`Perf.printInclusive()`](https://reactjs.org/docs/perf.html#printinclusive): Prints the overall time taken
- [`Perf.printExclusive()`](https://reactjs.org/docs/perf.html#printexclusive): don’t include the times taken to mount the components

For more details see the [docs](https://reactjs.org/docs/perf.html).
Note the addons is not supported in React 16.

## 9. Redux

### 9.10 Q&A Recap

There is an alternative to Redux. See [MobX](https://github.com/mobxjs/mobx).

### 9.13 Redux DevTools

The method in Brian lesson is not working today.  
For the record he wrote that code:

```js
// store.js
import { createStore, compose } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  compose(typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension(): f => f)
);

export default store;
```

See [online docs](https://github.com/zalmoxisus/redux-devtools-extension#usage) for more details.

## 12 Universal Rendering

### 12.4 Running the Node Server

First I have to build the App to make it work:

```bash
yarn build
```

Then for running the node node server there is a difference between `Linux` and `Windows`.

- Linux mode:

```bash
~/mooc/fem$ NODE_ENV=server node server.js
```

- Windows mode:

```bash
C:\mooc\fem> set NODE_ENV=server
C:\mooc\fem> node server.js
```

I don't know why it does not work in one line command (see [here](https://ss64.com/nt/syntax-redirection.html)).  
The `NODE_ENV` variable is not set.  
I had to write a `.cmd` file to launch the server with yarn.