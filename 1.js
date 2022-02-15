// Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

console.log(arr.map((data) => (data % 2 === 0 ? data + 1 : data)));