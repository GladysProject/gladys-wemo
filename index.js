

module.exports = function(sails) {
    
    var loader = require('sails-util-mvcsloader')(sails);
    
    loader.configure({
        policies: __dirname + '/api/policies',// Path to the policies to load
        config: __dirname + '/config' // Path to the config to load
    });
    
    var search = require('./lib/search.js');
    var exec = require('./lib/exec.js');
    
    return {
        search: search,
        exec: exec,
        initialize: function(next){
            loader.injectControllers( __dirname + '/api/controllers', function(err){
                next(err);
            });
        }
    };
};