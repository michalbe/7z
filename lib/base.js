'use strict';

var base = {};
var rpf = require('read-part-file');
var jspack = require('jspack').jspack;
var bigint = require('bigintjs');

base.readReal64Bit = function(file, cb) {
  rpf(file, 0, 8, function(err, data) {
    var unpackedData = jspack.Unpack('<LL', data);
    cb(err,
      [
        bigint(
          (unpackedData[1] * Math.pow(2,32)).toString()
        ).or(
          unpackedData[0].toString()
        ).toString(),
        data.toString()
      ]
    );
  });
};


module.exports = base;
