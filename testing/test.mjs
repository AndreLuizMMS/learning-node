import add from './addFunction.mjs';
import assert from 'assert';

console.log('add() should add two numbers');
try {
  assert.strictEqual(add(1, 2), 3);
  console.log('SUCCESS');
} catch (e) {
  console.log('FAILED');
  console.error(e);
}
