'use strict';

let should = require('chai').should();
let xbehave = require('./xbehave');

module.exports.run = ()=> {
    scenario('Multiply two numbers', (a, b, result)=>{
        given('the number 5', ()=>{
            a = 5;
        });

        and('the number 4', ()=>{
            b = 4;
        });

        when('multiplying both', ()=>{
            result = a * b;
        });

        then('the result should be 20', ()=>{
            result.should.be.equal(20);
        });
    });

    scenario('Divide two numbers', (a, b, result)=>{
        given('the number 10', ()=>{
            a = 10;
        });

        and('the number 2', ()=>{
            b = 2;
        });

        when('dividing both', ()=>{
            result = a / b;
        });

        then('the result should be 5', ()=>{
            result.should.be.equal(5);
        });
    });
};