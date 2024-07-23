function* anotherGenerator(i) {
    while(true){
        yield i + 1;
    }
}

function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 20

function* fibonacci() {
    let current = 0;
    let next = 1;
    while (true) {
        const reset = yield current;
        [current, next] = [next, next + current];
        if (reset) {
            current = 0;
            next = 1;
        }
    }
}

const sequence = fibonacci();

console.log(sequence.next().value);
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next(true).value); // 8
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2

