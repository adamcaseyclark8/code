const changeStartingIndex = require('../code/index.js');

describe('verify change starting index function', () => {
    test('given test case', () => {
        expect(changeStartingIndex([1, 2, 3, 4, 5, 6, 7], 2)).toStrictEqual([3, 4, 5, 6, 7, 1, 2])
    });

    test('when array is unordered', () => {
        expect(changeStartingIndex([3, 4, 5, 6, 7, 1, 2], 2)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
    });

    test('with small array', () => {
        expect(changeStartingIndex([1, 2], 1)).toStrictEqual([2, 1])
    });

    test('when starting index loops array many times', () => {
        expect(changeStartingIndex([1, 2], 8)).toStrictEqual([1, 2])
    });

    test('when the starting index is zero', () => {
        expect(changeStartingIndex([1, 2], 0)).toStrictEqual([1, 2])
    });

    test('when the array is empty', () => {
        expect(changeStartingIndex([], 3)).toStrictEqual([])
    });

    test('should throw an error when negative integer used', () => {
        expect(() => changeStartingIndex([1, 2, 3, 4, 5, 6, 7], -1)).toThrow('change must be an positive integer');
    });
});