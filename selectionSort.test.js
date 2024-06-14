const selectionSort = require('./selectionSort')

test('should be able to sort an array', () => {
    expect(selectionSort([10,9,8,7,6,5,4])).toStrictEqual([4,5,6,7,8,9,10])
})

test('should be able to sort an array', () => {
    expect(selectionSort([0,0,1,1,2,22,22,22,22,3,45,69])).toStrictEqual([0,0,1,1,2,3,22,22,22,22,45,69])
})

test('should be able to sort an array with negative values', () => {
    expect(selectionSort([1,2,5,4,6,9,-1])).toStrictEqual([-1,1,2,4,5,6,9])
})