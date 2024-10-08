import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  const htmlStr = `
    <div class="${ID}__prodfeatures">
      <ul>
        <li><span><svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    id="tick">
                    <path
                          d="M223.9 329.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z" />
                </svg></span> <span>Plant-based materials</span></li>
        <li><span><svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    id="tick">
                    <path
                          d="M223.9 329.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z" />
                </svg></span> <span>Mindfully made in the USA</span></li>
        <li><span><svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                    id="tick">
                    <path
                          d="M223.9 329.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z" />
                </svg></span> <span>10% of profits donated to charity</span></li>
      </ul>
    </div>
  
  `;
  const priceBlock = document.querySelector('.ProductMeta__PriceList');
  priceBlock.parentElement.classList.add(`${ID}__priceblock-wrapper`);
  const metaTextElement = priceBlock.parentElement.querySelector('p');
  metaTextElement.insertAdjacentHTML('beforebegin', htmlStr);
  metaTextElement.style.display = 'none';
};
