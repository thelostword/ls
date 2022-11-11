(function(l,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("jsencrypt")):typeof define=="function"&&define.amd?define(["exports","jsencrypt"],f):(l=typeof globalThis<"u"?globalThis:l||self,f(l.$ls={},l.JSEncrypt))})(this,function(l,f){"use strict";const u=(t=>t&&typeof t=="object"&&"default"in t?t:{default:t})(f),a=`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8INAJSXihUhRGFlsAVkvTCu/l
SrtxISv9m6QuunGia8o8X58k1HFm5B30zRe94vXMSHNVood4M08w591KmmJ0FuGt
fiCWJ3JUBKhKZWyr9xFu8fPDu/+NgfcQk+AD/8DISfgsLLRGuJ4kTwpdpFRQHjaa
KEYOYxwrVPWZhYO80QIDAQAB`,g=`MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALwg0AlJeKFSFEYW
WwBWS9MK7+VKu3EhK/2bpC66caJryjxfnyTUcWbkHfTNF73i9cxIc1Wih3gzTzDn
3UqaYnQW4a1+IJYnclQEqEplbKv3EW7x88O7/42B9xCT4AP/wMhJ+CwstEa4niRP
Cl2kVFAeNpooRg5jHCtU9ZmFg7zRAgMBAAECgYBeCWzT55TT1oppykzsqzY1pNbr
X2K4luM9Xqo/7VRV4tlxOj77kvGog8hxkH8YnLVOyrxUBuz+aW9hO9VCsE8baplk
JqPfyJdI1Lv14AgHUxgGA/7GkWNBjHMVgMqV2+Arxg+b+7i0/qDgguWwQzaZGWZ5
yJcIHs9DE6xerb/FLQJBAOZa6hcAJ2aOGjOlRWmKrhUevO6HlUU6x7Z3ZFKU/9i4
qjtn8+n5RQs+8YlEU/OQVHxgBfaFcPQIc/zPiVdERcMCQQDREm+5Libe6DNAg0bI
hpK+K3vJkogIvWNnK1prydPEtSTslRCDRioHict89oTHnd5Tx/DMIdbZbm3zHhDq
D8XbAkEArwYW5SD9zuNbry/8/IMdX/i57rbfyPkvc0ll1YVWm9E7ruV+I6F9P100
4mojK2XXe6TuAvBC8XhWwJjjroW2RwJAIhlwsXJOkrKqkU4YAGK6klvDP9gvacWB
7fTLNaNgb8ffstqJK/AIsNwPnV0TwP8FoQKOSq0GPsZdFncD6TkTWwJBANZAVnce
KN5P94kmvcCA/3k3j8wWq8Kb4q8VXWE3SV4TYazNtp1QYtiAIFBOSXoi/7d0Uc8z
YYrikpNJWmQJ10M=`,A=t=>{const e=new u.default;return e.setPublicKey(a),e.encrypt(t)},d=t=>{const e=new u.default;return e.setPrivateKey(g),e.decrypt(t)},n={type:"localStorage",expires:0,encrypt:!1,prefix:"MOE__"},i=t=>{let e=0;for(let r=0;r<t.length;r+=1){const c=t.charCodeAt(r);c<=127?e+=1:c<=2047?e+=2:c<=65535?e+=3:e+=4}return e},b=t=>{globalThis[(t==null?void 0:t.type)||n.type].clear()},y=(t,e)=>{globalThis[(e==null?void 0:e.type)||n.type].removeItem(`${n.prefix}${t}`)},h=(t,e)=>{const r=globalThis[(e==null?void 0:e.type)||n.type].getItem(`${n.prefix}${t}`);if(!r)return;const c=JSON.parse(r);if(c.expires&&c.expires<Date.now()){y(`${n.prefix}${t}`);return}return c.encrypt&&c.value==="string"&&(c.value=d(c.value)),e!=null&&e.all?c:c.value},E=(t,e,r)=>{if((r==null?void 0:r.encrypt)&&typeof e=="object")throw new TypeError("encrypt value not support object");if((r==null?void 0:r.encrypt)&&i(e)>117)throw new TypeError("encrypt value too long");const c={value:(r==null?void 0:r.encrypt)&&e?A(e):e,expires:r!=null&&r.expires?Date.now()+r.expires:0,encrypt:(r==null?void 0:r.encrypt)||n.encrypt};globalThis[(r==null?void 0:r.type)||n.type].setItem(`${n.prefix}${t}`,JSON.stringify(c))},T=()=>"localStorage"in globalThis;l.clear=b,l.config=n,l.get=h,l.isSupported=T,l.remove=y,l.set=E,Object.defineProperties(l,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
