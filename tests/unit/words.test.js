//nimeä testifunktiot <nimi>.test.js että jest lyötää ne!

import words from '../../src/words.js';

describe('words function', () => {
  test('splits basic ASCII string with default behavior', () => {
    const input = 'fred, barney, & pebbles';
    const result = words(input);
    expect(result).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('splits basic ASCII string with custom pattern', () => {
    const input = 'fred, barney, & pebbles';
    const pattern = /[^, ]+/g;
    const result = words(input, pattern);
    expect(result).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test('handles an empty string', () => {
    const input = '';
    const result = words(input);
    expect(result).toEqual([]);
  });

  test('splits string with underscores correctly', () => {
    const input = 'Hello_world';
    const result = words(input);
    expect(result).toEqual(['Hello', 'world']);
  });

  test('splits string using custom pattern for alphanumeric words', () => {
    const input = 'foo bar baz';
    const pattern = /\w+/g;
    const result = words(input, pattern);
    expect(result).toEqual(['foo', 'bar', 'baz']);
  });
});
