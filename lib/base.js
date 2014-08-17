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

base.read64Bit = function(file, cb) {
  rpf(file, 0, 1, function(err, data) {
    var firstCharCode = data.toString().charCodeAt(0);
    var mask = 0x80;
    var bates = [];
    for (var i=0; i<8; i++) {
      if (b & mask === 0) {
        //bytes.push(jspack.Unpack( i + 'B', ))
      }
    }
    cb(err, firstCharCode);
  });
};


module.exports = base;
