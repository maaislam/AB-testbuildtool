const getNumber = () => {
  return window.location.href.split('order_id=')[1]
    ? window.location.href.split('order_id=')[1].split('&sessionid')[0].toUpperCase()
    : sessionStorage.getItem('orderID');
};

export default getNumber;
