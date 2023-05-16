
import { expect, describe, it } from 'vitest';
import { encrypt, decrypt } from '../src/crypt';

describe('Encryption and decryption', () => {
  describe('encrypt', () => {
    it('should throw a TypeError for non-string or empty input', () => {
      expect(() => encrypt()).toThrow(TypeError);
      expect(() => encrypt('')).toThrow(TypeError);
      expect(() => encrypt(123)).toThrow(TypeError);
      expect(() => encrypt(null)).toThrow(TypeError);
    });

    it('should encrypt a string correctly', () => {
      const plaintext = 'Hello, world!';
      const encrypted = encrypt(plaintext);
      expect(encrypted).toBeDefined();
      expect(typeof encrypted).toBe('string');
      expect(encrypted).not.toBe(plaintext);
    });

    it('should encrypt a Unicode string correctly', () => {
      const plaintext = '你好，世界！';
      const encrypted = encrypt(plaintext);
      expect(encrypted).toBeDefined();
      expect(typeof encrypted).toBe('string');
      expect(encrypted).not.toBe(plaintext);
    });
  });

  describe('decrypt', () => {
    it('should throw a TypeError for non-string or empty input', () => {
      expect(() => decrypt()).toThrow(TypeError);
      expect(() => decrypt('')).toThrow(TypeError);
      expect(() => decrypt(123)).toThrow(TypeError);
      expect(() => decrypt(null)).toThrow(TypeError);
    });

    it('should decrypt a string correctly', () => {
      const encrypted = encrypt('Hello, world!');
      const decrypted = decrypt(encrypted);
      expect(decrypted).toBeDefined();
      expect(typeof decrypted).toBe('string');
      expect(decrypted).toBe('Hello, world!');
    });

    it('should decrypt a Unicode string correctly', () => {
      const encrypted = encrypt('你好，世界！😊');
      const decrypted = decrypt(encrypted);
      expect(decrypted).toBeDefined();
      expect(typeof decrypted).toBe('string');
      expect(decrypted).toBe('你好，世界！😊');
    });
  });
});
