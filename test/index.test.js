/* jshint -W079 */

import append from '../module/index';

const assign = require('object-assign');
const test = require('tape-catch');
const curry = require('1-liners/curry');
const last = require('1-liners/last');
const butLast = require('1-liners/butLast');
const property = curry(require('1-liners/property'));
const dummyOutput = require('doxie-dummy/output');

test('Programmatic API:  Sticks a string at the end of the docs.', (is) => {
  const input = dummyOutput([
    'a',
    'b',
  ]);

  const output = append('c')(input);

  is.deepEqual(
    output.docs.map(property('output')),
    ['a', 'b', 'c'],
    'pushes the input onto docs'
  );

  is.deepEqual(
    last(output.docs),
    {output: 'c'},
    'not populating any other property'
  );

  is.deepEqual(
    assign({}, output, {docs: butLast(output.docs)}),
    input,
    'leaving the rest of the data intact'
  );

  is.equal(
    last(append({toString: () => 'd'})(input).docs).output,
    'd',
    'casts input to string'
  );

  is.end();
});
