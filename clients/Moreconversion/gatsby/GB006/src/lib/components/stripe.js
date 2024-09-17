const stripe = (id) => {
    const htmlStr = `<div class='${id}__stripedContainer'>
        <label class="single-option-radio__label">
            Striped
        </label>
        <div class="${id}__stripeButtons">
            <button type='button' class="${id}__stripeButton" data-name='stripe'>Striped</button>
            <button type='button' class="${id}__nonStripeButton" data-name='non-stripe'>Non-striped</button>
        </div>
    </div>`;
    return htmlStr;
};
export default stripe;
