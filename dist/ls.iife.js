var $ls=function(a,u){"use strict";const n=(c=>c&&typeof c=="object"&&"default"in c?c:{default:c})(u),g=`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8INAJSXihUhRGFlsAVkvTCu/l
SrtxISv9m6QuunGia8o8X58k1HFm5B30zRe94vXMSHNVood4M08w591KmmJ0FuGt
fiCWJ3JUBKhKZWyr9xFu8fPDu/+NgfcQk+AD/8DISfgsLLRGuJ4kTwpdpFRQHjaa
KEYOYxwrVPWZhYO80QIDAQAB`,f=`MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALwg0AlJeKFSFEYW
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
YYrikpNJWmQJ10M=`,A=c=>{const e=new n.default;return e.setPublicKey(g),e.encrypt(c)},b=c=>{const e=new n.default;return e.setPrivateKey(f),e.decrypt(c)},l={type:"localStorage",expires:0,encrypt:!1,prefix:"MOE__"},d=c=>{let e=0;for(let r=0;r<c.length;r+=1){const t=c.charCodeAt(r);t<=127?e+=1:t<=2047?e+=2:t<=65535?e+=3:e+=4}return e},E=c=>{globalThis[(c==null?void 0:c.type)||l.type].clear()},y=(c,e)=>{globalThis[(e==null?void 0:e.type)||l.type].removeItem(`${l.prefix}${c}`)},h=(c,e)=>{const r=globalThis[(e==null?void 0:e.type)||l.type].getItem(`${l.prefix}${c}`);if(!r)return;const t=JSON.parse(r);if(t.expires&&t.expires<Date.now()){y(`${l.prefix}${c}`);return}return t.encrypt&&t.value==="string"&&(t.value=b(t.value)),e!=null&&e.all?t:t.value},v=(c,e,r)=>{if((r==null?void 0:r.encrypt)&&typeof e=="object")throw new TypeError("encrypt value not support object");if((r==null?void 0:r.encrypt)&&d(e)>117)throw new TypeError("encrypt value too long");const t={value:(r==null?void 0:r.encrypt)&&e?A(e):e,expires:r!=null&&r.expires?Date.now()+r.expires:0,encrypt:(r==null?void 0:r.encrypt)||l.encrypt};globalThis[(r==null?void 0:r.type)||l.type].setItem(`${l.prefix}${c}`,JSON.stringify(t))},w=()=>"localStorage"in globalThis;return a.clear=E,a.config=l,a.get=h,a.isSupported=w,a.remove=y,a.set=v,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),a}({},JSEncrypt);