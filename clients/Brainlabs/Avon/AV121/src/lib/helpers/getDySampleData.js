import { getCart } from './addToCart';

const getSampleData = async (
  testId,
  strategyId,
  apiRules,
  accounId = 9878042,
  uId = '4143312569379410383'
) => {
  //DY filters

  //DY strategy POST request payload
  const payload = {
    data: [
      {
        wId: strategyId,
        fId: null,
        maxProducts: 18,
        rules: apiRules,
        filtering: []
      }
    ],
    ctx: {
      type: 'HOMEPAGE'
    },
    uid: uId
  };
  const dyDataPresent = sessionStorage.getItem(`${testId}__DYdata`);
  //DY strategy POST request
  const response =
    !dyDataPresent &&
    (await fetch(`https://rcom-eu.dynamicyield.com/v3/recommend/${accounId}`, {
      method: 'POST',
      headers: {
        Accept: '*/*'
      },
      body: JSON.stringify(payload)
    }));

  //DY data
  const data = !dyDataPresent && (await response.json());

  //idea here is to call DY stratefy api once and store the data in session
  if (data) {
    sessionStorage.setItem(`${testId}__DYdata`, JSON.stringify(data));
  }

  const dyData = data || JSON.parse(sessionStorage.getItem(`${testId}__DYdata`));

  //gather all url handles from DY and using it call shopify data

  const urls = dyData.response[0].slots.map(({ item }) => {
    const { url } = item;
    //console.log(url);
    const fetchUrl = `${url.split('.com')[1].split('?')[0]}.js`;
    const variantId = url.split('variant=')[1];

    return {
      variantId,
      fetchUrl
    };
  });

  const cartData = await getCart();

  const { items: cartItems } = cartData;

  //console.log('cart data', cartItems);

  //console.log('urls & variant id', urls);

  const samplesNotInCart = urls.reduce((prev, curr) => {
    const isInCart = cartItems.some(
      (item) => item.id === curr.variantId * 1 || item.product_id === curr.variantId * 1
    );
    const delList = JSON.parse(sessionStorage.getItem(`${testId}__delList`)) || [];

    const isDeleted = delList.some((item) => curr.fetchUrl.includes(item));

    if (!isInCart && !isDeleted) {
      prev.push(curr);
    }
    return prev;
  }, []);
  //console.log('samplesNotInCart', samplesNotInCart);

  //get number of cart items in cart

  const totalSampleInCart = cartItems.reduce((prev, curr) => {
    let count;
    if (curr.product_title.includes('Sample')) {
      count = prev + curr.quantity;
    }

    return count || prev;
  }, 0);

  //console.log('totalSampleInCart', totalSampleInCart);
  //if number of samples in cart is a multiple of 3 show offer complete
  //else show 1, 2 or 3 sample

  if (totalSampleInCart % 3 === 0 && totalSampleInCart !== 0) {
    return []; //samplesNotInCart.slice(0, 3);
  }
  const numOfSamplesNedded = 3 - (totalSampleInCart % 3);
  return samplesNotInCart.slice(0, numOfSamplesNedded);
};

export default getSampleData;
