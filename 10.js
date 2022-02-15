// Question:
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.

const inventory = [
    { name: "fans", quantity: 3 },
    { name: "chimneys", quantity: 0 },
    { name: "bulbs", quantity: 5 },
    { name: "stove", quantity: 1 },
];

const itemlessthan10 = (acc, data) =>
    data.quantity < 2 ? [...acc, data.name] : acc;
console.log(inventory.reduce(itemlessthan10, []));

const totalInventory = (acc, data) => acc + data.quantity;
console.log(inventory.reduce(totalInventory, 0));

const item0 = (acc, data) =>
    data.quantity === 0 ? {...acc, name: data.name } : acc;
console.log(inventory.reduce(item0, {}));