const createCounter = (init) => {
    let counter = init;
    return () => {
        return counter++
    }
}

let counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())

//class method
class Counter {
    constructor(init) {
        this.init = init;
        this.counter = init;
    }
    increment() {
        return this.init++
    }
}

let count = new Counter(6)

console.log(count.increment())
console.log(count.increment())
console.log(count.increment())





