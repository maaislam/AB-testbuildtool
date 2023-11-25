import setup from './services/setup';

export default () => {
  setup();
  const attachPoints = document.querySelectorAll('#iconsTestimonial');
  attachPoints.forEach((attachPoint) => {
    const controlTestimonialIcons = attachPoint.querySelector('div:first-child');
    const controlImage = controlTestimonialIcons.querySelector('img');
    console.log('🚀 ~ file: experiment.js:8 ~ controlImage:', controlImage);

    controlImage.setAttribute(
      'data-src',
      'https://more-conversions.s3.amazonaws.com/feature-usps.svg'
    );
    controlImage.setAttribute('src', 'https://more-conversions.s3.amazonaws.com/feature-usps.svg');
  });
};
