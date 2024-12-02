import get from '../../src/get.js';

describe('get function', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    test('retrieves the correct value for a given path string', () => {
        const result = get(object, 'a[0].b.c');
        expect(result).toBe(3);
    });

    test('retrieves the correct value for a given path array', () => {
        const result = get(object, ['a', '0', 'b', 'c']);
        expect(result).toBe(3);
    });

    test('returns default value if the path is not found', () => {
        const result = get(object, 'a[0].b.d', 'default');
        expect(result).toBe('default');
    });

    test('returns default value if the object is null or undefined', () => {
        const result = get(null, 'a[0].b.c', 'default');
        expect(result).toBe('default');
    });

    test('returns undefined if no default value is provided and the path is not found', () => {
        const result = get(object, 'a[0].b.d');
        expect(result).toBeUndefined();
    });

    test('returns undefined if the object is null or undefined and no default value is provided', () => {
        const result = get(null, 'a[0].b.c');
        expect(result).toBeUndefined();
    });
});