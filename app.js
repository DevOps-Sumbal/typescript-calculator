"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var calculator = require("./calculator");
function displayResult(result) {
    console.log("Result: ".concat(result));
}
var prompt = inquirer.createPromptModule();
prompt([
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number:',
        validate: function (input) { return !isNaN(parseFloat(input)) || 'Please enter a valid number'; },
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number:',
        validate: function (input) { return !isNaN(parseFloat(input)) || 'Please enter a valid number'; },
    },
    {
        type: 'list',
        name: 'operation',
        message: 'Select an operation:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide'],
    },
])
    .then(function (answers) {
    var num1 = parseFloat(answers.num1);
    var num2 = parseFloat(answers.num2);
    switch (answers.operation) {
        case 'Add':
            displayResult(calculator.add(num1, num2));
            break;
        case 'Subtract':
            displayResult(calculator.subtract(num1, num2));
            break;
        case 'Multiply':
            displayResult(calculator.multiply(num1, num2));
            break;
        case 'Divide':
            try {
                displayResult(calculator.divide(num1, num2));
            }
            catch (error) {
                console.error(error.message);
            }
            break;
    }
});
