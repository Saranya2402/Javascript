// inputs - [0,3,4,31] [4,6,30] => output [0,3,4,4,6,30,31]

function mergeArray(array1, array2){
    let result = [];
    if(array1.length<1){
        result = array2;
    }
    else if(array2.length<1){
        result = array1;
    }
    else{
        let i = 0;
        let j = 0;
        let arrayItem1 = array1[i];
        let arrayItem2 = array2[j];
        
        while(arrayItem1 || arrayItem2){

            //undefined < 'any number' returns false
            if(!arrayItem2 || arrayItem1 < arrayItem2){
                result.push(arrayItem1);
                i++;
                arrayItem1 = array1[i];
                
            }
            else{
                result.push(arrayItem2);
                j++;
                arrayItem2 = array2[j];
            }
        }
 
    }
    console.log(result)
    return result;
}

function shouldPushArray1Element(array1) {

}

const arr1 = [0,21];
const arr2 = [4,6,30]

mergeArray(arr1,arr2)