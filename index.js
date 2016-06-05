
module.exports = function(sails) {
    
    var config = require('./lib/config.js');
    var exec = require('./lib/exec.js');
    
    return {
        config: config,
        exec: exec,
    };
};