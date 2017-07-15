const ProgressBar = require('../progress-bar.js');

const run = (columns, left, right) => ProgressBar.prototype.getString.call({
  props: {
    columns,
    left,
    right,
    percent: 1,
    character: 'x'
  }
});

it(`has correct length`, () => {
  const str = run(50, 0, 0);
  expect(str.length).toBe(50);

  const str2 = run(60, 10, 9);
  expect(str2.length).toBe(41);
});
