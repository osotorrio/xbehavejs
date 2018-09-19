'use strict';

global.xbehave = {
    total: 0,
    failed: 0
};

global.scenario = (text, action)=> {
    console.log('\n');
    console.log('Scenario: ' + text);
    xbehave.total++;
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

global._ = (text, action)=> {
    execute(text, action);
};

function execute(text, action){
    try {
        console.log(text);
        action();
    } catch (exception) {
        xbehave.failed++;
        console.error(exception);
    }
}