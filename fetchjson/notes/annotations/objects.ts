const profile = {
    name: "John Doe",
    age: 30,
    coordinate :{
        latitude: 40.7128,
        longitude: -74.0060
    },
    setAge(newAge: number): void {
        this.age = newAge;
    }
}

profile.setAge(99);
console.log(`Updated Age: ${profile.age}`);

// destructuring with type annotations
const { age }: { age: number } = profile;
const { coordinate: { latitude, longitude } } = profile;
console.log(`Destructured Age: ${age}`);
console.log(`Destructured Latitude: ${latitude}`);
console.log(`Destructured Longitude: ${longitude}`);