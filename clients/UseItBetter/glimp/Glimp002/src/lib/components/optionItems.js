import optionItem from './optionItem';

const optionItems = (id, dataItems) => {
  const htmlStr = `
    <div class="${id}__forms-inner">
        <h2>Are you looking for other savings?</h2>
        <p>Select utilities you might be interested in</p>
        <ul class="${id}__select-box-otr select-box-otr">
            ${dataItems.map((dataItem) => optionItem(id, dataItem)).join('\n')}
        </ul>
        <div class="${id}__continue btn">Continue</div>
    </div>`;

  return htmlStr.trim();
};

export default optionItems;
