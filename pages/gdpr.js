import React, { Component } from 'react';
import { withLayout } from '../components/Layout';

class Gdpr extends Component {
  render() {
    return (
      <div>
        <h1>Gdpr</h1>
      </div>
    );
  }
}

export default withLayout()(Gdpr);
