// // input
console.log('Hello World');


// variable and value
let name = 'Pum';
let firstName = 'Pum';
let lastName = 'Chanpom';

// show variable
console.log(firstName + ' ' + lastName);

// constant
const interestRate = 0.3;
// interestRate = 1;
console.log(12000 + (12000 * interestRate));


// data types 
let nameStudent = 'John'; // string literal
let age = 35; // number literal
let isArrived = true; // boolean literal
let myName = undefined; // undefined
let selectedName = null; // object

// check type: typeof + variable
// typeof nameStudent
//  >> 'string'
console.log(typeof(nameStudent));


// object
let musician = {
    firstName: 'John',
    lastName: 'Lennon'
}

console.log(musician.firstName);

let firstString = 'Hello';
let secondString = 'World';
console.log(firstString + ' ' + secondString);

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


// array
let selectedColors = ['red', 'blue', 'brown', 'green'];
selectedColors[4] = 'black';
selectedColors[5] = 56;
console.log(selectedColors);
console.log('Length: ' + selectedColors.length);


// function >> text literal
function greet(name, lastName) {
    console.log('Hello, ' + name + ' ' + lastName + '!');
}

greet('John', 'Smith')

// function >> number literal & calculation
function square(number) {
    return number * number;
}
// console.log(square(3));
console.log(Math.floor(Math.random() * 100));


// Conditional \\ \\

let word = 'Benjamin';
if (word.startsWith('B')) {
    console.log(`The word ${word} starts with 'B.'`);
} else {
    console.log(`The word ${word} does not start with 'B.'`);
}

console.log(typeof(word.indexOf('B')));
console.log(typeof(word.startsWith('B')));


// Iteration \\ \\
let drawCats = function(howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        console.log('Cat #' + i + ' c(=^.^=)c');
    }
}
drawCats(10);

// Iteration over an array 
let teachers = ['Alex', 'Barry', 'Josh', 'Lucien'];
teachers.forEach((teacher) => {
    console.log(teacher);
    console.log(`${teacher} is cool.`);
});

teachers.forEach((teacher) => {
    if (teacher.startsWith('B')) {
        console.log(`${teacher} starts with B`);
    } else {
        console.log(`${teacher} does not with B`);
    }
});


// // Arrow Function \\ \\
// Write a function to capitalize a name.
let nameAuthor1 = 'jAnE';
let nameAuthor2 = 'aDaM';
let nameAuthors = ['jaCK', 'viRGiNiA', 'jaMeS', 'shAkEsPEAre'];

console.log(nameAuthor2.substring(1));

// Capitalize every letter in the word
const capitalize = (word) => {
    return console.log(word.toUpperCase());
}

capitalize(nameAuthor1);
capitalize(nameAuthor2);

nameAuthors.forEach((nameAuthor) => {
    capitalize(nameAuthor);
});

// solution 
const capitalizeName = (nameAuthor) => {
    let firstLetter = nameAuthor[0].toUpperCase();
    let remainingOfWord = nameAuthor.substring(1).toLowerCase();
    let fullName = firstLetter + remainingOfWord;
    return fullName;
}

capitalizeName(nameAuthor1);
capitalizeName(nameAuthor2);
capitalizeName(nameAuthors);

// Capitalize only the first letter of the word.

let author1 = {
    firstName: 'jAnE',
    lastName: 'aUstEN'
}

let author2 = {
    firstName: 'aDaM',
    lastName: 'smItH'    
}

const capitalizeLetter = (word) => {
    let capital = word.charAt(0).toUpperCase();
    let lettersLowerCase = word.slice(1).toLowerCase();
    return capital.concat(lettersLowerCase);
}

console.log(capitalizeLetter(author1.firstName).concat(' ', capitalizeLetter(author1.lastName)));
console.log(capitalizeLetter(author2.firstName).concat(' ', capitalizeLetter(author2.lastName)));