export function serializeQueryString(obj = {}) {
  const keys = Object.keys(obj);

  if (keys.length === 0) {
    return '';
  }

  const parts = keys.map(key => {
    return `${key}=${obj[key]}`;
  });

  return '?' + parts.join('&');
}
