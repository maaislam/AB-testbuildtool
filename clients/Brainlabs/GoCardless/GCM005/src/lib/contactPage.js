const contactPage = (id) => {
  const htmlStr = `
    <div class="${id}__container css-1gycr4w">
    <div class="${id}__column ${id}__column1">
        <div class="${id}__sticky-wrapper">
            <div class="${id}__row ${id}__contactsales">
                <h1>Contact Sales</h1>
                <p>We’re happy to answer your questions and show how we can work for your business. Get in touch to:</p>
                <ul>
                    <li>
                        <span class="bullet"><svg xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="17"
                                viewBox="0 0 21 17"
                                fill="none">
                                <path d="M6.52842 16.0054C6.35651 16.0056 6.18626 15.9723 6.02745 15.9074C5.86864 15.8425 5.7244 15.7474 5.60303 15.6274L0.367424 10.4673C0.128998 10.224 -0.00293274 9.89815 4.94797e-05 9.55991C0.0030317 9.22167 0.140688 8.89812 0.383368 8.65894C0.626049 8.41976 0.954338 8.28409 1.29753 8.28115C1.64072 8.27821 1.97135 8.40824 2.21821 8.64322L6.52842 12.8911L18.692 0.903105C18.8128 0.779895 18.9572 0.681619 19.1169 0.61401C19.2766 0.546401 19.4483 0.510814 19.6221 0.509326C19.7959 0.507838 19.9683 0.540477 20.1291 0.60534C20.29 0.670204 20.4361 0.765992 20.559 0.887115C20.6819 1.00824 20.7791 1.15227 20.8449 1.31081C20.9108 1.46935 20.9439 1.63922 20.9424 1.81051C20.9408 1.98179 20.9047 2.15107 20.8361 2.30846C20.7675 2.46585 20.6678 2.60819 20.5428 2.72719L7.45381 15.6274C7.33244 15.7474 7.1882 15.8425 7.02939 15.9074C6.87058 15.9723 6.70033 16.0056 6.52842 16.0054Z"
                                    fill="#EFECE7" />
                            </svg></span>
                        <span class="feature">Find the right package</span>
                    </li>
                    <li>
                        <span class="bullet"><svg xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="17"
                                viewBox="0 0 21 17"
                                fill="none">
                                <path d="M6.52842 16.0054C6.35651 16.0056 6.18626 15.9723 6.02745 15.9074C5.86864 15.8425 5.7244 15.7474 5.60303 15.6274L0.367424 10.4673C0.128998 10.224 -0.00293274 9.89815 4.94797e-05 9.55991C0.0030317 9.22167 0.140688 8.89812 0.383368 8.65894C0.626049 8.41976 0.954338 8.28409 1.29753 8.28115C1.64072 8.27821 1.97135 8.40824 2.21821 8.64322L6.52842 12.8911L18.692 0.903105C18.8128 0.779895 18.9572 0.681619 19.1169 0.61401C19.2766 0.546401 19.4483 0.510814 19.6221 0.509326C19.7959 0.507838 19.9683 0.540477 20.1291 0.60534C20.29 0.670204 20.4361 0.765992 20.559 0.887115C20.6819 1.00824 20.7791 1.15227 20.8449 1.31081C20.9108 1.46935 20.9439 1.63922 20.9424 1.81051C20.9408 1.98179 20.9047 2.15107 20.8361 2.30846C20.7675 2.46585 20.6678 2.60819 20.5428 2.72719L7.45381 15.6274C7.33244 15.7474 7.1882 15.8425 7.02939 15.9074C6.87058 15.9723 6.70033 16.0056 6.52842 16.0054Z"
                                    fill="#EFECE7" />
                            </svg></span>
                        <span class="feature">Calculate specific rates</span>
                    </li>
                    <li>
                        <span class="bullet"><svg xmlns="http://www.w3.org/2000/svg"
                                width="21"
                                height="17"
                                viewBox="0 0 21 17"
                                fill="none">
                                <path d="M6.52842 16.0054C6.35651 16.0056 6.18626 15.9723 6.02745 15.9074C5.86864 15.8425 5.7244 15.7474 5.60303 15.6274L0.367424 10.4673C0.128998 10.224 -0.00293274 9.89815 4.94797e-05 9.55991C0.0030317 9.22167 0.140688 8.89812 0.383368 8.65894C0.626049 8.41976 0.954338 8.28409 1.29753 8.28115C1.64072 8.27821 1.97135 8.40824 2.21821 8.64322L6.52842 12.8911L18.692 0.903105C18.8128 0.779895 18.9572 0.681619 19.1169 0.61401C19.2766 0.546401 19.4483 0.510814 19.6221 0.509326C19.7959 0.507838 19.9683 0.540477 20.1291 0.60534C20.29 0.670204 20.4361 0.765992 20.559 0.887115C20.6819 1.00824 20.7791 1.15227 20.8449 1.31081C20.9108 1.46935 20.9439 1.63922 20.9424 1.81051C20.9408 1.98179 20.9047 2.15107 20.8361 2.30846C20.7675 2.46585 20.6678 2.60819 20.5428 2.72719L7.45381 15.6274C7.33244 15.7474 7.1882 15.8425 7.02939 15.9074C6.87058 15.9723 6.70033 16.0056 6.52842 16.0054Z"
                                    fill="#EFECE7" />
                            </svg></span>
                        <span class="feature">Discuss how we align with your payment & growth strategy</span>
                    </li>
                </ul>
                <p>
                    For technical support or information regarding events, please use the
                    <a href="https://hub.gocardless.com/s/?language=en_GB">Customer Hub</a>.If you are an existing customer looking for support, please submit a <a href="https://support.gocardless.com/hc/en-gb/requests/new?ticket_form_id=134125">support ticket</a> support ticket or call <a href="tel: +442083389540">+44 20 8338 9540</a>.
                </p>
            </div>
       
            <div class="${id}__row ${id}__partners">
                <p>GoCardless helps thousands of businesses everyday</p>
                <div class="partners">
                    <span class="smart-pension" ><img src="https://ucds.ams3.digitaloceanspaces.com/GoCardless/GCM005/image-smartpension.png"
                            alt="smart pension"></span>
                    <span class="bulb" ><img src="https://ucds.ams3.digitaloceanspaces.com/GoCardless/GCM005/image-tripadvisor.png"
                            alt="bulb"></span>
                    <span class="epson"><img src="https://ucds.ams3.digitaloceanspaces.com/GoCardless/GCM005/image-guardian.png"
                            alt="epson"></span>
                    <span class="cuckoo"><img src="https://ucds.ams3.digitaloceanspaces.com/GoCardless/GCM005/image-cuckoo.png"
                            alt="cuckoo"></span>
                </div>
                <div class="review">
                    <div class="${id}__review-img"><img src="https://ucds.ams3.digitaloceanspaces.com/GoCardless/GCM005/image-docusign.png" alt="docusign" /></div>
                    <figure>
                        <blockquote>
                            <p>“ We want our global customers to have access to simple and easy payment methods when
                                purchasing DocuSign, and offering GoCardless as a key payment option helps us achieve this.
                                “</p>
                        </blockquote>
                        <figcaption><div>Beverly Tu</div> <cite>Director of eCommerce Growth, DocuSign</cite></figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    <div class="${id}__column ${id}__column2">
        <div data-${id}id="contactSalesHostedForm"
             class="css-5ym6xy"><iframe title="iframe"
                    data-${id}id="pardotHostedForm"
                    src="https://forms.gocardless.com/l/305971/2020-07-16/n8y3r"
                    sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin"
                    id="iFrameResizer0"
                    scrolling="no"
                    style="width: 100%; border: none; overflow: hidden; height: 1331px;"></iframe></div>
    </div>
</div>
    `;

  return htmlStr.trim();
};

export default contactPage;
