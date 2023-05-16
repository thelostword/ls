import { expect, describe, it } from 'vitest';
import {
  // encrypt,
  // decrypt,
  clear,
  remove,
  get,
  set,
  // setPrefix
} from '../src/main';

describe('localStorage utility functions', () => {
  describe('clear', () => {
    it('should clear localStorage', () => {
      localStorage.setItem('testKey', 'testValue');
      clear();
      expect(localStorage.getItem('testKey')).toBeNull();
    });
  });

  describe('remove', () => {
    it('should remove a specific localStorage item', () => {
      set('testKey', 'testValue');
      remove('testKey');
      expect(localStorage.getItem('testKey')).toBeNull();
    });
  });

  describe('get and set', () => {
    it('should retrieve a localStorage item', () => {
      const key = 'testKey';
      const value = 'testValue';
      set(key, value);

      const retrievedValue = get(key);
      expect(retrievedValue).toBe(value);
    });

    it('should handle encrypted values correctly', () => {
      const key = 'testKey';
      const value = 'testValue';
      set(key, value, { encrypt: true });

      const retrievedValue = get(key);
      expect(retrievedValue).toBe(value);
    });

    it('should handle expiry time', async () => {
      const key = 'testKey';
      const value = 'testValue';
      const expires = 2000;
      set(key, value, { expires });

      const retrievedValue = get(key);
      expect(retrievedValue).toBe(value);

      const sleep = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const retrievedValue = get(key);
            resolve(retrievedValue)
          }, expires);
        })
      }
      const expiresValue = await sleep();
      expect(expiresValue).toBeUndefined();
    });

    it('should handle JSON data correctly', () => {
      const key = 'testKey';
      const value = { a: 1, b: '2', c: [3, 4, 5] };
      set(key, value);
    
      const retrievedValue = get(key);
      expect(retrievedValue).toEqual(value);

      const rawValue = get(key, true);
      expect(rawValue).toEqual({ value, expires: 0 });
    });

    it('should handle empty values correctly', () => {
      const key = 'testKey';
      const value = '';
      set(key, value);
      const retrievedValue = get(key);
      expect(retrievedValue).toBe(value);
    
      const nullKey = 'nullKey';
      const nullValue = null;
      set(nullKey, nullValue);
      const retrievedNullValue = get(nullKey);
      expect(retrievedNullValue).toBe(nullValue);
    });
  });
});
