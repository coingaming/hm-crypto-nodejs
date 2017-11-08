export declare class HmCrypto {
    defaultDigestType: string;
    defaultPrivateKey: string;
    defaultPublicKey: string;
    constructor(digestType: string, privateKey: string, publicKey: string);
    sign(message: string, digestType?: string, privateKey?: string): string;
    isValid(message: string, signature: string, digestType?: string, publicKey?: string): boolean;
}
