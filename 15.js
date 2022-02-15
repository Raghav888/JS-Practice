// Flatten an array without using flat().

const input = [
    ["a", "b", "c"],
    ["c", "d", "e"],
    ["e", "d", "f"],
];

const spreader = (acc, curr) => [...acc, ...curr];

console.log(input.reduce(spreader, []));