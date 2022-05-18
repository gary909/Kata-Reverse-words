function reverseWords(str) {
    // Go for it
    console.log(str.split('').reverse().join(''));
    str = str.split('').reverse().join('');
    return str;
}

console.log(reverseWords('apple')); // 'elppa'
console.log(reverseWords('a b c d')); // 'a b c d'
console.log(reverseWords('double  spaced  words')); // 'elbuod  decaps  sdrow'