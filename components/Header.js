import React from 'react';
import { serializeQueryString } from '../operators/serializeQueryString';

const Header = ({ env, portalId }) => {
  const query = { env, portalId };

  const queryString = serializeQueryString(query);

  return (
    <div>
      <span>
        <a href={`/${queryString}`}>Root</a>
        {' | '}
        <a href={`/pricing${queryString}`}>Pricing</a>
        {' | '}
        <a href={`/bot${queryString}`}>Bot</a>
        {' | '}
        <a href={`/gdpr${queryString}`}>Gdpr</a>
        {' | '}
        <a href={`/empty${queryString}`}>Empty</a>
        {portalId === 99209436 && (
          <span>
            {' | '}
            <a href={`/splash${queryString}`}>Splash</a>
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
          <a href={`/${serializeQueryString({ env: 'prod', portalId: 1653271 })}`}>
            <code>{`?env=prod&portalId=1653271`}</code>
          </a>
        </p>
        <p>
          <a href={`/${serializeQueryString({ env: 'qa', portalId: 99209436 })}`}>
            <code>{`?env=qa&portalId=99209436`}</code>
          </a>
        </p>
      </blockquote>
    </div>
  );
};

export default Header;
