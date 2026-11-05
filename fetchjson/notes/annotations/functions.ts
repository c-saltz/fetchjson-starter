const add2num = (a: number, b: number): number => {
    return a + b;
}

let result = add2num(5, 10);
console.log(`The result of adding 5 and 10 is: ${result}`);

const subtract2num = (a: number, b: number): number => (a - b);
result = subtract2num(10, 5);
console.log(`The result of subtracting 5 from 10 is: ${result}`);

const divide2num = (a: number, b: number): number => (b !== 0 ? a / b : NaN);
result = divide2num(10, 2);
console.log(`The result of dividing 10 by 2 is: ${result}`);


const logger = (message: string): void => {
    console.log(`Log: ${message}`);
}
const logMessage = "This is a log message.";
logger(logMessage);

// Never type in TypeScript 
// Definition: The never type represents values that never occur. 
// For example, a function that always throws an error or 
// a function that never returns (e.g., an infinite loop) 
// can be typed as never.

const throwError = (message: string): never => {
    throw new Error(message);
}
const errorMessage = "This is an error message.";
try {
    throwError(errorMessage); 
} catch (error) {
    console.error(`Caught an error: ${(error as Error).message}`);
}

// destructuring with type annotations
const forecast = {
    date: new Date(),
    weather: "sunny"
}

const logForecast = ({ date, weather }: { date: Date; weather: string }): void => {
    console.log(`Date: ${date.toDateString()}, Weather: ${weather}`);
}

logForecast(forecast);