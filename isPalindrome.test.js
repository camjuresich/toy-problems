const isPalindrome = require('./isPalindrome')

test('racecar should return true.', () => {
    expect(isPalindrome('racecar')).toBe(true)
})


test('Plankton should return false.', () => {
    expect(isPalindrome('Plankton')).toBe(false)
})

test('amanaplanacanalpanama should return false.', () => {
    expect(isPalindrome('amanaplanacanalpanama')).toBe(true)
})