import React, { Component } from 'react';
import { withLayout } from '../components/Layout';

class Empty extends Component {
  render() {
    return (
      <div>
        <h1>Empty</h1>
      </div>
    );
  }
}

export default withLayout()(Empty);
