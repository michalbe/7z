'use strict';

//consts
// var C = require('./consts');
// var utils = require('./utils');
var base = require('./base');

module.exports = function() {
  base.read64Bit('_TEMP.7z', function(err, data){
    console.log('ERROR: ', err);
    console.log('RESULT: ', data);
  });
};
