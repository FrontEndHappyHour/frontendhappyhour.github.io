export function createURL(str) {
  const url = str
    .replace(/ /g, '-')
    .toLowerCase()
    .replace(/---|:-/g, '-')
    .replace(/,|"|\./g, '')
    .replace(/#|"|\./g, '')
    .replace(/'/g, '')
    .replace(/\?/g, '')
    .replace(/a\/b/g, 'ab')
    .trim();
  return url;
}
