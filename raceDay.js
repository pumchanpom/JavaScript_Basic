// Race Day Project
// Race number:
// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.

// Start time:
// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).


let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = false;
let runnerAge = 33;

if (runnerAge > 18 && isEarly === true) {
    raceNumber += 1000;
    console.log(`${raceNumber}: 9:30 AM`);
} else if (runnerAge > 18 && isEarly === false) {
    raceNumber += 1000;
    console.log(`${raceNumber}: 11:00 AM`);
} else if (runnerAge < 18) {
    console.log(`${raceNumber}: 12:30 PM`);
} else {
    console.log('Please see the registration desk.')
}