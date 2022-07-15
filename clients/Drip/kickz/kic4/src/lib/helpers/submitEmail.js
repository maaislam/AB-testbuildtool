// const submitEmail = async(email) => {
const submitEmail = async(email) => {
    const csrfToken = document.querySelector(`#csrf-token-element`).getAttribute('data-token-value');
    const bodyObj = JSON.stringify(
        `dwfrm_login_guestEmail=${encodeURIComponent(email)}&csrf_token=${csrfToken}`
    ).replace(/['"]+/g, '');

    const response = await fetch(
        `/on/demandware.store/Sites-Kickz-DE-AT-INT-Site/de_DE/Checkout-Guest?ajax=true`, {
            method: 'POST',
            body: bodyObj,

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }
    );

    const data = await response.json();
    // console.log(data);
    return data;
};

export default submitEmail;