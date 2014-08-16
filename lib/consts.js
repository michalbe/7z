'use strict';

var unhexlify = require('binascii').unhexlify;

var constants = {};
constants.READ_BLOCKSIZE = 16384;

constants.MAGIC_7Z = unhexlify('377abcaf271c');

constants.PROPERTY_END = unhexlify('00');
constants.PROPERTY_HEADER = unhexlify('01');
constants.PROPERTY_ARCHIVE_PROPERTIES = unhexlify('02');
constants.PROPERTY_ADDITIONAL_STREAMS_INFO = unhexlify('03');
constants.PROPERTY_MAIN_STREAMS_INFO = unhexlify('04');
constants.PROPERTY_FILES_INFO = unhexlify('05');
constants.PROPERTY_PACK_INFO = unhexlify('06');
constants.PROPERTY_UNPACK_INFO = unhexlify('07');
constants.PROPERTY_SUBSTREAMS_INFO = unhexlify('08');
constants.PROPERTY_SIZE = unhexlify('09');
constants.PROPERTY_CRC = unhexlify('0a');
constants.PROPERTY_FOLDER = unhexlify('0b');
constants.PROPERTY_CODERS_UNPACK_SIZE = unhexlify('0c');
constants.PROPERTY_NUM_UNPACK_STREAM = unhexlify('0d');
constants.PROPERTY_EMPTY_STREAM = unhexlify('0e');
constants.PROPERTY_EMPTY_FILE = unhexlify('0f');
constants.PROPERTY_ANTI = unhexlify('10');
constants.PROPERTY_NAME = unhexlify('11');
constants.PROPERTY_CREATION_TIME = unhexlify('12');
constants.PROPERTY_LAST_ACCESS_TIME = unhexlify('13');
constants.PROPERTY_LAST_WRITE_TIME = unhexlify('14');
constants.PROPERTY_ATTRIBUTES = unhexlify('15');
constants.PROPERTY_COMMENT = unhexlify('16');
constants.PROPERTY_ENCODED_HEADER = unhexlify('17');

constants.COMPRESSION_METHOD_COPY = unhexlify('00');
constants.COMPRESSION_METHOD_LZMA = unhexlify('03');
constants.COMPRESSION_METHOD_CRYPTO = unhexlify('06');
constants.COMPRESSION_METHOD_MISC = unhexlify('04');
constants.COMPRESSION_METHOD_MISC_ZIP = unhexlify('0401');
constants.COMPRESSION_METHOD_MISC_BZIP = unhexlify('0402');
constants.COMPRESSION_METHOD_7Z_AES256_SHA256 = unhexlify('06f10701');

module.exports = constants;
