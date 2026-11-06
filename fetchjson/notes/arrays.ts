// Same types
//-------------------------------------------------------------------------------

const carMakers: string[] = ['ford', 'toyota', 'chevy', 'honda', 'nissan'];

// more complex array
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car: string = carMakers[0];
const myCurrentCar: string = carMakers.pop();
console.log(car)
console.log(myCurrentCar);

const upperCaseCars = carMakers.map((car: string): string => {
    return car.toUpperCase();
});

for (let c of upperCaseCars) {
    console.log(c);
}

// Flexible types
//-------------------------------------------------------------------------------
const importantDates: (Date | string)[] = [new Date(), '2020-01-01', new Date()];
for (let date of importantDates) {
    if (date instanceof Date) {
        console.log(`Date: ${date.toISOString()}`);
        const formattedDate: string = date.toISOString().split('T')[0];
        console.log(`Date (clean): ${formattedDate}`);
    } else {
        console.log(`String: ${date}`);
    }
}