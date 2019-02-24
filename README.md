# L2 Api

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

# Intro
L2 Api is a module that helps you to intereact with your L2OFF and L2J (in the future) projects.

```js
const L2Api = require('l2-api');

const l2 = new L2Api('mssql_user', 'mssql_password', 'mssql_host');

const topPVP = await l2.getTopPVP(20);

```

As you can see, we can easily get the top 20 PVP of our project.


# Getting Started

## Installing L2Api

### Locally
```
$ npm install l2-api
```

### Configuring your credentials

The only thing you should do is requiring the module and initialize the L2Api with your credentials.

```js
const L2Api = require('l2-api');

const l2 = new L2Api('mssql_user', 'mssql_password', 'mssql_host');

```

Now you should be able to do:

```js
const topPVP = await l2.getTopPVP(20);
```


[downloads-image]: https://img.shields.io/npm/dt/l2-api.svg

[npm-url]: https://www.npmjs.com/package/l2-api
[npm-image]: http://img.shields.io/npm/v/l2-api.svg
