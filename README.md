# node-repl-loader
Namespaced REPL for NodeJS using Webpack. Heavily inspired by Clojure and the writings of [James Long](http://jlongster.com/)

**THIS IS ALPHA, BE CAREFUL**

I'm also VERY interested in feedback / PRs, so send them my way or email me!

## TODOs
* Be able to detect when a module is an entry point, and only inject REPL code there (so we can support multiple entry points)
* Support different REPL in/out streams (right now we only support stdin/stdout)
* Leverage the builtin REPL eval(), giving us autocomplete, etc.

## How it works
**Check out [this example repo](https://github.com/chrishowes/node-repl-loader-example) to see a trivial example. **

Appends an `__eval()` to each modules' exports. Then it starts a custom REPL in the entry point. Use `ns variableName` to switch to that variables' context. Any commands you run afterwards will be eval'd in the context of `variableName`. Type `ns` to return back to the base context.



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

This will start a REPL for your NodeJS app. To switch to a different variable namespace, type `ns variableName`.
