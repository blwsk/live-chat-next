import React, { Component } from 'react';
import Footer from '../components/Footer';
import { safelyLoadLiveChat } from '../utils/safelyLoadLiveChat';

class Bot extends Component {
  componentDidMount() {
    window.hsConversationsSettings = {
      loadImmediately: false
    };

    safelyLoadLiveChat();
  }

  render() {
    return (
      <div>
        <h1>Bot</h1>
        <Footer />
      </div>
    );
  }
}

export default Bot;
