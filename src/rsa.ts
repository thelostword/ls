/*
 * @Author: thelostword
 * @Date: 2022-08-02 10:04:27
 * @LastEditors: thelostword
 * @LastEditTime: 2022-08-02 11:39:39
 * @FilePath: \ls\src\rsa.ts
 */
import JSEncrypt from 'jsencrypt';

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8INAJSXihUhRGFlsAVkvTCu/l\n'
+ 'SrtxISv9m6QuunGia8o8X58k1HFm5B30zRe94vXMSHNVood4M08w591KmmJ0FuGt\n'
+ 'fiCWJ3JUBKhKZWyr9xFu8fPDu/+NgfcQk+AD/8DISfgsLLRGuJ4kTwpdpFRQHjaa\n'
+ 'KEYOYxwrVPWZhYO80QIDAQAB';

const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALwg0AlJeKFSFEYW\n'
+ 'WwBWS9MK7+VKu3EhK/2bpC66caJryjxfnyTUcWbkHfTNF73i9cxIc1Wih3gzTzDn\n'
+ '3UqaYnQW4a1+IJYnclQEqEplbKv3EW7x88O7/42B9xCT4AP/wMhJ+CwstEa4niRP\n'
+ 'Cl2kVFAeNpooRg5jHCtU9ZmFg7zRAgMBAAECgYBeCWzT55TT1oppykzsqzY1pNbr\n'
+ 'X2K4luM9Xqo/7VRV4tlxOj77kvGog8hxkH8YnLVOyrxUBuz+aW9hO9VCsE8baplk\n'
+ 'JqPfyJdI1Lv14AgHUxgGA/7GkWNBjHMVgMqV2+Arxg+b+7i0/qDgguWwQzaZGWZ5\n'
+ 'yJcIHs9DE6xerb/FLQJBAOZa6hcAJ2aOGjOlRWmKrhUevO6HlUU6x7Z3ZFKU/9i4\n'
+ 'qjtn8+n5RQs+8YlEU/OQVHxgBfaFcPQIc/zPiVdERcMCQQDREm+5Libe6DNAg0bI\n'
+ 'hpK+K3vJkogIvWNnK1prydPEtSTslRCDRioHict89oTHnd5Tx/DMIdbZbm3zHhDq\n'
+ 'D8XbAkEArwYW5SD9zuNbry/8/IMdX/i57rbfyPkvc0ll1YVWm9E7ruV+I6F9P100\n'
+ '4mojK2XXe6TuAvBC8XhWwJjjroW2RwJAIhlwsXJOkrKqkU4YAGK6klvDP9gvacWB\n'
+ '7fTLNaNgb8ffstqJK/AIsNwPnV0TwP8FoQKOSq0GPsZdFncD6TkTWwJBANZAVnce\n'
+ 'KN5P94kmvcCA/3k3j8wWq8Kb4q8VXWE3SV4TYazNtp1QYtiAIFBOSXoi/7d0Uc8z\n'
+ 'YYrikpNJWmQJ10M=';

// rsa加密
export const encrypt = (data) => {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  return jsEncrypt.encrypt(data);
};

// rsa解密
export const decrypt = (data) => {
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPrivateKey(privateKey);
  return jsEncrypt.decrypt(data);
};
