// Write a function that accepts a number as input and inserts hyphens between every two even numbers.

const num = 24345687;
const splitedstring = String(num).split("");
const splitednum = splitedstring.map((data) => Number(data));

const insertHypen = (data) => {
    const data2 = [...data];
    console.log(data2);
    for (let i = 1; i < data.length; i++) {
        if (data2[i - 1] % 2 === 0 && data2[i] % 2 === 0) {
            data2.splice(i, 0, "-");
            console.log(data2);
        }
    }
    console.log(data2);
    return data2.join("");
};
console.log(insertHypen(splitednum));