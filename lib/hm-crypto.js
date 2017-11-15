"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var HmCrypto = /** @class */ (function () {
    function HmCrypto(digestType, privateKey, publicKey) {
        this.defaultDigestType = digestType;
        this.defaultPrivateKey = privateKey;
        this.defaultPublicKey = publicKey;
    }
    HmCrypto.prototype.sign = function (message, digestType, privateKey) {
        digestType = digestType || this.defaultDigestType;
        privateKey = privateKey || this.defaultPrivateKey;
        return crypto_1.createSign(digestType).update(message).sign(privateKey, "base64");
    };
    HmCrypto.prototype.isValid = function (message, signature, digestType, publicKey) {
        digestType = digestType || this.defaultDigestType;
        publicKey = publicKey || this.defaultPublicKey;
        return crypto_1.createVerify(digestType).update(message).verify(publicKey, signature, 'base64');
    };
    return HmCrypto;
}());
exports.HmCrypto = HmCrypto;
//# sourceMappingURL=hm-crypto.js.map