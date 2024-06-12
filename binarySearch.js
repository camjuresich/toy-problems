function binarySearch(arr, value) {
    // accepts a sorted array
    // accepts a value to check for
    // -
    let left = 0
    let right = arr.length -1
    if (arr[left] === value) return left
    if (arr[right] === value)  return right 
    while (left < right - 1) {
        // console.log("im still running")
        let middle = Math.ceil((left + right) / 2)
        // console.log(arr[middle])
        if (arr[middle] === value) return middle
        if (value > arr[middle]) {
            left = middle
        } else {
            right = middle 
        }
    }
    return -1
}

function binarySearchRecurse (arr, value) {
    if (typeof value === 'number') {
        if (arr[0] === value ) return 0
        if (arr[arr.length-1] === value) return arr.length-1
        value = [0, arr.length-1, value]
    }
    let right = value[1]
    let left = value[0]
    if (left === right-1) return -1
    let middle = Math.ceil((left + right) /2)
    if (arr[middle] === value[2]) return middle
    if (value > arr[middle]) {
        left = middle
        return binarySearchRecurse(arr, [left, right, value[2]])
    } else {
        right = middle
        return binarySearchRecurse(arr, [left, right, value[2]])
    }


}
console.log(binarySearchRecurse([1,2,3,5,6, 8,9,12,15,17], 8))
// console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 25], 25 ))