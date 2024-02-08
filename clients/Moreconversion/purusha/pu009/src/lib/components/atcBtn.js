const atcBtn = (id) => {
  const htmlStr = `<button class="${id}__atc ProductForm__AddToCart Button Button--full Button--primary" data-action="add-to-cart"><span class="${id}__atc-btn-inner"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"><path d="M11.7296 16.4718V8.97182H13.0024V16.4718H11.7296ZM8.61599 13.3582V12.0855H16.116V13.3582H8.61599Z" fill="black"></path><circle cx="12.3667" cy="12.8542" r="11.5" stroke="black"></circle></svg><span>Add to Basket</span></span></button>`;
  return htmlStr;
};

export default atcBtn;
