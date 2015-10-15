# node-repl-loader
Namespaced REPL for NodeJS using Webpack. Heavily inspired by Clojure and the writings of [James Long](http://jlongster.com/)

**THIS IS ALPHA, BE CAREFUL**

I'm also VERY interested in feedback / PRs, so send them my way or email me!

## TODOs
* Be able to detect when a module is an entry point, and only inject REPL code there (so we can support multiple entry points)
* Leverage the builtin REPL eval(), giving us autocomplete, etc.

## Usage

`npm install --save-dev node-repl-loader`

Just add this to your loaders list for JS files. Right now this only supports 1 entry point, so your webpack.config.js has to be in the form of:
```
  entry: "./foo.js",
```
and not
```
  entry: {
    foo: "./foo.js",
  }
```
