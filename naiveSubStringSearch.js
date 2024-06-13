function naiveSubStringSearch(str, subStr) {
    count = 0;
    const subLoop = (i) => {
        for (let j = 1; j < subStr.length; j++) {
            if (str[i + j] !== subStr[j]) return;
            if (j === subStr.length - 1) count++;
        }
    };
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (currChar === subStr[0]) {
            subLoop(i)
        }
        /*Loop over the longer string
        Loop over the shorter string
        If the characters don't match, break out of the inner loop
        If the characters do match, keep going
        If you complete the inner loop and find a match,
        increment the count of matches
        Return the count
        */
    }
    return count;
}

module.exports = naiveSubStringSearch

// console.log(naiveSubStringSearch("omgzomgzzzomg", "omg"));
