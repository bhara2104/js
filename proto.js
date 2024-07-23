function Animal(name) {
    this.name = name;
}
Animal.prototype.sound = function () {
    console.log("Some generic sound");
};
function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}
Object.assign(Dog.prototype, Animal.prototype);
Dog.prototype.constructor = Dog;
const myDog = new Dog("Buddy", "Labrador");
myDog.sound();