//nimeä testifunktiot <nimi>.test.js että jest löytää ne!

import add from '../../src/add.js';

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(7, -2)).toBe(5);
  });

  test('adds two negative numbers', () => {
    expect(add(-3, -5)).toBe(-8);
  });

  test('adds a number and zero', () => {
    expect(add(9, 0)).toBe(9);
  });

  test('adds default value when only one argument is provided', () => {
    expect(add(5)).toBe(5);
  });

  test('adds two very large numbers', () => {
    expect(add(1e12, 1e12)).toBe(2e12);
  });

  test('adds two very small numbers', () => {
    expect(add(1e-12, 1e-12)).toBe(2e-12);
  });

  test('adds Infinity and a number', () => {
    expect(add(Infinity, 1)).toBe(Infinity);
  });
});

