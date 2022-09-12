import { quickLinksConfigs } from '../data';
import dummySearch from './dummySearch';
import headline from './headline';
import popularSearchTerms from './popularSearchTerms';
import quickLinks from './quickLinks';
import tradeSlogan from './tradeSlogan';

const searchWrapper = (id, data) => {
  const { testBasedData, userData } = data;
  const { searchTerms, tradeCategory, traderIcon } = testBasedData;
  const { name, customerTradeType } = userData;
  const userHasDataPoint = customerTradeType !== '' && tradeCategory !== '';
  const headlineData = {
    name,
    tradeCategory,
    traderIcon,
    userHasDataPoint
  };

  const htmlStr = `
    <div class="${id}__searchWrapper">
        ${tradeSlogan(id, userHasDataPoint)}
        ${headline(id, headlineData)}
        ${dummySearch(id)}
        ${popularSearchTerms(id, searchTerms)}
        ${quickLinks(id, quickLinksConfigs)} 
    </div>
    `;

  return htmlStr;
};

export default searchWrapper;
