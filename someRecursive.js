function someRecursive(array, cb){
    if (cb(array.pop())) return true // shortens the array while passing in the last value into the callback funciton
    if (!array[0]) return false // checks to see if the first item in the array is truthy. It may be a good idea to alter this
    return someRecursive(array, cb)
    // shorten the array 
    // loop backwards over the array so you can use pop 
    
}

console.log(someRecursive([4,6,8,9], isOdd)) // false