const randomArray = ['PIZZA', 10, true, 25, false, 'Wings']
let lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        let result = array.filter((item) => {
        return typeof item === 'string'
        }).map((item) => {
        return item.toLowerCase()
        })
        resolve(result)
    })
    }
lowerCaseWords(randomArray)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))