/* eslint-env browser */

export default function pageUrlData(numOnPage) {
  const pageNumberRegex = RegExp('page=[0-9]+');
  const matches = pageNumberRegex.exec(window.location.hash);
  const currentURLPageNum = matches && parseInt(matches[0].split('=')[1]);
  const startValue = matches ? numOnPage * currentURLPageNum : 0;
  const listNum = matches ? numOnPage * (currentURLPageNum + 1) : 5;
  return { startValue, listNum };
}
