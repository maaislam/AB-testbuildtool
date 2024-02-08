import benefitItem from './benefitItem';

const benefitStr = (ID, benefitArray) => {
  const html = `
    <div class="${ID}__banner_list">
        <ul class="banner__points">
            ${benefitArray.map((item) => benefitItem(item)).join('\n')}
        </ul>
    </div>`;

  return html.trim();
};

export default benefitStr;
