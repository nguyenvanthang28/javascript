const filterArray = (arr, fn) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)) {
            newArray.push(arr[i])
        }
    }
    return newArray
}

let arr = [2, 4, 6, 10, 15, 25]
const fn = (element) => {
    return element > 10
}

const result = filterArray(arr, fn)
console.log(result)


//use filter method
// const result = arr.filter(e => {
//     return e < 10
// })
// console.log(result)



