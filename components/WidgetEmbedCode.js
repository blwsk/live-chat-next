import React from "react";

export default ({ portalId = "99209436" }) => (
  <script
    type="text/javascript"
    id="hs-script-loader"
    async={true}
    defer={true}
    src={(() => {
      const env = (`${portalId}` || " ")[0] === "9" ? "qa" : "";
      return `//js.hs-scripts${env}.com/${portalId}.js`;
    })()}
  />
);
