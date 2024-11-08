import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const addJsToPage = (src, id, cb, classes) => {
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
  document.head.appendChild(s);
};

addJsToPage(
  'https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js'
);
pollerLite(['body', () => typeof window.tsParticles === 'object'], activate);
