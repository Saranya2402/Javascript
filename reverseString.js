//create function to reverse the string
//Hi My name is Saranya --> aynaraS si eman yM iH

//***********************************Solution 1 ********************************************************

const string = 'Hi My name is Saranya'

function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "Invalid Input";
    }
    const reverseString = []
    for (let i = str.length - 1; i>=0 ; i--){
        reverseString.push(str[i])
        console.log(reverseString)
    }
    console.log(reverseString.join(''))
}

reverse(string)

//**********************************************************Solution 2***************************************************/

// string.split() function converts string to array
// reverse() is an array method to reverse the items in an array

function reverse2(str){
    console.log(str.split('').reverse().join(''))
}

reverse2(string)

//*********************************************************************Solution 3**********************************************/

//With ES6 arrow function and destructuring([...str])


const reverse3 = str => {
    console.log([...str].reverse().join(''))
}

reverse3(string)