console.log('Hello World');

let name = 'Pum';
let firstName = 'Pum';
let lastName = 'Chanpom';

console.log(firstName + ' ' + lastName);

const interestRate = 0.3;
// interestRate = 1;
console.log(12000 + (12000 * interestRate));

let name = 'John';
let age = 35;
let isArrived = true;
let firstName = undefined;
let selectedName = null; 
// check type: typeof + variable

// typeof name
//  >> 'string'

let student = {
    firstName: 'Vilazzini',
    lastName: 'Dutti',
    age: 19
};

student.firstName = 'Victoria';
student['lastName'] = 'Ducati';

// console.log(student.firstName);
console.log(student['firstName']);
console.log(student['lastName']);

let studentName = student.firstName;
let surname = student.lastName;
console.log(studentName + ' ' + surname);
console.log(student);

let selectedColors = ['red', 'blue', 'brown', 'green'];
selectedColors[4] = 'black';
selectedColors[5] = 56;
console.log(selectedColors);
console.log('Length: ' + selectedColors.length);