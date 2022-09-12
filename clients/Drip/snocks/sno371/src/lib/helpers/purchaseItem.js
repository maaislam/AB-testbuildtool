const purchaseItem = async (color, size, variant) => {
            const data = `{"form_type":"product","utf8":"✓","option-0":"${color}",
                            "option-1":"${size}","quantity":"1","id":"${variant}"}`;

            const response = await fetch('https://snocks.com/cart/add.js', {
                    method: 'POST',
                    body: data,

                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

            const datas = await response.json();
            //console.log(datas);
            //return datas;

            const request = new XMLHttpRequest();
            request.open('GET', '/cart.js', true);

            request.onload = async () => {
                //console.log('get cart data')
                document.documentElement.dispatchEvent(new CustomEvent('cart:build', {
                    bubbles: true
                }));
                document.documentElement.dispatchEvent(new CustomEvent('product:added', {
                    bubbles: true,
                        detail: {
                        variant: '',
                        quantity: 1
                    }
                }));
            };

    request.send();
};

export default purchaseItem;
