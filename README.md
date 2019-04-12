# ink-progress-bar

[![Build Status](https://travis-ci.org/brigand/ink-progress-bar.svg?branch=master)](https://travis-ci.org/brigand/ink-progress-bar)

> Progress bar component for [Ink](https://github.com/vadimdemedes/ink).


## Install

```sh
$ npm install ink-progress-bar
```

## Usage

See [examples/basic.js](examples/basic.js) for an example app. Run it with `./examples/run basic`.

```jsx
import React, { Component } from 'react';
import { Color } from 'ink';
import ProgressBar from 'ink-progress-bar';

class MyProgress extends Component {
	render() {
		return (
			<>
				<Color red>
				<ProgressBar
					left={text.length}
					percent={this.state.done / TASKS}
				/>
				</Color>
			</>
		);
	}
}
```

## Props

All props except the ones below are passed to `<Text>` as-is.

### character

Type: `string`<br>
Default: `'█'`

The character to use for each step.

### percent

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
