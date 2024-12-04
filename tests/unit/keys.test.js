import keys from '../../src/keys.js';

describe('keys function', () => {
  test('should return own enumerable property names of an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(keys(obj)).toEqual(['a', 'b', 'c']);
  });

  test('should return own enumerable property names of an object with inherited properties', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }
    Foo.prototype.c = 3;

    const foo = new Foo();
    expect(keys(foo)).toEqual(['a', 'b']);
  });

  test('should handle array-like objects', () => {
    const array = [1, 2, 3];
    expect(keys(array)).toEqual(['0', '1', '2']);

    const string = 'hi';
    expect(keys(string)).toEqual(['0', '1']);
  });

  test('should return empty array for null or undefined', () => {
    expect(keys(null)).toEqual([]);
    expect(keys(undefined)).toEqual([]);
  });

  test('should return keys of an object coerced from a non-object value', () => {
    expect(keys(42)).toEqual([]);
    expect(keys(true)).toEqual([]);
  });

  test('should return an empty array for objects with no enumerable properties', () => {
    expect(keys({})).toEqual([]);
    const emptyArray = [];
    expect(keys(emptyArray)).toEqual([]);
  });

  test('should return keys of objects with non-enumerable properties', () => {
    const obj = {};
    Object.defineProperty(obj, 'a', {
      value: 1,
      enumerable: false,
    });
    expect(keys(obj)).toEqual([]);
  });
});
