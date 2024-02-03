const createHelloWorld = () => {
    return () => {
        return 'hello world'
    }
}

const f = createHelloWorld()()

console.log(f)

//closure
const add = (a, b) => {
    return (c) => {
        sum = a + b + c
        return sum
    }
}

const result = add(1,2)

console.log(result(3))










