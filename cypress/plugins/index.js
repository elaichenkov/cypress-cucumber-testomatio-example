const cucumber = require('cypress-cucumber-preprocessor').default;
const testomatioReporter = require('@testomatio/reporter/lib/adapter/cypress-plugin');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  testomatioReporter(on, config)
};
