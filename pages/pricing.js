import React, { Component } from 'react';
import { withLayout } from '../components/Layout';

class Pricing extends Component {
  render() {
    return (
      <div>
        <h1>Pricing</h1>
      </div>
    );
  }
}

export default withLayout()(Pricing);
