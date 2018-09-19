'use strict';

let should = require('should');
let xbehave = require('./xbehave');

module.exports.run = ()=> {
    scenario('Add two numbers', (a, b, result)=>{
        given('the number 5', ()=>{
            a = 5;
        });

        and('the number 4', ()=>{
            b = 4;
        });

        when('adding both', ()=>{
            result = a + b;
        });

        then('the result should be 9', ()=>{
            result.should.be.exactly(9);
        });
    });

    scenario('Subtract two numbers', (a, b, result)=>{
        given('the number 5', ()=>{
            a = 5;
        });

        and('the number 4', ()=>{
            b = 4;
        });

        when('subtracting both', ()=>{
            result = a - b;
        });

        then('the result should be 1', ()=>{
            result.should.be.exactly(1);
        });
    });
};