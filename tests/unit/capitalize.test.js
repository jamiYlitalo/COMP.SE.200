import capitalize from '../../src/capitalize.js';

describe('capitalize function', () => {
    test('capitalizes a fully uppercase string', () => {
      expect(capitalize('FRED')).toBe('Fred');
    });
  
    test('capitalizes a fully lowercase string', () => {
      expect(capitalize('fred')).toBe('Fred');
    });
  
    test('capitalizes a mixed-case string', () => {
      expect(capitalize('fReD')).toBe('Fred');
    });
  
    test('handles an empty string', () => {
      expect(capitalize('')).toBe('');
    });
  
    test('handles a string with one character', () => {
      expect(capitalize('a')).toBe('A');
      expect(capitalize('A')).toBe('A');
    });
  
    test('handles non-string inputs by converting them to strings', () => {
      expect(capitalize(123)).toBe('123');
      expect(capitalize(null)).toBe('Null');
      expect(capitalize(undefined)).toBe('Undefined');
    });
  
    test('handles strings with spaces', () => {
      expect(capitalize(' hello')).toBe(' hello');
      expect(capitalize(' world')).toBe(' world');
    });
  });