import shared from '../shared/shared';
import { fireEvent } from '../../../../../../../globalUtil/trackings/services';

const { ID, VARIATION } = shared;

export const intersectionHandler = (entry) => {
  if (!entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
    entry.target.classList.add(`${ID}__seen`);
    fireEvent('Conditions met', shared);
    window.DY.API('event', {
      name: 'Experimentation',
      properties: {
        type: `${ID}-${VARIATION}`,
        value: 'Conditions met'
      }
    });
  }
};
