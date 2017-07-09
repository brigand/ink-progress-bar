const ProgressBar = require('../src/progress-bar.js');

const run = (columns, left, right) => ProgressBar.prototype.getString.call({
  props: {columns, left, right, char: 'x'}
});

it(`has correct length`, t => {
  const str = run(50, 0, 0);
  expect(str.length).toBe(50);

  const str2 = run(60, 10, 9);
  expect(str2.length).toBe(41);
});

