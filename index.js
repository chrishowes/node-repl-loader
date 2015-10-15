var REPL_JS = '\n\
if (module.id === 0) { \n\
  var repl = require("repl"); \n\
  repl.start({ \n\
    prompt: "> ", \n\
    input: process.stdin, \n\
    output: process.stdout, \n\
    eval: function(cmd, context, filename, callback) { \n\
      if (cmd.startsWith("ns")) { \n\
        var namespace = (cmd.split(" ")[1] || "").trim(); \n\
        if (namespace) { \n\
          this.__nsModules = (this.__nsModules || []).concat( namespace.split(".") ); \n\
          return callback(null, "Switched namespace to " + this.__nsModules.join(".")); \n\
        } else {  \n\
          this.__nsModules = null; \n\
          return callback(null, "Switched to default namespace"); \n\
        } \n\
      } else { \n\
        if (this.__nsModules) { \n\
          var nsEvalCmd = this.__nsModules.join(".") + ".__eval(\'" + cmd.replace("\'", \'"\').trim() + "\')"; \n\
          return callback(null, eval(nsEvalCmd)); \n\
        } else { \n\
          return callback(null, eval(cmd)); \n\
        } \n\
      } \n\
    } \n\
  }); \n\
} else { \n\
  module.exports.__eval = function(c) { \n\
    return eval(c); \n\
  } \n\
}';

module.exports = function(source) {
  console.log(source + "\n\n" + REPL_JS);
  this.callback(null, source + "\n\n" + REPL_JS);
};

