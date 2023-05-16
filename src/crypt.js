export const encrypt = (str) => {
  if (typeof str !== 'string' || !str) throw new TypeError('Input must be a string and cannot be empty!');
  const key = Math.floor(Math.random() * 256);
  const len = str.length;
  const codeUnits = new Uint16Array(len + 1);
  
  for (let i = 0; i <= len; i++) {
    codeUnits[i] = str.charCodeAt(i) ^ key;
  }
  codeUnits[len] = key;
  const charCodes = new Uint8Array(codeUnits.buffer);
  const result = String.fromCharCode(...charCodes);
  return btoa(result);
}

export const decrypt = (binary) => {
  if (typeof binary !== 'string' || !binary) throw new TypeError('Input must be a string and cannot be empty!');
  const str = atob(binary);
  const bytes = new Uint8Array(str.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  const charCodes = new Uint16Array(bytes.buffer);
  const len = charCodes.length - 1;

  const chars = new Array(len);
  for (let i = 0; i < len; i++) {
    chars[i] = String.fromCharCode(charCodes[i] ^ charCodes[len]);
  }
  return chars.join('');
}
