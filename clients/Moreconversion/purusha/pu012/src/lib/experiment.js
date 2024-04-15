import setup from './services/setup';
//import shared from './shared/shared';

//const { ID, VARIATION } = shared;

const changeText = (selector, text) => {
  document.querySelector(selector).innerText = text;
};

export default () => {
  setup();

  const data = {
    '.SectionHeader__SubHeading.Heading.u-h6': 'GET IN ON NEW DROPS AND',
    '.SectionHeader__SubHeading.Heading.u-h6 + .u-h1': 'ENTER TO WIN $200!',
    '.SectionHeader__SubHeading.Heading.u-h6 + .u-h1 + .SectionHeader__Description p':
      "Register to be among the first to access new releases, explore Hayley's insights on sustainability, and seize the opportunity to win a $200 gift card every month!"
  };

  Object.keys(data).forEach((key) => {
    changeText(key, data[key]);
  });
};
