'use strict';

const PropTypes = require('prop-types');
const blacklist = require('blacklist');
const {Component, h, Text} = require('ink');

const PROPS = ['percent', 'left', 'right', 'columns', 'character'];

class Bar extends Component {
  getString() {
    const {percent, columns, left, right, character} = this.props;

    const screen = columns || process.stdout.columns || 80;
    const space = screen - right - left;
    const max = Math.min(Math.floor(space * percent), space);

    return character.repeat(max);
  }

  render() {
    const props = blacklist(this.props, PROPS);
    return h(Text, props, this.getString());
  }
}

Bar.defaultProps = {
  columns: 0,
  percent: 1,
  left: 0,
  right: 0,
  character: '█'
};

Bar.propTypes = {
  columns: PropTypes.number,
  percent: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  character: PropTypes.string
};

module.exports = Bar;
