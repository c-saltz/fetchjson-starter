
// Define properties
interface Reportable {
    summary(): string;
}

// A reportable type object
const oldCivic = {
    name: "Civic",
    year: 2000,
    broken: true,
    vendor: "Honda",
    summary(): string {
        return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
    }
};

// A reportable type object
const iceTea = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My tea has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
}

printSummary(oldCivic);
printSummary(iceTea);

