import defaultTo from '../../src/defaultTo.js';

describe('defaultTo function', () => {
  test('should return the value if it is neither NaN, null, nor undefined', () => {
    expect(defaultTo(1, 10)).toBe(1);
    expect(defaultTo('Hello', 'Default')).toBe('Hello');
    expect(defaultTo(true, false)).toBe(true);
    expect(defaultTo(0, 42)).toBe(0);
    expect(defaultTo('', 'Fallback')).toBe('');
  });

  test('should return the default value if the value is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test('should return the default value if the value is undefined', () => {
    expect(defaultTo(undefined, 'Default')).toBe('Default');
  });

  test('should return the value if it is NaN (NaN is not null or undefined)', () => {
    expect(defaultTo(NaN, 10)).toBe(NaN);
  });

  test('should handle complex objects', () => {
    const defaultObj = { key: 'default' };
    const valueObj = { key: 'value' };
    expect(defaultTo(valueObj, defaultObj)).toBe(valueObj);
    expect(defaultTo(null, defaultObj)).toBe(defaultObj);
  });
});
