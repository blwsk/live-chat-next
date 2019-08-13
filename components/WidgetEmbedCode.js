import React, { useEffect } from 'react';

class WidgetEmbedCode extends React.Component {
  componentDidMount() {
    this.injectScript();
  }

  injectScript() {
    const { portalId = 99209436, env = 'qa' } = this.props;

    const s = document.createElement('script');

    s.type = 'text/javascript';
    s.id = 'hs-script-loader';
    s.async = true;
    s.defer = true;
    s.src = `//js.hs-scripts${env === 'qa' ? 'qa' : ''}.com/${portalId}.js`;

    document.body.appendChild(s);
  }

  render() {
    return <div />;
  }
}

export default WidgetEmbedCode;
