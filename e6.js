// Arrow function to convert a character to lower case
const toLowerCase = char => char.toLowerCase();

// Arrow function to convert a word to lower case using the toLowerCase function
const wordToLowerCase = word => word.split('').map(toLowerCase).join('');

// Arrow function to convert an array of strings to array of lower case strings
const arrayToLowerCase = array => array.map(wordToLowerCase);

// Input
const inputArray = ["MA", "SA", "I", "SCH", "OOL"];

// Output
const outputArray = arrayToLowerCase(inputArray);

console.log(outputArray);
