class Animal{
    playSound(){
        console.log("Anim is playing sound");
    }
}

class Dog extends Animal{

}
// Inheritance is same as in java
let dog = new Dog()
dog.playSound();