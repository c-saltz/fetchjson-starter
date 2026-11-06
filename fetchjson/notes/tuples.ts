const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// Alias type
type Drink = [string, boolean, number]; // Tuple type, not an array type

// Tuple type
const pepsi: Drink = ['brown', true, 25];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];