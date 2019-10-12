// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {}
// return str
//   .split('')
//   .reverse()
//   .join('')
/////////////
//   let newStr = ''
//   for (i = 0; i <= str.length - 1; i++) {
//     newStr = str[i] + newStr
//   }
//   return newStr
// }
//////////////
// return str.split('').reduce((newStr, char) => char + newStr, '')
// }

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // const reverse = str
  //   .split('')
  //   .reverse()
  //   .join()
  // return reverse === str
  // with reducer
  // const newStr = str.split('').reduce((reverse, char) => reverse + char, '')
  // return newStr === str
  // console.log('reverse', newStr)
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  // return (
  //   parseInt(
  //     int
  //       .toString()
  //       .split('')
  //       .reverse('')
  //       .join('')
  //   ) * Math.sign(int)
  // )
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word[0].toUpperCase() + word.substring(1))
  //   .join(' ')
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // const letter = {}
  // let maxNum = 0
  // let maxChar = ''
  // str.split('').forEach(char => {
  //   if (letter[char]) {
  //     letter[char]++
  //   } else {
  //     letter[char] = 1
  //   }
  //   for (let char in letter) {
  //     if (letter[char] > maxNum) {
  //       maxNum = letter[char]
  //       maxChar = char
  //     }
  //   }
  // })
  // return maxChar
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  // for (let i = 1; i <= 100; i++) {
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     console.log('fizzBuzz')
  //   } else if (i % 3 === 0) {
  //     console.log('Fizz')
  //   } else if (i % 5 === 0) {
  //     console.log('buzz')
  //   } else {
  //     console.log(i)
  //   }
  // }
}

// Call Function
const output = fizzBuzz()

console.log(output)
