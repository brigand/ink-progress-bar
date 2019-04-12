import ProgressBar from '..';

const run = ({columns, left, right, percent = 1, rightPad = false}) => ProgressBar.prototype.getString.call({
  props: {
    columns,
    left,
    right,
    percent,
    character: 'x',
    rightPad
  }
});

it('has correct length', () => {
  const str = run({
    columns: 50,
    left: 0,
    right: 0
  });
  expect(str.length).toBe(50);

  const str2 = run({
    columns: 60,
    left: 10,
    right: 9
  });
  expect(str2.length).toBe(41);
});

it('should pad right space', () => {
  const str = run({
    columns: 50,
    left: 0,
    right: 0,
    percent: 0.88,
    rightPad: true
  });
  expect(str.length).toBe(50);

  const str2 = run({
    columns: 60,
    left: 10,
    right: 9,
    percent: 0.42,
    rightPad: true
  });
  expect(str2.length).toBe(41);
});
