import filter from '../../src/filter.js';

describe('filter function', () => {

    test('filters an array of objects based on a predicate', () => {
        const users = [
          { user: 'barney', active: true },
          { user: 'fred', active: false },
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([{ user: 'barney', active: true }]);
    });

    test('filters an array of numbers with a predicate', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filter(numbers, (n) => n % 2 === 0);
        expect(result).toEqual([2, 4]);
    });

    test('returns an empty array when no elements match', () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filter(numbers, (n) => n > 10);
        expect(result).toEqual([[]]);
    });

    test('handles an empty array gracefully', () => {
        const result = filter([], (n) => n > 0);
        expect(result).toEqual([[]]);
    });

    test('handles null or undefined input gracefully', () => {
        expect(filter(null, (n) => n > 0)).toEqual([[]]);
        expect(filter(undefined, (n) => n > 0)).toEqual([[]]);
    });

    test('uses index and array arguments in the predicate', () => {
        const numbers = [1, 2, 3];
        const result = filter(numbers, (value, index, array) => index === array.length - 1);
        expect(result).toEqual([3]);
    });
});