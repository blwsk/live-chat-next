export function serializeQueryString(obj = {}) {
  const keys = Object.keys(obj);

  if (keys.length === 0) {
    return '';
  }

  const parts = keys
    .filter(key => !!obj[key])
    .map(key => {
      return `${key}=${obj[key]}`;
    });

  if (parts.length === 0) {
    return '';
  }

  return '?' + parts.join('&');
}
