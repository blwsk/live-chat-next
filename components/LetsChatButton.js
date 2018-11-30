import React from 'react';

function LetsChatButton() {
  return (
    <button
      onClick={() => {
        if (
          window &&
          window.hubspot &&
          window.hubspot.messages &&
          window.hubspot.messages.EXPERIMENTAL_API
        ) {
          console.log('This click might do something...');
          window.hubspot.messages.EXPERIMENTAL_API.requestWidgetOpen();
        } else {
          console.log('This click did nothing...');
        }
      }}
    >
      {"Let's chat"}
    </button>
  );
}

export default LetsChatButton;
