const clickHandler = (ID) => {
  document.querySelectorAll('.css-my3cjc')[0].click();
  window.scrollTo(0, 0);
  document.body.addEventListener('click', (e) => {
    //setTimeout(init, 1000);

    const { target } = e;
    const targetMatched = (targetToMatchSelector) =>
      target.matches(targetToMatchSelector) || target.closest(targetToMatchSelector);

    if (targetMatched(`.${ID}__calcbanner`)) {
      console.log('Interacts with calculator CTA');
    } else if (targetMatched('.css-1hd2xhi')) {
      console.log('Interacts with for enterprise CTA');
    } else if (targetMatched('.css-my3cjc')) {
      console.log('Interacts with for small business CTA ');
    } else if (targetMatched('.css-cwaqg0')) {
      console.log('Interacts with video');
    } else if (targetMatched('.css-r76ur8')) {
      console.log('Interacts with calculator CTA (secondary)');
    }
  });
};

export default clickHandler;
