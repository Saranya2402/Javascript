const array = ["",0,3]

console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0; 
    for(item of array)
        if(item) count++;
    return count
}