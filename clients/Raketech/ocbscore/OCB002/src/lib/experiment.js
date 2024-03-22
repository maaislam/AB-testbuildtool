import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const predictElement = () => {
  return `
    <a href="http://www.ocbscores.com/cricket-predictor" class="${ID}__predict">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
      <path d="M20.718 0.140015H13.635V3.74001H9.852L17.211 12.322L24.5 3.67001H20.718V0.140015ZM0.5 14.26H4.282V17.86H11.365V14.26H15.148L7.858 5.67701L0.5 14.26Z" fill="#F49C24"></path>
      </svg>
      <p>Predict</p>
      <span>New</span>
    </a>
  `;
};

export default () => {
  setup();
  console.log(ID);

  const targetElement = document.querySelector('.sticky');
  if (document.querySelector(`.${ID}__predict`)) {
    document.querySelector(`.${ID}__predict`).remove();
  }

  targetElement.insertAdjacentHTML('beforeend', predictElement());
};
