import React, { Component } from 'react';
import shortid from 'shortid';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import styles from './Dashboard.module.css';

export default class Dashboard extends Component {
  state = {
    history: [
      {
        id: shortid.generate(),
        type: 'Deposit',
        amount: 200,
        date: '4/17/2019, 12:45:17',
      },
      {
        id: shortid.generate(),
        type: 'Withdrawal',
        amount: 100,
        date: '4/18/2019, 14:15:23',
      },
    ],
    balance: 5000,
    deposit: 2000,
    withdrawal: 1000,
  };

  createTransaction = (type, amount) => {
    return {
      id: shortid.generate(),
      type,
      amount: Number(amount),
      date: new Date().toLocaleString().replace(/\./g, '/'),
    };
  };

  // eslint-disable-next-line consistent-return
  addHistory = (type, amount) => {
    if (type === 'Withdraw' && amount > this.state.balance) {
      return alert('На счету недостаточно средств для проведения операции!'); // eslint-disable-line no-alert
    }
    if (Number(amount) < 1) {
      return alert('Введите сумму для проведения операции!'); // eslint-disable-line no-alert
    }
    this.setState(state => {
      return {
        history: [this.createTransaction(type, amount), ...state.history],
        balance:
          type === 'Deposit'
            ? state.balance + Number(amount)
            : state.balance - Number(amount),
        [type === 'Deposit' ? 'deposit' : 'withdrawal']:
          type === 'Deposit'
            ? state.deposit + Number(amount)
            : state.withdrawal + Number(amount),
      };
    });
  };

  render() {
    const { balance, history, deposit, withdrawal } = this.state;

    return (
      <div className={styles.dashboard}>
        <Controls onAddHistory={this.addHistory} />
        <Balance balance={balance} deposit={deposit} withdrawal={withdrawal} />
        <TransactionHistory history={history} />
      </div>
    );
  }
}
