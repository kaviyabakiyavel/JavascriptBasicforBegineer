//speed limit = 70 //
//if greater than 70 speed limit for every 5 km 
//5 = 1point
//Math.floor(1.3)
//speed 180 if 12 point ( 12points => suspended)


function speedlimit(speed) {
    const speedLimit = 70;
    const kmperpoint = 5;
    //if is less than 75 print ok 
    if (speed < (speedLimit + kmperpoint)) {
        console.log("ok");
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmperpoint)
    if (points >= 12) {
        console.log('License Suspended')
    } else {
        console.log("points", points)
    }

}
//5 * 12 = 130
speedlimit(130)