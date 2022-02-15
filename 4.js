// Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

const arr = ["eat", "sleep", "repeat", "code"];

const lengthMorethan5 = (data) => data.length > 5;
console.log(arr.filter(lengthMorethan5));