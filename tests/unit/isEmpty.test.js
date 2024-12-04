import isEmpty from '../../src/isEmpty.js';

describe('isEmpty function', () => {
  test('should return true for null or undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for booleans', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test('should return true for numbers', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(42)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
  });

  test('should return true for empty arrays and strings', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty('')).toBe(true);
  });

  test('should return false for non-empty arrays and strings', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty('abc')).toBe(false);
  });

  test('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('should return true for empty Maps and Sets', () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);
  });

  test('should return false for non-empty Maps and Sets', () => {
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);

    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });

  test('should return true for array-like objects with length 0', () => {
    const argumentsObject = (function () {
      return arguments;
    })();
    expect(isEmpty(argumentsObject)).toBe(true);
  });

  test('should return false for array-like objects with length > 0', () => {
    const argumentsObject = (function () {
      return arguments;
    })(1, 2, 3);
    expect(isEmpty(argumentsObject)).toBe(false);
  });

  test('should return true for objects inheriting from Object.prototype without own keys', () => {
    const protoObject = Object.create({});
    expect(isEmpty(protoObject)).toBe(true);
  });

  test('should handle buffers correctly', () => {
    const emptyBuffer = Buffer.alloc(0);
    const nonEmptyBuffer = Buffer.alloc(5);
    expect(isEmpty(emptyBuffer)).toBe(true);
    expect(isEmpty(nonEmptyBuffer)).toBe(false);
  });

  test('should handle typed arrays correctly', () => {
    const emptyTypedArray = new Int8Array(0);
    const nonEmptyTypedArray = new Int8Array(5);
    expect(isEmpty(emptyTypedArray)).toBe(true);
    expect(isEmpty(nonEmptyTypedArray)).toBe(false);
  });
});
