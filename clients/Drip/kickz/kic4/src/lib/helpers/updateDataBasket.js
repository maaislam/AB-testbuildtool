const updateDataBasket = (emailAddress) => {
    const objBasket = JSON.parse(
        document.querySelector('#checkout-main').getAttribute('data-basket')
    );
    objBasket.orderEmail = emailAddress;
    const updatedBasket = JSON.stringify(objBasket);
    document.querySelector('#checkout-main').setAttribute('data-basket', updatedBasket);
};

export default updateDataBasket;