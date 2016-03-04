'use strict';

// stack trace is working with ts files fine with source-map-support npm package used
import 'source-map-support/register';

// relative path thanks to symlink(for runtime) and moduleReferencing: classic (for tsc/IDE)
import foo from 'lib/foo/foo';

// to import whole module from node_modules use "import * as ... from '...'" - it's transpiled to "var ... = require('...');
// importing default export via: import ... from '...' won't work because then '.default' is applied to all usages
// of imported node_module. Otherwise "import { default as ... } from '...'" should be also working (if d.ts files
// are compatibile to do so); Importing node_module which has named exports can be imported with
// "import { namedExport1, namedExport2 } from '...'" etc.
import * as chalk from 'chalk';
console.log(chalk.bold.red('chalked'));

// works even with functions as default exports
import * as moment from 'moment';
console.log(moment());

// example why default import won't work:
// second of this two lines would result in a "TypeError: moment_1.default is not a function"
// import moment1 from 'moment';
// console.log(moment1());

foo();

// no cycle reference even when using ambient declarations placed inside symlinked dir
class World implements ICanHello {
    constructor () {
        console.log('constructor');
    }
    public hello () {
        console.log('hello u');
    }
}

// debugging is done through ts code correctly
console.log('before new World');
let world = new World();
console.log('after new World');
throw new Error('error a - stack trace is working with ts files fine with source-map-support');
world.hello();
console.log('after hello');
