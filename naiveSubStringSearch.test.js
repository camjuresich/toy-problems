const naiveSubStringSearch = require('./naiveSubStringSearch')

test('Should return three for the input \"omgomgzomg\", \"omg\"', () => {
    expect(naiveSubStringSearch('omgomgzomg', 'omg')).toBe(3)
})


test('Should return zero for \"abc\", \"d\"', () => {
    expect(naiveSubStringSearch('abc', 'd')).toBe(0)
})

test('Should return one for the input \"arostienaoirengivnnngtomgpfklkvnekrkstjl\", \"omg\"', () => {
    expect(naiveSubStringSearch('arostienaoirengivnnngtomgpfklkvnekrkstjl', 'omg')).toBe(1)
})