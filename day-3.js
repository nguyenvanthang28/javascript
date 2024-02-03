// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter =  (init) => {
    let counter = init;

    increment = () => {
        return ++counter;
    }
    decrement = () => {
        return --counter
    }
    reset = () => {
        counter = init
        return init
    }

    return {
        increment,
        decrement,
        reset
    }
}

const result = createCounter(10)
console.log(result.increment())
console.log(result.reset())
console.log(result.decrement())

//use class method
class Counter {
    constructor(init) {
        this.init = init;
        this.counter = init;
    }
    increment(){
        return ++this.counter
    }
    decrement(){
        return --this.counter
    }
    reset(){
        this.counter = this.init
        return this.counter
    }
}

let count = new Counter(6)

console.log(count.increment())
console.log(count.reset())
console.log(count.decrement())
console.log(count.increment())





