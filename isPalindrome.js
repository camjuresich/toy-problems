// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(str){
    if (str === '') return true 
    const left = str[0]
    const right = str[str.length-1]
    if (left !== right) return false
    return isPalindrome(str.slice(1,str.length-1))
}

module.exports = isPalindrome

// console.log(isPalindrome('raceca'))