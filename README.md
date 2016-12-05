# Weather-Today
The most easy to use weather extension and displays the current weather based on your location.

### Getting started

The following npm packages will need to be installed globally:

1. typescript
2. typings
3. webpack
4. phantomjs

Global modules can be installed as follows:

```
> npm install -g typescript typings webpack phantomjs
```

For the typings installation please ensure that you install version 1.0.* or above as there were breaking changes in the 1.0.0 release.

## There are two methods for getting started with this repo.

#### Using Git

```
> git clone https://github.com/wastefactory/Weather-Today.git
```

or by just downloading the zip file.

### Local npm installation

```
> cd Weather-Today
> npm install
```

This will install the local dependencies.
After this has finished you will need to bind the local installation of ts-loader to the global install of typescript:

```
> npm link typescript
```

If you do not link these two packages there may be resolutions errors so please ensure that you do this.

### Typings installation
Typings manages the TypeScript definitions for the included project dependencies e.g. AngularJS and it's core modules.

To install the type definition files run the command:

```
> typings install
```

### Dev Environment 
1. `/src` directory : will be the development source.
2. `/dist` directory : will be the extension package.

```
> npm run build
```

Running `npm run build` will transpile and build all the source files into bundle.js and vendor.bundle.js and will be available in `/dist/app` directory.

### Production Build
To pack the project for production, you need to run:

```
> npm run build:prod
```

### Running the test

```
> npm test
```
