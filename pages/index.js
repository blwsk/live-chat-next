import React, { Component } from 'react';
import { withLayout } from '../components/Layout';

class Root extends Component {
  render() {
    return (
      <div>
        <h1>Root</h1>
      </div>
    );
  }
}

export default withLayout()(Root);
