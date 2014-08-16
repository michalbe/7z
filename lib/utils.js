'use strict';

var toTimestamp = function(filetime) {
  return (filetime / 10000000) - 11644473600;
}

module.exports = {
  toTimestamp: toTimestamp
}
