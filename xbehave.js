'use strict';

global.scenario = (text, action)=> {
    console.log('\n');
    console.log('Scenario: ' + text);
    action();
};

global.given = (text, action)=> {
    execute('GIVEN ' + text, action);
};

global.when = (text, action)=> {
    execute('WHEN ' + text, action);
};

global.then = (text, action)=> {
    execute('THEN ' + text, action);
};

global.and = (text, action)=> {
    execute('AND ' + text, action);
};

function execute(text, action){
    try {
        console.log(text);
        action();
    } catch (exception) {
        console.error(exception);
    }
}