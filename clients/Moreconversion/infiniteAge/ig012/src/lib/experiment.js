import setup from './services/setup';
//import shared from './shared/shared';

//const { ID, VARIATION } = shared;

export default () => {
  setup();

  const { pathname } = window.location;

  if (pathname.includes('lp2') && !pathname.includes('special')) {
    document.addEventListener('click', (e) => {
      const { target } = e;

      if (target.closest('a.pulse')) {
        e.preventDefault();

        window.location.href = '/pages/lp2-special';
      }
    });
  }
};
