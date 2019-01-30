import React from 'react';
import { serializeQueryString } from '../operators/serializeQueryString';

export default ({ query }) => (
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
    {' | '}
    <a href={`/splash${serializeQueryString(query)}`}>Splash</a>
  </span>
);
