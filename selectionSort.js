// Store the first element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a
// smaller number.
// If a smaller number is found, designate that smaller number to
// be the new "minimum" and continue until the end of the array.
// If the "minimum" is not the value (index) you initially began
// with, swap the two values.
// Repeat this with the next element until the array is sorted.

function selectionSort(arr) {
    const swap = (i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]] 
    }
    for (let i = 0; i < arr.length; i++) {
        let smallest = Infinity
        let smallestIndex
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < smallest) {
                smallest = arr[j]
                smallestIndex = j
            }
            if (j+1 === arr.length) {
                swap(i, smallestIndex)
            }
        }
    }
    return arr
}
module.exports = selectionSort