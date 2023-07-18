const marks = [80, 80, 80]

console.log(calculateGrade(marks))

// 1-59 --> E
//60-69 --> D
//70-79 --> C
//80-89 --> B
//90-100--> A

function calculateGrade(marksArr){
    let totalMarks = 0;
    let average = 0

    for(let mark of marksArr)
        totalMarks = totalMarks + mark
        average = totalMarks / marksArr.length

        if(average < 60) return 'E'

        if(average < 70) return 'D'

        if(average < 80) return 'C'

        if(average < 90) return 'B'

        if(average <=100) return 'A'
}