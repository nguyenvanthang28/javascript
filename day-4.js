 let arr = [1,2,3,4]

// map = (arr) => {
//     let newArray = []
//     arr.map(element => {
//         newArray.push(element * 2)
//     })

//     return newArray
// }

// console.log(map(array))

// map = (arr, fn) => {
//     let newArray = arr.map(fn)
//     return newArray
// }
// const fn = (element) => element * 2 ;
// console.log(map(arr, fn))

const mapArray = (arr, fn) => {
    let newArray = []
    for (let i in arr) {
        newArray.push(fn(arr[i], i))
    }
    return newArray
}

const fn = (element, index) => element * index
console.log(mapArray(arr, fn))









