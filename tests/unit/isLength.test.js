import isLength from '../../src/isLength.js';

const MAX_SAFE_INTEGER = 9007199254740991

describe('isLength function', () => {
  test('should return true for valid array-like lengths', () => {
    expect(isLength(0)).toBe(true);
    expect(isLength(1)).toBe(true);
    expect(isLength(100)).toBe(true);
    expect(isLength(MAX_SAFE_INTEGER)).toBe(true);
  });

  test('should return false for non-integer numbers', () => {
    expect(isLength(3.5)).toBe(false);
    expect(isLength(-1)).toBe(false);
    expect(isLength(Number.MIN_VALUE)).toBe(false);
  });

  test('should return false for values outside the valid range', () => {
    expect(isLength(Infinity)).toBe(false);
    expect(isLength(MAX_SAFE_INTEGER + 1)).toBe(false);
  });

  test('should return false for non-number types', () => {
    expect(isLength('3')).toBe(false);
    expect(isLength(null)).toBe(false);
    expect(isLength(undefined)).toBe(false);
    expect(isLength({})).toBe(false);
    expect(isLength([])).toBe(false);
  });

  test('should return false for negative numbers', () => {
    expect(isLength(-1)).toBe(false);
    expect(isLength(-Infinity)).toBe(false);
  });
});
