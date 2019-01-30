function load() {
  window.HubSpotConversations.debug(true);
  window.HubSpotConversations.widget.load();
}

export function safelyLoadLiveChat() {
  const isApiPresent =
    window.HubSpotConversations &&
    window.HubSpotConversations.debug &&
    window.HubSpotConversations.widget;

  if (isApiPresent) {
    console.log('>>> calling HubSpotConversations directly <<<');

    load();
  } else {
    window.hsConversationsOnReady = [
      () => {
        console.log('>>> using hsConversationsOnReady callback array <<<');
        load();
      }
    ];
  }
}
