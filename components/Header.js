import React from 'react';
import { serializeQueryString } from '../operators/serializeQueryString';

const Header = ({ env, portalId }) => {
  const query = { env, portalId };

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
          <a
            href={`/${serializeQueryString({
              portalId: 1653271,
              env: 'prod'
            })}`}
          >
            <code>{`?env=prod&portalId=1653271`}</code>
          </a>
        </p>
        <p>
          <a
            href={`/${serializeQueryString({
              portalId: 99209436,
              env: 'qa'
            })}`}
          >
            <code>{`?env=qa&portalId=99209436`}</code>
          </a>
        </p>
      </blockquote>
    </div>
  );
};

export default Header;
