const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newArr = tutorials.map(element => properCase(element))
  return newArr
}

let properCase = (str) => {
  let newArr = str.split(" ");
  newArr = newArr.map((element)=> element[0].toUpperCase()+element.slice(1));
  let newStr = newArr.join(' ')
  return newStr
}

  // step 1 iterate through tutorials
  // step 2 iterate through elements and capitalize strings 
  // take strings and return titled strings
  // step 3 how to title strings
  // 3a convert strings into array with split
  // 3b cap first letter for each element in array
  // 3c convert the array back into a string




// properCase = (str) => {
//   let newArr = str.split(" ");
//   newArr = newArr.map((element)=> element[0].toUpperCase()+element.slice(1));
//   let newStr = newArr.join(' ')
//   return newStr
// }