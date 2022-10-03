function isPalindrome(x) {
  const str1 = x.toLowerCase(); 
  const str2 = str1.split("").reverse().join("");
  return str1 === str2;
}

console.log(isPalindrome("a")) //> true
console.log(isPalindrome("aba")) //> true
console.log(isPalindrome("Abba")) //> true
console.log(isPalindrome("hello")) //> false
console.log(isPalindrome("Bob")) //> true
console.log(isPalindrome("Madam")) //> true
console.log(isPalindrome("AbBa")) //> true
console.log(isPalindrome("")) //> true