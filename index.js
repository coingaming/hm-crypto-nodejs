'use strict';

const { HmCrypto } = require('./lib');

module.exports = (digestType, privateKey, publicKey) => {
  return new HmCrypto(digestType, privateKey, publicKey);
}
