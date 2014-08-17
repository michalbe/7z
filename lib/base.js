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
  rpf(file, 0, 8, function(err, data) {
    var firstCharCode = data.toString().charCodeAt(0);
    var mask = 0x80;
    var bytes = [];
    for (var i=0; i<8; i++) {
      if (firstCharCode & mask === 0) {
        bytes.push(jspack.Unpack( i + 'B', data[i]));
        bytes.reverse();
        //var value = (bytes);// || reduce(lambda x, y: x << 8 | y, bytes)) or 0
      }
    }
    cb(err, firstCharCode);
  });
};


module.exports = base;
