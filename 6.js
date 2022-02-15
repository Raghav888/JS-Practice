// Given an array. Write a function to find the product of all elements which are even.

const arr = [1, 2, 3, 7, 5, 6, 8, 9];
const product = (acc, data) => (acc *= data);
console.log(arr.filter((data) => data % 2 === 0).reduce(product, 1));