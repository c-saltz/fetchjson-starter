// A note about TypeScript syntax
const today = new Date();
const month = today.getMonth() + 1; // Months are zero-based in JavaScript
console.log(`Today's date is: ${today.toDateString()}`);
console.log(`The current month is: ${month}`);


const person = {
    name: 'Alice',
    age: 30,
};

console.log(`Person's name is: ${person.name}`);
console.log(`Person's age is: ${person.age}`);

// All attributes of the person object are accessible using dot notation.
person.age = 33;
const { name: personName, age: personAge } = person; // Destructuring assignment
console.log(`Destructured name: ${personName}`);
console.log(`Destructured age: ${personAge}`);

// Type annotations in TypeScript
// Definition: code we add to tell TS what type a variable is
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Type inference in TypeScript
// Definition: TS automatically determines the type of a variable based on its initial value
const greeting = greet('Bob');
console.log(greeting);