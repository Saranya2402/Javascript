const strArray = ['a','b','c','d','e'] // if its a 32(4(shells) * 8(bits)) bit OS this array takes up 4*5 bytes of memory and 
//if 64(8 (shells) * 8 (bits)) bit OS this array takes upto 8*5 bytes of memory

console.log(strArray[5]) // returns undefined

console.log(strArray[3])

console.log(strArray.push('hi'))

console.log(strArray.pop())

console.log(strArray.splice(2,0,'hello','welcome'))

console.log(strArray.unshift('to'))

console.log(strArray)