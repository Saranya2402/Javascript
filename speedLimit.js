//speed limit = 70
//For each 5 after 70 increment Point
//12 points or more - License Suspended

console.log(checkSpeed(130))

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoints = 5;
    if(speed < speedLimit + kmPerPoints) return 'OK'

    const points = Math.floor((speed-speedLimit) / kmPerPoints);
    if(points < 12) return "point : " + points;
    return 'License Suspended'
}