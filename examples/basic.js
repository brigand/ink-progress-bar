import React from 'react';
import {render, Text, Color} from 'ink';
import ProgressBar from '../src';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const TASKS = 30;

class ProgressApp extends React.Component {
  constructor() {
    super();

    this.state = {
      done: 0
    };
  }

  render() {
    const text = 'Running ';

    return (
      <>
        <Text green>
          {text}
        </Text>

        <Color red>
          <ProgressBar
            left={text.length}
            percent={this.state.done / TASKS}
          />
        </Color>
      </>
    );
  }

  componentDidMount() {
    const promises = Array.from({length: TASKS}, () => {
      return delay(Math.floor(Math.random() * 1500))
        .then(() => {
          this.setState(state => ({
            done: state.done + 1
          }));
        });
    });

    Promise.all(promises)
      .then(() => delay(50))
      .then(() => process.exit(0)); // eslint-disable-line unicorn/no-process-exit
  }
}

render(<ProgressApp/>);
