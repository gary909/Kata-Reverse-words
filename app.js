function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
    
}

console.log(reverseWords('apple')); // 'elppa'
console.log(reverseWords('a b c d')); // 'a b c d'
console.log(reverseWords('double  spaced  words')); // 'elbuod  decaps  sdrow'