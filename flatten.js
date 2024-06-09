function flatten(arr, newArr = []){
    let item = arr.pop()    
    if (typeof item !== 'Array') newArr.push(item)
    else item = flatten(item, newArr)
    if (arr[0] === undefined) return newArr
    return flatten(arr, newArr)
    // function seems to be working but does not preserve the order of items.
    // needs a refactor
    // maybe I can use the spread operator? 
}
console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3