// IntelliJ debugging isn't working with this; better use IntelliJ compile on save and run from generated app.js file
require('ts-node').register({ disableWarnings: true });
require('./app.ts');