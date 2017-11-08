"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class HmCrypto {
    constructor(digestType, privateKey, publicKey) {
        this.defaultDigestType = digestType;
        this.defaultPrivateKey = privateKey;
        this.defaultPublicKey = publicKey;
    }
    sign(message, digestType, privateKey) {
        digestType = digestType || this.defaultDigestType;
        privateKey = privateKey || this.defaultPrivateKey;
        return crypto_1.createSign(digestType).update(message).sign(privateKey, "base64");
    }
    isValid(message, signature, digestType, publicKey) {
        digestType = digestType || this.defaultDigestType;
        publicKey = publicKey || this.defaultPublicKey;
        return crypto_1.createVerify(digestType).update(message).verify(publicKey, signature, 'base64');
    }
}
exports.HmCrypto = HmCrypto;
//# sourceMappingURL=hm-crypto.js.map