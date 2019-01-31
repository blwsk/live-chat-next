if (window && window.location.href.indexOf('/splash') !== -1) {
  window.hsConversationsSettings = Object.assign({}, window.hsConversationsSettings, {
    loadImmediately: false
  });
}
