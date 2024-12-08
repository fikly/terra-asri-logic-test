function isCircularPalindrome(word) {
  if (word.length <= 1) return false

  //   const palindrome = word.toLowerCase().split('').reverse().join('') //simpleway

  const splitWord = word.toLowerCase().split('')
  let palindrome = ''

  for (let i = splitWord.length - 1; i >= 0; i--) {
    palindrome += splitWord[i]
  }

  return word.toLowerCase() === palindrome
}

console.log(isCircularPalindrome('racecar'))
console.log(isCircularPalindrome('hello world'))
console.log(isCircularPalindrome('mAlAyAlaM'))
