import React, { Component } from 'react';
import Footer from '../components/Footer';
import { safelyLoadLiveChat } from '../utils/safelyLoadLiveChat';

class Empty extends Component {
  componentDidMount() {
    window.hsConversationsSettings = {
      loadImmediately: false
    };

    safelyLoadLiveChat();
  }

  render() {
    return (
      <div>
        <h1>Empty</h1>
        <Footer />
      </div>
    );
  }
}

export default Empty;
