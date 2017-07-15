'use strict';

const PropTypes = require('prop-types');
const blacklist = require('blacklist');
const {Component, h, Text} = require('ink');

const PROPS = ['percent', 'left', 'right', 'columns', 'character'];

class Bar extends Component {
  getString() {
    const {percent, columns, left, right, character} = this.props;

    const space = columns - right - left;
    const max = Math.min(Math.floor(space * percent), space);

    return character.repeat(max);
  }

  render() {
    const props = blacklist(this.props, PROPS);
    return h(Text, props, this.getString());
  }
}

Bar.defaultProps = {
  columns: process.stdout.columns || 80,
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
