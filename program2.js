function lengthOfLongestSubstring(s) {
    const n = s.length;
    let longestLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < n; end++) {
        const currentChar = s[end];
        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        longestLength = Math.max(longestLength, end - start + 1);
    }

    return longestLength;
}

const testCases = [
    "abcabcbb", 
    "bbbbb",    
    "pwwkew"    
];

testCases.forEach(str => {
    console.log(`For the string "${str}", the length of the longest substring without repeating characters is ${lengthOfLongestSubstring(str)}`);
});
