const fakeIframe = (id) => {
  const htmlStr = `<iframe class="${id}__fake-iframe" src="https://www.123drogisterij.nl/checkout/cart/" height="200" width="300" title="Iframe Example"></iframe>`;

  return htmlStr.trim();
};

export default fakeIframe;
