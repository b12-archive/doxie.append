import cli from '../module/cli-plugin';

const test = require('tape-catch');
const curry = require('1-liners/curry');
const property = curry(require('1-liners/property'));
const dummyOutput = require('doxie-dummy/output');

test('CLI plugin:  Does what it should', (is) => {
  const mock = dummyOutput([
    'one',
    'two',
    'three',
  ]);

  is.deepEqual(
    cli('four')(mock).docs.map(property('output')),
    ['one', 'two', 'three', 'four'],
    'sticks a string onto the end of the docs'
  );

  is.deepEqual(
    cli('four', 'five')(mock).docs.map(property('output')),
    ['one', 'two', 'three', 'four five'],
    'takes multiple strings, concatenating them with a space (like `echo`)'
  );

  is.deepEqual(
    cli()(mock).docs.map(property('output')),
    ['one', 'two', 'three', ''],
    'evaluates “no argument” to an empty string (like `echo`)'
  );

  is.end();
});
