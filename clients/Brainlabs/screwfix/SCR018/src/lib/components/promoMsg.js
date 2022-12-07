const promoMsg = (id) => {
  const htmlStr = `
    <div class="${id}__bosch-promo">
    <div class="${id}__promomsg">

        <div class="${id}__promomsg--copy">
            Spend over £150 inc VAT on selected Bosch 18V Power tools to recieve a free product from Bosch*
        </div>
        <div class="${id}__promomsg--image">
            <img src="https://ucds.ams3.digitaloceanspaces.com/Screwfix/Bosch-promo-offer.png"
                 alt="Bosch promo">
        </div>

    </div>
    <div class="${id}__terms">
        <div class="${id}__terms--title">
            <span>T&Cs apply</span>
            <span class="${id}__closebtn"></span>
        </div>
        <div class="${id}__terms--content">
            Promotion valid for purchases made between 1st September and the 31st December 2022. For free product
            choices,
            T&C’s and details on how to claim the free product from Bosch, see
            <a href="https://www.bosch-professional.com/gb/en/pro360/prodeals/toolbag/">https://www.bosch-professional.com/gb/en/pro360/prodeals/toolbag/</a> by 31/01/2023. Proof of purchase required.
            This is a manufacturer promotion.
        </div>
    </div>
</div>`;

  return htmlStr.trim();
};

export default promoMsg;
