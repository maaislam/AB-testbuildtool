const firstHeadingElm = () => {
  const getPosition = (el) => {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  };
  const main = document.querySelector('main');
  const heading2 = main.querySelectorAll('h2')[0];
  const heading3 = main.querySelectorAll('h3')[0];
  const heading4 = main.querySelectorAll('h4')[0];
  const headings = [heading2, heading3, heading4];
  const yPos = headings.map((item) => (item ? getPosition(item) : document.body.offsetHeight));
  const paragraphs = main
    .querySelector('[data-module-name="articleContent"] .css-h94nr3')
    .getElementsByTagName('p');

  const min = Math.min(...yPos);
  const firstHeading =
    min === document.body.offsetHeight ? paragraphs[0] : headings[yPos.indexOf(min)];
  return firstHeading;
};

export default firstHeadingElm;
