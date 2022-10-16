import shared from '../shared/shared';
import { fireEvent } from '../../../../../../../globalUtil/trackings/services';

const { ID } = shared;

export const intersectionHandler = (entry) => {
  if (!entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
    entry.target.classList.add(`${ID}__seen`);
    fireEvent('Conditions met', shared);
  }
};

//export const deleteHandler = () => {};
