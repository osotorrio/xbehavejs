'use strict';

global.xbehave = {
    scenarios: 0,
    steps: 0,
    failed: 0
};

global.scenario = (text, action)=> {
    console.log('\n');
    console.log('Scenario: ' + text);
    xbehave.scenarios++;
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
        console.log('   ' + text);
        xbehave.steps++;
        action();
    } catch (exception) {
        xbehave.failed++;
        console.error(exception);
    }
}