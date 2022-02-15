// Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

const arr = ["You", "all", "are", "rockstars"];

const keyIndex = (acc, curr, index) => ({...acc, [index]: curr });
console.log(arr.reduce(keyIndex, {}));