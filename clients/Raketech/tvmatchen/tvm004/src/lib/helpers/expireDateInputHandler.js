/*eslint-disable no-param-reassign */
export const expireDateInputHandler = (element) => {
  element.addEventListener('input', (event) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = `${value.slice(0, 2)} / ${value.slice(2, 4)}`;
    }
    //eslint-disable-next-line no-param-reassign
    event.target.value = value;
  });

  element.addEventListener('keydown', (event) => {
    const { key } = event;
    const { value } = event.target;
    const cursorPosition = event.target.selectionStart;

    //Allow backspace and delete keys
    if (key === 'Backspace' || key === 'Delete') {
      if (key === 'Backspace' && cursorPosition === 5) {
        event.target.value = value.slice(0, cursorPosition - 3) + value.slice(cursorPosition);
        event.target.setSelectionRange(cursorPosition - 3, cursorPosition - 3);
        event.preventDefault();
      } else if (key === 'Delete' && cursorPosition === 4) {
        event.target.value = value.slice(0, cursorPosition) + value.slice(cursorPosition + 3);
        event.target.setSelectionRange(cursorPosition, cursorPosition);
        event.preventDefault();
      }
    }
  });

  element.addEventListener('blur', (event) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length === 4) {
      event.target.value = `${value.slice(0, 2)} / ${value.slice(2, 4)}`;
    }
  });
};
