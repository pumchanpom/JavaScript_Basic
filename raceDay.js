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
    raceNumber += 1000;
    console.log(`${raceNumber}: 12:30 PM`);
} else {
    console.log('Please see the registration desk.')
}