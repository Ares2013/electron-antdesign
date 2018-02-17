// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'antd/lib/date-picker';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <DatePicker />
          <br />
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
