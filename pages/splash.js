import React, { Component } from 'react';
import { safelyLoadLiveChat } from '../utils/safelyLoadLiveChat';

const INLINE_EMBED_ID = 'live-chat-inline-embed';
const inlineIframeStyleString = `
  border: none;
  height: 586px;
  width: 392px;
`;

class Splash extends Component {
  componentDidMount() {
    if (
      window.hsConversationsSettings &&
      window.hsConversationsSettings.loadImmediately === false
    ) {
      window.hsConversationsSettings = Object.assign({}, window.hsConversationsSettings, {
        inlineEmbedSelector: `#${INLINE_EMBED_ID}`,
        inlineIframeStyleString
      });

      safelyLoadLiveChat();
    }
  }

  render() {
    return (
      <div>
        <h1>Splash</h1>
        <div id={INLINE_EMBED_ID} />
      </div>
    );
  }
}

export default Splash;
