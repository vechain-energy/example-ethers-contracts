Example of using ethers v5 with Vechain Connex to directly interact with Contracts.

# Installation

Install parcel itself:

```shell
yarn add --dev parcel
```

Follow parcel tutorial to setup a react app:

* https://parceljs.org/recipes/react/

```shell
yarn add react react-dom @vechain/connex ethers @vechain/web3-providers-connex
yarn add --dev @types/react @types/react-dom
```


Config shortcuts in `package.json`:

```json
  "scripts": {
    "build": "parcel build src/index.html",
    "dev": "parcel serve src/index.html"
  }
```

# Scripts

* **`yarn dev`** for running a hot-reloading development version
* **`yarn build`** to build the static version in `./dist` 

# Run Locally

```shell
yarn install
yarn dev --open
```

- `src/VTHOSupply.jsx` contains the example snippet

# Links:

- [ethers@5](https://docs.ethers.org/v5/)
- [@vechain/web3-providers-connex](https://github.com/vechain/web3-providers-connex#readme)