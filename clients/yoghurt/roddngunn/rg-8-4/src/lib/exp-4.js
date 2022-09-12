console.log('test bucketed 4');
const newid = 'rg-8-4';
var waitForEl = function (selector, callback) {
    let count = 0;
    if (document.querySelector(selector) != null) {
      callback();
    } else if (count < 100) {
      setTimeout(() => {
        waitForEl(selector, callback, ++count);
      }, 100);
    }
  };
waitForEl('#cart-table > tbody > tr:nth-child(1) > td.item-details > div.product-list-item > div.item-name-container > div > a', () => {
    document.querySelector('body').classList.add(`${newid}`);

  try {
    const fetchDiscount = async (url) => {
      const response = await fetch(url);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      //const discount = doc.querySelector('#product-content > div.promotion .callout-message').innerText.trim();
      const discount = doc.querySelector('#product-content > div.promotion .callout-message span') ? doc.querySelector('#product-content > div.promotion .callout-message span').innerText.trim() : null;
      return discount;
    };

	let cartcount;

	waitForEl('.header-action span.quantity', () => {
		cartcount = parseInt(document.querySelector('.header-action span.quantity').innerText);

		checkforCartItems();
	});

	function checkforCartItems() {
		let total = 0;

		const inputList = document.querySelectorAll('.item-quantity input');

		for (let i = 0; i < inputList.length; i++) {
		    total += parseInt(inputList[i].value);
		}

		if (total == cartcount) {
			addDiscount();
		} else {
			setTimeout(() => {
				checkforCartItems();
			}, 200);
		}
	}

	function addDiscount() {
		const cartProd = Array.from(document.querySelectorAll('#cart-table > tbody > tr > td.item-details > div.product-list-item > div.item-name-container > div.name > a'));

            const getProductUrl = () => {
            	return cartProd.map((item) => item.href);
            };

            console.log(cartProd);
            console.log(getProductUrl());

            getProductUrl().forEach(async (url, index) => {
        		const discountBanner = await fetchDiscount(url);
            	console.log(url);

	            if (discountBanner) {
		            const productDiv = document.querySelector(`#cart-table > tbody > tr:nth-child(${index + 1}) > td.item-details > div.product-list-item > div.item-name-container`);
		            productDiv.insertAdjacentHTML('beforeend', `<div class="discount-banner"><a href="${url}">${discountBanner}</a></div>`);
	            }
            });
	}
  } catch (error) {
    console.error(error);
  }
});
