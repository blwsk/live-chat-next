import React from 'react';

export default ({ portalId, env = 'qa' }) => (
  <script
    type="text/javascript"
    id="hs-script-loader"
    async={true}
    defer={true}
    src={(() => {
      return `//js.hs-scripts${env === 'qa' ? 'qa' : ''}.com/${portalId}.js`;
    })()}
  />
);
