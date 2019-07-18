import React from 'react';
import { serializeQueryString } from '../operators/serializeQueryString';

export default ({ query, portalId }) => {
  return (
    <div>
      <span>
        <a href={`/${serializeQueryString(query)}`}>Root</a>
        {' | '}
        <a href={`/pricing${serializeQueryString(query)}`}>Pricing</a>
        {' | '}
        <a href={`/bot${serializeQueryString(query)}`}>Bot</a>
        {' | '}
        <a href={`/gdpr${serializeQueryString(query)}`}>Gdpr</a>
        {' | '}
        <a href={`/empty${serializeQueryString(query)}`}>Empty</a>
        {portalId === 99209436 && (
          <span>
            {' | '}
            <a href={`/splash${serializeQueryString(query)}`}>Splash</a>
          </span>
        )}
      </span>

      <blockquote
        style={{
          marginLeft: 0,
          backgroundColor: 'aliceblue',
          width: '100%',
          padding: '8px',
          boxSizing: 'border-box'
        }}
      >
        <p>{'👋  Specify a portal using `portalId` and `env` query parameters like so:'}</p>
        <p>
          <a href="/?portalId=1653271&env=prod">
            <code>{`?portalId=1653271&env=prod`}</code>
          </a>
        </p>
      </blockquote>
    </div>
  );
};
