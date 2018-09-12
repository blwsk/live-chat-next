import React from "react";

const param = portalId => (portalId ? `?portalId=${portalId}` : "");

export default ({ portalId }) => (
  <span>
    <a href={`/${param(portalId)}`}>Root</a>
    {" | "}
    <a href={`/app${param(portalId)}`}>App</a>
    {" | "}
    <a href={`/pricing${param(portalId)}`}>Pricing</a>
    {" | "}
    <a href={`/bot${param(portalId)}`}>Bot</a>
    {" | "}
    <a href={`/gdpr${param(portalId)}`}>Gdpr</a>
  </span>
);
