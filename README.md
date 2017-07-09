# ink-progress-bar

> Progress bar component for [Ink](https://github.com/vadimdemedes/ink).


## Install

```sh
$ npm install --save ink-progress-bar
```

## Usage

See [examples/basic.js](examples/basic.js) for an example app. Run it with `./examples/run basic`.

```jsx
const {h} = require('ink');
const ProgressBar = require('ink-progrss-bar');

<ProgressBar
	char="x"
	progress={0.5}
	left={5}
	right={0}
	green
/>
```

## Props

All props except the ones below are passed to `<Text>` as-is.

### char

Type: `string`<br>
Default: `'█'`

The character to use for each step.

### progress

Type: `number`<br>
Default: `0`

The percentage (between 0 and 1) of progress.

### left
### right

Type: `number`<br>
Default: `0`

The number of characters to subtract from each side of the progress bar. Commonly used if you want text before/after the progress bar on the same line. See [examples/basic.js](examples/basic.js) for an example.


## License

MIT © [Frankie Bagnardi](https://github.com/brigand)
