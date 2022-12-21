const inputChangeHandler = (target) => {
  target.removeAttribute('not-empty');
  if (target.value === '') return;
  target.setAttribute('not-empty', true);
};

export default inputChangeHandler;
