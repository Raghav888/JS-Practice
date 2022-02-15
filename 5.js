// Given an array. Write a function to get the sum of all elements which are greater than 50.

const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

const add = (acc, data) => (acc += data);
console.log(arr.filter((data) => data > 50).reduce(add, 0));