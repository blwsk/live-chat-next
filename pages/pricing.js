import React, { Component } from 'react';
import Footer from '../components/Footer';
import { safelyLoadLiveChat } from '../utils/safelyLoadLiveChat';

class Pricing extends Component {
  componentDidMount() {
    window.hsConversationsSettings = {
      loadImmediately: false
    };

    safelyLoadLiveChat();
  }

  render() {
    return (
      <div>
        <h1>Pricing</h1>
        <Footer />
      </div>
    );
  }
}

export default Pricing;
