displayStars(10)

function displayStars(row){
    for(let i=1 ; i<=row ; i++){
        let pattern = ''
       for(let j = 1; j< i ; j++){
        pattern += '*'
       }
       console.log(pattern)
    }
}