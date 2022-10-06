/**
 * Helper append JS to page
 */
export const addJsToPage = (src, id, cb, classes) => {
  if (document.querySelector(`#${id}`)) {
    return;
  }

  const s = document.createElement('script');
  if (typeof cb === 'function') {
    s.onload = cb;
  }

  if (classes) {
    s.className = classes;
  }

  s.src = src;
  s.setAttribute('id', id);
  s.setAttribute('crossorigin');
  document.head.appendChild(s);
};
