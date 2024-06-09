function capitalizeWords (arr) {
    
  // add whatever parameters you deem necessary - good luck!
    const word = arr.pop().toUpperCase()
    if (!arr[0]) return word
    return [...capitalizeWords(arr), word]
}
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']