import reduce from '../../src/reduce.js';

describe('reduce function', () => {
  test('should reduce an array to a single value using the iteratee', () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
    expect(result).toBe(10);
  });

  test('should use the first element of the array as the initial accumulator when not provided', () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n);
    expect(result).toBe(10);
  });

  test('should reduce an object to a single value using the iteratee', () => {
    const result = reduce(
      { a: 1, b: 2, c: 3 },
      (sum, value) => sum + value,
      0
    );
    expect(result).toBe(6);
  });

  test('should group object keys by their values', () => {
    const result = reduce(
      { a: 1, b: 2, c: 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );
    expect(result).toEqual({ 1: ['a', 'c'], 2: ['b'] });
  });

  test('should handle an empty array with an initial accumulator', () => {
    const result = reduce([], (sum, n) => sum + n, 10);
    expect(result).toBe(10);
  });

  test('should return undefined for an empty array without an initial accumulator', () => {
    const result = reduce([], (sum, n) => sum + n);
    expect(result).toBeUndefined();
  });

  test('should handle an empty object with an initial accumulator', () => {
    const result = reduce({}, (sum, value) => sum + value, 10);
    expect(result).toBe(10);
  });

  test('should return undefined for an empty object without an initial accumulator', () => {
    const result = reduce({}, (sum, value) => sum + value);
    expect(result).toBeUndefined();
  });

  test('should handle strings treated as arrays of characters', () => {
    const result = reduce('abc', (acc, char) => acc + char.toUpperCase(), '');
    expect(result).toBe('ABC');
  });
});
