import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    step: 1,
    initialValue: 1,
  };

  handleIncrement = items => {
    this.setState(state => {
      return {
        initialValue:
          state.initialValue === items.length
            ? 1
            : state.initialValue + state.step,
      };
    });
  };

  handleDecrement = items => {
    this.setState(state => {
      return {
        initialValue:
          state.initialValue === 1
            ? items.length
            : state.initialValue - state.step,
      };
    });
  };

  render() {
    const { items } = this.props;
    const { initialValue } = this.state;

    const itemsLength = items.length;

    return (
      <div className={styles.reader}>
        <Publication item={items[initialValue - 1]} />
        <Counter items={items} initialValue={initialValue} />
        <Controls
          onIncrement={() => this.handleIncrement(items)}
          onDecrement={() => this.handleDecrement(items)}
          initialValue={initialValue}
          itemsLength={itemsLength}
        />
      </div>
    );
  }
}
