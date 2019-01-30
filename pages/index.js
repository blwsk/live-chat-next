import React, { Component } from 'react';
import Footer from '../components/Footer';
import { safelyLoadLiveChat } from '../utils/safelyLoadLiveChat';

class Root extends Component {
  componentDidMount() {
    window.hsConversationsSettings = {
      loadImmediately: false
    };

    safelyLoadLiveChat();
  }

  render() {
    return (
      <div>
        <h1>Root</h1>
        <Footer />
      </div>
    );
  }
}

export default Root;
