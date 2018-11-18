import React from 'react';
import { serializeQueryString } from '../operators/serializeQueryString';

export default ({ portalId, query }) => (
  <span>
    <a href={`/${serializeQueryString(query)}`}>Root</a>
    {' | '}
    <a href={`/app${serializeQueryString(query)}`}>App</a>
    {' | '}
    <a href={`/pricing${serializeQueryString(query)}`}>Pricing</a>
    {' | '}
    <a href={`/bot${serializeQueryString(query)}`}>Bot</a>
    {' | '}
    <a href={`/gdpr${serializeQueryString(query)}`}>Gdpr</a>
  </span>
);
