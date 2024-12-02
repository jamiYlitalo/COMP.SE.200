//nimeä testifunktiot <nimi>.test.js että jest lyötää ne!

import words from '../../src/words.js';

jest.mock('./.internal/unicodeWords.js', () => jest.fn((string) => string.split(/\s+/)))

describe('words function', () => {
  test('splits a simple ASCII string into words', () => {
    const result = words('fred, barney, & pebbles')
    expect(result).toEqual(['fred', 'barney', 'pebbles'])
  })

  test('splits a string with a custom pattern', () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g)
    expect(result).toEqual(['fred', 'barney', '&', 'pebbles'])
  })

  test('handles a string with Unicode characters', () => {
    const mockUnicodeWords = require('./.internal/unicodeWords.js')
    mockUnicodeWords.mockReturnValue(['你好', '世界'])

    const result = words('你好，世界')
    expect(result).toEqual(['你好', '世界'])
    expect(mockUnicodeWords).toHaveBeenCalledWith('你好，世界')
  })

  test('handles an empty string', () => {
    const result = words('')
    expect(result).toEqual([])
  })

  test('handles undefined or null input', () => {
    expect(words(undefined)).toEqual([])
    expect(words(null)).toEqual([])
  })

  test('splits a string with numbers and letters', () => {
    const result = words('abc123 xyz456')
    expect(result).toEqual(['abc123', 'xyz456'])
  })

  test('handles strings with special characters', () => {
    const result = words('hello-world!')
    expect(result).toEqual(['hello', 'world'])
  })

  test('handles strings with only special characters', () => {
    const result = words('!!! $$$ ###')
    expect(result).toEqual([])
  })
})