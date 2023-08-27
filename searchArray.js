//********************************************O(a*b) time complexity && O(1) space complexity************************************************************

// let result = false;

// function searchArray(array1, array2) {
//     array1.forEach(element1 => {
//         array2.forEach(element2 => {
//             if(element1 === element2)
//                 result=true;
//         })
//     });
//     return result;
// }

// let arr1 = ['a','y','c','d']
// let arr2 = ['x','y','z']

// console.log(searchArray(arr1, arr2))

//NB:- here we are not creating any new variables, we are just using the input. so the space complexity is better with this solution with O(1) space complexity
//********************************************O(a+b) Time complexity && O(a) Space complexity)****************************************************************************

// let arr1 = ['a','b','c','d']
// let arr2 = ['x','y','z']

// function searchAarray(array1, array2){
//     let map = {} // creates an empty object
//     for(let i = 0; i < array1.length; i++){ //iterates through the first array
//         const item = array1[i]  //assigns the first array element to constant item
//         if(!map[item]){  // checks whether if the object doesnt have the element from array 1
//             map[item] = true // creates a key value pair in the object with key as element from the array and value as true
//         }
//     }

//     for(let j = 0; j < array2.length; j++){ // iterates through the 2nd array
//          if (map[array2[j]]){   //checks whether the element from array 2 present in the object map
//             return true;
//          }
//     }
//     return false
// }

// console.log(searchAarray(arr1, arr2))

//NB:- Here we are creating a new object and assigning all the values from array 1(a) as the key value pair in the object. so the
// space complexity is little heavy with size of array 1(which is a) --> O(a)

//*********************************************ONE LINE SOLUTION***********************************************************************
let arr1 = ['a','b','c','d']
let arr2 = ['x','b','z']

function searchArray(array1, array2){
    return array1.some(item => array2.includes(item))
}
console.log(searchArray(arr1, arr2))