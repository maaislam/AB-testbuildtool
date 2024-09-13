const genericQuestionsWrapper = (id, title) => {
  const html = `
        <div class="rte rte--nomargin ${id}__container">
             <h1>Frequently Asked Questions about <span>${title}</span></h1>
            <h2><span class="fontstyle2"><strong>When will I&nbsp;receive my order?</strong><br></span></h2>
            <p><span class="fontstyle0">Due to demand of the holidays it may take 2-3 weeks&nbsp;to print and package your
                    order,
                    after which it’s shipped out. The shipping time depending&nbsp;on your location, is estimated as
                    follows:<br></span><span class="fontstyle3">● </span><span class="fontstyle0">USA: 3–6 business
                    days</span><span class="fontstyle0"><br></span><span class="fontstyle3">● </span><span
                    class="fontstyle0">International: 10–20
                    business days<br><br></span></p>
            <h2><strong><span class="fontstyle2"></span></strong></h2>
            <div class="collapse-heading pf-bg-white">
                <h2><strong><span class="fontstyle0"></span></strong></h2>
                <h2><strong><span class="fontstyle0">Will I be charged customs for my order?</span></strong></h2>
                <p><span class="fontstyle2">An additional customs and tax fee can occur on international orders. This fee is not
                        in
                        our control and is assessed by your local customs office. Customs policies vary widely for every country
                        so
                        please check with your local customs office directly to see if they apply duties and taxes to your
                        purchases.</span></p>
                <h2>
                    <span class="fontstyle2"><br></span><strong><span class="fontstyle0">My order should be here by now, but I
                            still
                            don't have it. What should I do?</span> </strong>
                </h2>
                <p><span class="fontstyle2">Before getting in touch with us, please help us out by doing the
                        following:<br></span><span class="fontstyle3">● </span><span class="fontstyle2">Check your shipping
                        confirmation email for any mistakes in the delivery address<br></span><span class="fontstyle3">●
                    </span><span class="fontstyle2">Ask your local post office if they have your package<br></span><span
                        class="fontstyle3">● </span><span class="fontstyle2">Stop by your neighbors in case the courier left
                        the
                        package with them.</span></p>
                <p><span class="fontstyle2">If the shipping address was correct, and the package wasn't left at the post office
                        or
                        at your neighbor’s, get in touch with us with your order number by emailing
                        hello@golfcourseprint.com</span><span class="fontstyle0"><br></span><span class="fontstyle0"></span></p>
                <h2>
                    <span class="fontstyle0"><strong>How are your products made?</strong><br></span><span
                        class="fontstyle2"></span>
                </h2>
                <p><span class="fontstyle2">Every order is made to order. We have locations worldwide, so depending on where you
                        are, your orders are created and shipped from the facility that can do it most efficiently.</span></p>
                <h2><strong><span class="fontstyle0">I received a wrong/damaged product, what should I do?</span> </strong></h2>
                <p><span class="fontstyle0"><br></span><span class="fontstyle2">We’re so sorry if the product you ordered
                        arrived
                        damaged. To help us resolve this for you quickly, please email us at
                        hello@golfcourseprint.com&nbsp;within
                        a&nbsp;week's time with photos of the damaged product, your order number, and any other details you may
                        have
                        about your order. We’ll get back to you with a resolution as soon as possible.</span></p>
                <h2><strong><span class="fontstyle0">What’s your return policy?</span></strong></h2>
                <p><span class="fontstyle2">We don’t offer returns and exchanges, but if there’s something wrong with your
                        order,
                        please let us know by contacting us at&nbsp;hello@golfcourseprint.com<br></span><span
                        class="fontstyle0"></span></p>
                <h2><span class="fontstyle0"><strong>Do you offer refunds?</strong></span></h2>
                <p><span class="fontstyle2">Refunds are only offered to customers&nbsp;who receive the wrong items or damaged
                        items.
                        If any of these apply, please contact us at <span>hello@golfcourseprint.com</span>&nbsp;with photos of
                        wrong/damaged items and we’ll sort that out for you.<br></span><span class="fontstyle0"></span></p>
                <h2>
                    <span class="fontstyle0"><strong>Can I exchange an item for a different size/color?</strong><br></span><span
                        class="fontstyle2"></span>
                </h2>
                <p><span class="fontstyle2">At this time, we don't offer exchanges. If you’re unsure which size would fit
                        better,
                        check out our sizing charts—we have one for every item listed on our store, in the product description
                        section. Though rare, it's possible that an item you ordered was mislabeled. If that’s the case, please
                        let
                        us know at <span>hello@golfcourseprint.com</span>&nbsp;within a week&nbsp;of receiving your order.
                        Include
                        your order number and photos of the mislabeled item, and we will make it right.&nbsp;</span></p>
            </div>
            <div aria-expanded="true"
                class="collapse-body collapse in"
                id="fulfillment-times-tab">
                <div id="">
                    <div data-vuex-stores="[]"
                        data-vue-components="[&quot;dynamic-table&quot;]"
                        data-vue-root="i1EJuvTb9cSdgTgI">
                        <div class="container pf-bg-white pf-px-24 pf-pb-32 pf-pt-0">
                            <div class="row">
                                <div class="col-12 pf-m-auto">
                                    <div class="pf-d-md-flex pf-mt-16">
                                        <div class="pf-d-flex pf-mr-16"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default genericQuestionsWrapper;
