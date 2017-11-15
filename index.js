'use strict';

const HmCrypto = require('./lib').HmCrypto;

module.exports = (digestType, privateKey, publicKey) => {
  return new HmCrypto(digestType, privateKey, publicKey);
}
