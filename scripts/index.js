
function breakLines() {
    console.log("------------------------")
}

function sayHi() {
    console.log("Hi");
}
sayHi();

breakLines();

function sayHello(name) {
    console.log(`Hi ${name}`);
}

sayHello("Fatima");

breakLines();

function greeting(name = "unknown") {
    console.log(`Hi ${name}`);
}

greeting("Fatima");
greeting();

breakLines();

function welcome(isRegistered) {

    if(isRegistered == false){
        console.log("access denied");
        return;
    }
    console.log("passed");
}

welcome(false);
welcome();

breakLines();

function multiplication(number_1, number_2) {
    let total = number_1 * number_2;
    return total;
}

let  number_1 = 3;
let  number_2 = 6; 

console.log(`The result of ${number_1} x ${number_2} is ${multiplication(number_1, number_2)}`);

breakLines();

function printDetails(username, age, ...courses) {
    console.log(`Hi,  my name is ${username}, I'm ${age} years old. My courses are:`);
    for (let index = 0; index < courses.length; index++){
        console.log(`\t${courses[index]}`);
    }
}

printDetails("Fatima", "20", "JS", "Python", "C");



setTimeout(function sayHi(){
    console.log("Hi after 3 seconds");
}, 3000);

breakLines();

const arrowSayHi = () => console.log("Hi");

arrowSayHi();

breakLines();

const arrowGreeting = name => console.log(`Hi ${name}`);

arrowGreeting("Fatima");

breakLines();

const summation = (number_1, number_2) => number_1 + number_2;
  number_1 = 10;
  number_2 = 33; 

console.log(`The result of ${number_1} + ${number_2} is ${summation(number_1, number_2)}`)

breakLines();

const function_1 = () => {
    const function_2 = () => { console.log("Hi from function_2"); }
    console.log("Hi from function_1");
    function_2();
}
function_1();

breakLines();

const division = (x, y) => {
    if(y === 0){
        return null;
    }else {
        return x / y;
    };
};


let x = 10;
let y = 0;

console.log(`The result of ${x} / ${y} is ${division(x, y)} `);

x = 10;
y= 2;

console.log(`The result of ${x} / ${y} is ${division(x, y)} `);



breakLines();

const arrowSummation = (n1, n2) => n1 + n2;
const arrowSubtraction = (n1, n2) => n1 - n2;
const arrowDivision = (n1, n2) => {
    if(n2 === 0){
        return null;
    }else {
        return n1 / n2;
    };
};
const arrowMultiplication = (n1, n2) => n1 * n2;

const calculator = (callback, n1, n2) => {
    return callback(n1, n2);
}

let n1 = 10;
let n2 = 5;

let result = calculator(arrowSummation, n1, n2);
console.log(`The result of ${n1} + ${n2} is ${result}` );

result = calculator(arrowSubtraction, n1, n2);
console.log(`The result of ${n1} - ${n2} is ${result}` );

result = calculator(arrowDivision, n1, n2);
console.log(`The result of ${n1} / ${n2} is ${result}` );

result = calculator(arrowMultiplication, n1, n2);
console.log(`The result of ${n1} * ${n2} is ${result}` );

breakLines();





