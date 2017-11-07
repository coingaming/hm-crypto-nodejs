import { createSign, createVerify } from 'crypto';

export class HmCrypto {
  defaultDigestType: string;
  defaultPrivateKey: string;
  defaultPublicKey: string;

  constructor(digestType: string, privateKey: string, publicKey: string) {
    this.defaultDigestType = digestType;
    this.defaultPrivateKey = privateKey;
    this.defaultPublicKey = publicKey;
  }

  sign(message: string, digestType?: string, privateKey?: string) {
    digestType = digestType || this.defaultDigestType;
    privateKey = privateKey || this.defaultPrivateKey;

    return createSign(digestType).update(message).sign(privateKey, "base64");
  }

  isValid(message: string, signature: string, digestType?: string, publicKey?: string) {
    digestType = digestType || this.defaultDigestType;
    publicKey = publicKey || this.defaultPublicKey;

    return createVerify(digestType).update(message).verify(publicKey, signature, 'base64');
  }
}
