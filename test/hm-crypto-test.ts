import { expect } from 'chai';
import { readFileSync } from 'fs';
import * as path from 'path';
import { HmCrypto } from '../src';

let readPem = (filename) => {
  return readFileSync(path.resolve(__dirname, '../priv/' + filename)).toString('ascii');
}

let publicKey = readPem('demo_pub.pem');
let privateKey = readPem('demo_priv.pem');

let hmCrypto = new HmCrypto('RSA-SHA256', privateKey, publicKey);

describe('hmCrypto', () => {
  context('with default keypair and digestType', () => {
    it('sign and verify message', () => {
      let signature = hmCrypto.sign('message');

      expect(hmCrypto.isValid('message', signature)).to.eq(true);
      expect(hmCrypto.isValid('message2', signature)).to.eq(false);
    });
  });

  context('with custom keypair and digestType', () => {
    it('sign and verify message', () => {
      let customDigestType = 'RSA-MD5';
      let customPublicKey = readPem('custom_pub.pem');
      let customPrivateKey = readPem('custom_priv.pem');

      let signature = hmCrypto.sign('message', customDigestType, customPrivateKey);

      expect(hmCrypto.isValid('message', signature, customDigestType, customPublicKey)).to.eq(true);
      expect(hmCrypto.isValid('message2', signature, customDigestType, customPublicKey)).to.eq(false);
    });
  });
})
