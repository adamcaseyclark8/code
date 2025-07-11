const changeStartingIndex = (numbers, change) => {
    if (change < 0){
        throw new Error('change must be an positive integer')
    }

    // THIS IS UNNECESSARY - FUNCTION WILL HANDLE
    // ZERO AS STARTING INDEX - FOR READABILITY ONLY
    // MAYBE IMPROVES PERFORMANCE??
    if (change === 0){
        return numbers;
    }

    if (numbers.length === 0){
        return [];
    }

    const leftAdjustedIndex = numbers.length - change
    const offset = leftAdjustedIndex % numbers.length;
    reverseArrayInPlace(0, numbers.length - 1, numbers);
    reverseArrayInPlace(0, offset - 1, numbers);
    reverseArrayInPlace(offset, numbers.length - 1, numbers);

    return numbers;
};

const reverseArrayInPlace = (start, end, array) => {
    while (start < end) {
        [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
    }
    return array;
};

module.exports = changeStartingIndex