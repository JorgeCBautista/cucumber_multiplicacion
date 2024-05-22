const { Given,When,Then} =require('@cucumber/cucumber');
const assert = require('assert');

const num1 = 5;
let num2;
let results = [];


Given('Inicio la multiplicación de la tabla de 5 x {int}',(number2) =>{
    num2 = number2;
    results = [];
        results.push(num1 * num2);
})

When('Estoy en la ultima multiplicación de 5 x {int}',(numfinal) =>{
    num2 = numfinal;
    for (let i = 2; i <= numfinal; i++) {
        results.push(num1 * i);
    }

})

Then('Debe mostrarme la tabla del 5 completa hasta el {int}',(expectedNumber) =>{
    num2=expectedNumber;
    for (let i = 1; i <= expectedNumber; i++) {
        const result = results[i - 1];
        const expected = num1 * i;
        console.log(`El resultado de 5 x ${i} es = ${result}`);
        assert.strictEqual(result, expected);
    }
})