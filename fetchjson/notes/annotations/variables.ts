let apples: number = 5;
console.log(`I have ${apples} apples.`);

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();
console.log(`The current date and time is: ${now.toISOString()}`);

// Array 
let colors: string[] = ['red', 'green', 'blue'];
console.log(`Colors array: ${colors.join(', ')}`);
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(`Numbers array: ${numbers.join(', ')}`);
let truths: boolean[] = [true, false, true];
console.log(`Boolean array: ${truths.join(', ')}`);

// Array of arrays
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log('Matrix:');
matrix.forEach(row => console.log(row.join(' ')));

// Classes
class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

let myCar: Car = new Car('Toyota', 'Corolla');
console.log(`My car is a ${myCar.make} ${myCar.model}.`);

// Object literal
let point: { x: number; y: number } = { x: 10, y: 20 };
console.log(`Point coordinates: (${point.x}, ${point.y})`);
let rectangle: { width: number; height: number } = { width: 5, height: 10 };
console.log(`Rectangle dimensions: ${rectangle.width} x ${rectangle.height}`);

// Function
const logNumber: (num: number) => void = (num: number) => {
    console.log(`The number is: ${num}`);
}

console.log(`Logging a number:`);
logNumber(42);

const logString: (str: string) => void = (str: string) => {
    console.log(`The string is: ${str}`);
}

function add(a: number, b: number): number {
    return a + b;
}

// 3 cases that we need type annotations (developer tells TS) for variables
// 1. When a function returns the 'any' type and we need to clarify the value
function jsonParse(str: string): any {
    return JSON.parse(str);
}

// 2. When we declare a variable on one line and initialize it later
let words: string[] = ['hello', 'world'];
// let foundWord;
let foundWord: boolean; // TS will recommend to use boolean    

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'world') {
        foundWord = true;
    }
}
console.log(`Found the word 'world': ${foundWord}`);

// 3. When we want a variable to have a type that can't be inferred correctly
let numbersList: number[] = [1, -2, 3, -4, 5];
//let numberAboveZero = false;
let numberAboveZero: boolean | number = false; // TS will recommend to use boolean | number

for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i] > 0) {
        numberAboveZero = numbersList[i];
    } 
}
console.log(`Contains a number above zero: ${numberAboveZero}`);