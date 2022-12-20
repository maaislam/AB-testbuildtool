const nameChangeHandler = (target) => {
  target.removeAttribute('not-empty');
  if (target.value === '') return;
  target.setAttribute('not-empty', true);
};

export default nameChangeHandler;
