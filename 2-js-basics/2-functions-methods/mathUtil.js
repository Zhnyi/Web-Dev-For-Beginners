/*A function add that takes two parameters and returns their sum
A function multiply with default parameter values (second parameter defaults to 1)
An arrow function square that takes a number and returns its square
A function calculate that accepts another function as a parameter and two numbers, then applies the function to those numbers
Demonstrate calling each function with appropriate test cases*/

function Addition(a,b){
    return a + b;
}

function Multiply(a, b = 1){
    return a * b;
}

function square(a){
    return a * a;
}

function calculate (func, a, b){
    return func(a, b);
}
