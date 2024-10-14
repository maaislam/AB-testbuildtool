const customerGroupObj = window.dataLayer.find((item) => {
    if (item.customerGroup) {
        return true;
    }
    return false;
});

const isLogin = () => {
    if (customerGroupObj.customerGroup === 'NOT LOGGED IN') {
        return false;
    }
    return true;
};

export default isLogin;
