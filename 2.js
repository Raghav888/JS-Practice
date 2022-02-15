// Get the names in an array for only those who have a cycle.

const family = [{
        name: "Tanay",
        haveCycle: true,
    },
    {
        name: "Akanksha",
        haveCycle: false,
    },
    {
        name: "Tanvi",
        haveCycle: true,
    },
    {
        name: "Kanak",
        haveCycle: false,
    },
];

const nameCycle = (acc, data) => (data.haveCycle ? [...acc, data.name] : acc);
console.log(family.reduce(nameCycle, []));