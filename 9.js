// Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.

const arr = [{
        name: "Apple",
    },
    {
        name: "Mango",
    },
    {
        name: "Potato",
    },
    {
        name: "Guava",
    },
    {
        name: "Capsicum",
    },
];

const addData = (acc, data) =>
    data.name.length > 5 ?
    [...acc, { name: data.name, type: "vegetable" }] :
    [...acc, { name: data.name, type: "fruit" }];
console.log(arr.reduce(addData, []));