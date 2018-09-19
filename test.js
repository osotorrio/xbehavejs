let basic_calculator_feature = require('./basic_calculator.feature');
let complex_calculator_feature = require('./complex_calculator.feature');

(function(){
    basic_calculator_feature.run();
    complex_calculator_feature.run();

    console.log('\n');
    console.log('Scenarios: ' + xbehave.scenarios + ', Steps: ' + xbehave.steps + ', Failed: ' + xbehave.failed);
})();

