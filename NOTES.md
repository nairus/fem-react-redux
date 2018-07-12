# Notes perso

For more details see => [bholf cource](https://btholt.github.io/complete-intro-to-react/)

## 1. Complete Intro To React V3

### 1.2 Yarn Dependency Manager

Installation de [`NVM`](https://github.com/coreybutler/nvm-windows) pour windows afin de basculer sur node6, sinon impossible de builder.

## 2. Tools

### 2.2 ESLint

J'ai dû installer en global toutes ces dépendances:

- eslint@3.19.0
- eslint-config-airbnb@15.0.1
- eslint-config-prettier@2.1.1
- eslint-config-react@1.1.7
- eslint-plugin-import@2.3.0
- eslint-plugin-jsx-a11y@5.0.3
- eslint-plugin-prettier@2.1.1
- eslint-plugin-react@7.0.1

### 2.4 Configuring webpack

On peut utiliser la config par défaut de webpack pour builder notre App.

Il suffit de préciser le fichier d'entrée et de sortie comme ci-dessous:

#### Linux

```bash
~$ ./node_modules/.bin/webpack js/ClientApp.jsx public/bundle.js
```

#### windows

```bash
c:\mooc-react>node_modules\.bin\webpack js\ClientApp.jsx public\bundle.js
```

### 2.6 Configuring webpack

En mode CLI si on lance uniquement `webpack`, il va chercher le fichier de config `webpack.config.json`.

### 5.2 Running jest

#### Linux

```bash
~$ NODE_ENV=test ./node_modules/.bin/jest
```

#### windows

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

### 7.2 Init Flow

1.  Init flow project with this command:

```bash
yarn flow -- init
```

2.  Add flow-typed

First add global package:

```bash
yarn global add flow-typed
```

Then install flow-typed open source in the projet:

```bash
flow-typed install
```

3.  Launch flow check:

```bash
yarn flow
```

Le fichier `express_v4.x.x.js` installé via la ligne de commande est différent que celui dans le dépôt de Brian et fait échouer le test avec `flow`.
Il faudrait creuser pourquoi !!??

7.3 Applying Flow

On VSCode windows, I have to install [`vscode-flow-ide`](https://marketplace.visualstudio.com/items?itemName=gcazaciuc.vscode-flow-ide) extension and flow globaly with this command:

```bash
npm i flow-bin -g
```

The extension can't resolve path in local dependencies.

See https://flow.org for more details

8.3 Finishing the Details Component

Pb with ESLINT and props type.
I have to disabled es-lint check with `/* eslint-disable */` annotation for not having `no-types-missing-file-annotation` error.
