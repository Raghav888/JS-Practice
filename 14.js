// Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.

const str = "neoG";
const strArray = str.split("");
const vowels = ["a", "e", "i", "o", "u"];
const check = (data) =>
    vowels.includes(data) ? data.toUpperCase() : data.toLowerCase();
console.log(strArray.map(check).join(""));