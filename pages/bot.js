import React, { Component } from 'react';
import { withLayout } from '../components/Layout';

class Bot extends Component {
  render() {
    return (
      <div>
        <h1>Bot</h1>
      </div>
    );
  }
}

export default withLayout()(Bot);
