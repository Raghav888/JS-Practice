// Count the occurrences of distinct elements in the given array.

const input = [
    ["a", "b", "c"],
    ["c", "d", "e"],
    ["e", "d", "f"],
];

const spreader = (acc, curr) => [...acc, ...curr];

const inputarray = input.reduce(spreader, []);

const cal = (acc, data) =>
    acc[data] ? {...acc, [data]: acc[data] + 1 } : {...acc, [data]: 1 };
console.log(inputarray.reduce(cal, {}));