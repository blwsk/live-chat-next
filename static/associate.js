function identify() {
  const match = RegExp('[?&]' + 'email' + '=([^&]*)').exec(window.location.search);
  const email = match && decodeURIComponent(match[1].replace(/\+/g, ' '));

  const hsq = window && window._hsq;

  if (!email) {
    return { noop: true };
  }

  try {
    hsq.push(['identify', { email, id: email }]);

    return { success: true };
  } catch (error) {
    return { error, success: false };
  }
}

function onInterval() {
  this.count = 0;

  this.interval = setInterval(() => {
    const { success, noop } = identify();

    this.count++;

    if (this.count === 10 || success || noop) {
      clearInterval(this.interval);
    }

    if (success && window) {
      window._hslcwa = true;
    }
  }, 1000);
}

onInterval();
