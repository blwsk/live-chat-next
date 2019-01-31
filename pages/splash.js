import React, { Component } from 'react';
import { safelyLoadLiveChat } from '../utils/safelyLoadLiveChat';

const INLINE_EMBED_ID = 'live-chat-inline-embed';

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };
  }

  componentDidMount() {
    window.hsConversationsSettings = Object.assign({}, window.hsConversationsSettings || {}, {
      loadImmediately: false,
      inlineEmbedSelector: `#${INLINE_EMBED_ID}`
    });
  }

  componentDidUpdate() {
    if (this.state.sidebarOpen) {
      safelyLoadLiveChat();
    }
  }

  openSidebar = () => {
    this.setState({
      sidebarOpen: true
    });
  };

  closeSidebar = () => {
    this.setState({
      sidebarOpen: false
    });

    window.HubSpotConversations.widget.remove();
  };

  render() {
    return (
      <div>
        <h1>Splash</h1>
        <button onClick={this.openSidebar}>I need help</button>
        {this.state.sidebarOpen && (
          <div
            className="sidebar"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              height: '100%',
              width: 400,
              background: 'whitesmoke',
              borderLeft: '1px solid lightgray',
              padding: 12
            }}
          >
            <button onClick={this.closeSidebar}>Ok...I'm good</button>
            <div id={INLINE_EMBED_ID} />
          </div>
        )}
      </div>
    );
  }
}

export default Splash;
