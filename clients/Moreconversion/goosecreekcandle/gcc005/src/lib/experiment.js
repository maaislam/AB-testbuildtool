import addScentBadge from './helpers/addScentBadge';
import { onUrlChange } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();

  const paramKey = 'filter.v.scent';

  const getSearchParamValue = (paramName) => {
    const queryParams = new URLSearchParams(window.location.search);
    const paramValue = queryParams.get(paramName);
    return paramValue;
  };

  onUrlChange(() => {
    const { search } = window.location;
    if (search.includes(paramKey)) {
      const searchParamValue = getSearchParamValue(paramKey);
      addScentBadge(ID, searchParamValue);
    }
  });
};
