import React from 'react';
import LetsChatButton from './LetsChatButton';
import SinglePageAppLink from './SinglePageAppLink';

function Footer() {
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <LetsChatButton />
      </div>
      <SinglePageAppLink />
    </div>
  );
}

export default Footer;
