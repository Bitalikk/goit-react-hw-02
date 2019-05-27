import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';
import styles from './Counter.module.css';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  static propTypes = {
    step: PropTypes.number,
    initialValue: PropTypes.number,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: props.initialValue,
  //   };
  // }

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + this.props.step,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - this.props.step,
    }));
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div>
        <span className={styles.count}>{value}</span>
        <Controls
          step={step}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
