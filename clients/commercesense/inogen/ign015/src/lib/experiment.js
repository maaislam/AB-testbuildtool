/*eslint-disable no-use-before-define */
/*eslint-disable max-len */
/*eslint-disable default-case */
/*eslint-disable no-shadow */
/*eslint-disable no-inner-declarations */
/*eslint-disable eqeqeq */
/*eslint-disable no-tabs */
/*eslint-disable no-undef */

//useruploads.vwo.io/useruploads/1054833/images/ae76ff58f720f0abb38498138cea31be_rove4small.png

//useruploads.vwo.io/useruploads/1054833/images/b5759fd5344cb01ad3755669e63250d5_rove6small.png

//useruploads.vwo.io/useruploads/1054833/images/30293762632ec0f46c17b102cbea664f_voxi5small.png

//useruploads.vwo.io/useruploads/1054833/images/2a1b0349985786fd48bc6b3334790832_rove6.png

//useruploads.vwo.io/useruploads/1054833/images/10ae617d586e413450355efc267f62e3_talktous.png

//useruploads.vwo.io/useruploads/1054833/images/eed105f74e104fda0b604d1cbbe3e3d4_inogenprovides10.jpg

//useruploads.vwo.io/useruploads/1054833/images/eaa823b0eaa6c4478a7e4aa3e95a5cb0_findinogen20.jpg

import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const heroSection = `

    <section class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">
          Find the oxygen concentrator <br />that fits your lifestyle.
        </h1>
        <a class="hero__cta" href="#free-form-guide">Free info guide</a>
      </div>
    </section>


`;

const productCardsSection = `
    <section class="sec183"
         data-sec="183">
    <div class="container">
        <div class="sec183__grid">
            <!-- Card 1 -->
            <article class="sec183__card"
                     data-product="inogen-rove-6">
                <a href="/product/rove6-system/"
                   class="sec183__media">
                    <img class="sec183__img"
                         src="https://useruploads.vwo.io/useruploads/1054833/images/304a6c2071a6d9664a1431fffd3c465b_property1rove6.png"
                         data-alt-src="https://useruploads.vwo.io/useruploads/1054833/images/79d970915e8820689f56859b1b4aa2ce_property1rove6hover.png"
                         alt="Inogen Rove 6">
                </a>
                <div class="sec183__body">
                    <header class="sec183__header">
                        <h3 class="sec183__title">Inogen Rove 6™</h3>
                        <p class="sec183__sub">Powerfully Portable</p>
                    </header>
                    <div class="sec183__actions">
                        <a class="sec183__link"
                           href="/product/rove6-system/">MORE DETAILS</a>
                        <a href="/cart/?add-to-cart=87987774986" class="sec183__cta"
                                type="button">Add to cart</a>
                    </div>
                </div>
            </article>

            <!-- Card 2 -->
            <article class="sec183__card"
                     data-product="inogen-rove-4">
                <a href="/product/rove4-system/"
                   class="sec183__media">
                    <img class="sec183__img"
                         src="https://useruploads.vwo.io/useruploads/1054833/images/c636d1d8e0debcc765e4cb459e509f31_property1rove4.png"
                         data-alt-src="https://useruploads.vwo.io/useruploads/1054833/images/57274af50b1628f7bb397be0547acbea_property1rove4hover.png"
                         alt="Inogen Rove 4">
                </a>
                <div class="sec183__body">
                    <header class="sec183__header">
                        <h3 class="sec183__title">Inogen Rove 4™</h3>
                        <p class="sec183__sub">Lightweight & Portable</p>
                    </header>
                    <div class="sec183__actions">
                        <a class="sec183__link"
                           href="/product/rove4-system/">MORE DETAILS</a>
                        <a href="/cart/?add-to-cart=87987788688" class="sec183__cta"
                                type="button">Add to cart</a>
                    </div>
                </div>
            </article>
            <!-- Card 3 -->
            <article class="sec183__card"
                     data-product="inogen-at-home">
                <a href="/product/inogen-at-home-oxygen-concentrator/"
                   class="sec183__media">
                    <img class="sec183__img"
                         data-alt-src="https://useruploads.vwo.io/useruploads/1054833/images/44717dabd002272191902891f3c2b5c6_property1variant5.png"
                         src="https://useruploads.vwo.io/useruploads/1054833/images/effd2ef3092b3a334e75c3c015487b0c_property1variant6.png"
                         alt="Inogen At Home">
                </a>
                <div class="sec183__body">
                    <header class="sec183__header">
                        <h3 class="sec183__title">Inogen At Home</h3>
                        <p class="sec183__sub">Travel-friendly, lightweight<br>home oxygen concentrator</p>
                    </header>
                    <div class="sec183__actions">
                        <a class="sec183__link"
                           href="/product/inogen-at-home-oxygen-concentrator/">MORE DETAILS</a>
                        <a href="/cart/?add-to-cart=87987700006" class="sec183__cta"
                                type="button">Add to cart</a>
                    </div>
                </div>
            </article>
            <!-- Card 4 -->
            <article class="sec183__card"
                     data-product="inogen-voxi-5">
                <a href="/product/voxi-5/"
                   class="sec183__media">
                    <img class="sec183__img"
                         src="https://useruploads.vwo.io/useruploads/1054833/images/155343c0110817b87f93901cba26d56c_property1variant7.png"
                         data-alt-src="https://useruploads.vwo.io/useruploads/1054833/images/48a3b006532eb29571a4a1dc6f9b7569_property1variant8.png"
                         alt="Inogen Voxi 5">
                </a>
                <div class="sec183__body">
                    <header class="sec183__header">
                        <h3 class="sec183__title">Inogen Voxi™ 5</h3>
                        <p class="sec183__sub">Compact and transportable<br>home oxygen concentrator</p>
                    </header>
                    <div class="sec183__actions">
                        <a class="sec183__link"
                           href="/product/voxi-5/">MORE DETAILS</a>
                        <a href="/cart/?add-to-cart=87987797489" class="sec183__cta"
                                type="button">Add to cart</a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>
<section class="compTable"
         data-sec="34-86">
    <div class="comparison-scroller">
    <div class="comparison-table">

        <!-- COLUMN 1: feature labels (Frame 210 first, then 207, 208 content reflected by rows) -->
        <div class="column features">
            <div class="cell cell--blank"></div> <!-- top-left spacer -->
            <div class="cell cell--feature">Weight</div>
            <div class="cell cell--feature">Flow Type</div>
            <div class="cell cell--feature">Battery Life</div>
            <div class="cell cell--feature">Ideal for</div>
            <div class="cell cell--feature">Price</div>
            <div class="cell cell--feature cell--last"></div> <!-- CTA row label space -->
        </div>

        <!-- COLUMN 2: Portable (Frame 207) -->
        <div class="column portable">
            <div class="group-header portable-header">Portable</div>

            <div class="card-wrapper">
                <div class="card no-border-right">
                    <h3 class="card__title">Inogen Rove 6™</h3>
                    <div class="cell">
                        4.8lb<br><small>with standard battery</small>
                    </div>
                    <div class="cell">
                        Pulse flow
                    </div>
                    <div class="cell">
                        Up to 12 hours 45 minutes<br>
                        <small>setting 1 with extended battery</small>
                    </div>
                    <div class="cell">
                        Everyday mobility and extended use
                    </div>
                    <div class="cell">
                        From $2,995
                    </div>
                    <div class="cell cell--cta">
                        <a href="/cart/?add-to-cart=87987774986" class="btn">Add to cart</a>
                    </div>
                </div>

                <div class="card no-border-left">
                    <h3 class="card__title">Inogen Rove 4™</h3>
                    <div class="cell">
                        2.9lb<br><small>with standard battery</small>
                    </div>
                    <div class="cell">
                        Pulse flow
                    </div>
                    <div class="cell">
                        Up to 5 Hours<br>
                        <small>setting 1 with standard battery</small>
                    </div>
                    <div class="cell">
                        Lightweight portability and travel
                    </div>
                    <div class="cell">
                        From $2,995
                    </div>
                    <div class="cell cell--cta">
                        <a href="cart/?add-to-cart=87987788688" class="btn">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- COLUMN 3: Stationary (Frame 208) -->
        <div class="column stationary">
            <div class="group-header stationary-header">Stationary</div>

            <div class="card-wrapper">

                <div class="card no-border-right">
                    <h3 class="card__title">Inogen At Home</h3>
                    <div class="cell">
                        18lb<br><small>stationary</small>
                    </div>
                    <div class="cell">
                        Continuous flow<br><small>Up to 5L per minute</small>
                    </div>
                    <div class="cell">-</div>
                    <div class="cell">
                        Travel-friendly size and weight<br>stationary oxygen therapy.
                    </div>
                    <div class="cell">
                        From $1,795
                    </div>
                    <div class="cell cell--cta">
                        <a href="/cart/?add-to-cart=87987700006" class="btn">Add to cart</a>
                    </div>
                </div>

                <div class="card no-border-left">
                    <h3 class="card__title">Inogen Voxi™ 5</h3>
                    <div class="cell">
                        4.2lbs
                    </div>
                    <div class="cell">
                        Continuous flow<br><small>Up to 5L per minute</small>
                    </div>
                    <div class="cell">-</div>
                    <div class="cell">
                        Compact and transportable home oxygen concentrator
                    </div>
                    <div class="cell">
                        From $795
                    </div>
                    <div class="cell cell--cta">
                        <a href="/cart/?add-to-cart=87987797489" class="btn">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</section>
<div class="homepage-section-blue padded">
    <div id="free-form-guide" class="homepage-section-blue-content">
        <div class="homepage-section-blue-left">
            <picture>
                <source data-srcset="https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide.png.webp 540w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-218x300.png.webp 218w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-45x62.png.webp 45w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-182x250.png.webp 182w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-137x188.png.webp 137w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-107x147.png.webp 107w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-121x167.png.webp 121w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-198x273.png.webp 198w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-166x228.png.webp 166w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-140x192.png.webp 140w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-145x200.png.webp 145w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-400x550.png.webp 400w"
                        data-sizes="(max-width: 540px) 100vw, 540px"
                        type="image/webp"
                        sizes="(max-width: 540px) 100vw, 540px"
                        srcset="https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide.png.webp 540w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-218x300.png.webp 218w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-45x62.png.webp 45w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-182x250.png.webp 182w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-137x188.png.webp 137w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-107x147.png.webp 107w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-121x167.png.webp 121w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-198x273.png.webp 198w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-166x228.png.webp 166w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-140x192.png.webp 140w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-145x200.png.webp 145w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-400x550.png.webp 400w">
                <img width="540"
                     height="743"
                     src="https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide.png"
                     class="attachment-full size-full webpexpress-processed perfmatters-lazy entered pmloaded"
                     alt=""
                     style="box-shadow: 10px 10px 18px 11px #00000044;"
                     decoding="async"
                     data-src="https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide.png"
                     data-srcset="https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide.png 540w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-218x300.png 218w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-45x62.png 45w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-182x250.png 182w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-137x188.png 137w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-107x147.png 107w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-121x167.png 121w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-198x273.png 198w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-166x228.png 166w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-140x192.png 140w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-145x200.png 145w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-400x550.png 400w"
                     data-sizes="(max-width: 540px) 100vw, 540px"
                     data-ll-status="loaded"
                     sizes="(max-width: 540px) 100vw, 540px"
                     srcset="https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide.png 540w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-218x300.png 218w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-45x62.png 45w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-182x250.png 182w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-137x188.png 137w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-107x147.png 107w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-121x167.png 121w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-198x273.png 198w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-166x228.png 166w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-140x192.png 140w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-145x200.png 145w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-400x550.png 400w"><noscript><img
                         width="540"
                         height="743"
                         src="https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide.png"
                         class="attachment-full size-full webpexpress-processed"
                         alt=""
                         style="box-shadow: 10px 10px 18px 11px #00000044;"
                         decoding="async"
                         srcset="https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide.png 540w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-218x300.png 218w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-45x62.png 45w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-182x250.png 182w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-137x188.png 137w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-107x147.png 107w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-121x167.png 121w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-198x273.png 198w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-166x228.png 166w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-140x192.png 140w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-145x200.png 145w, https://cdn.inogen.com/wp-content/uploads/2025/06/homepage_doctor_discussion_guide-400x550.png 400w"
                         sizes="(max-width: 540px) 100vw, 540px"></noscript>
            </picture>
        </div>
        <div class="homepage-section-blue-right homepage-top-form">
            <a name="free-info-guide"></a>
            <form class="lead_form trustedform"
                  method="POST"
                  action="/"
                  data-page="1"
                  novalidate=""
                  data-np-intersection-state="visible"
                  data-np-autofill-form-type="identity"
                  data-np-checked="1"
                  data-np-watching="1">
                <h2 class="white">Download your <span>Free</span> Doctor Guide</h2>
                <p>Learn how you can use an Inogen POC for the oxygen therapy your doctor prescribed.</p>
                <input type="hidden"
                       id="_lead_form_nonce"
                       name="_lead_form_nonce"
                       value="7926a7b5f7"><input type="hidden"
                       name="_wp_http_referer"
                       value="/"> <input type="hidden"
                       name="form_location"
                       value="homepage (top)">

                <fieldset class="lead_form_page lead_form_page1">

                    <div class="form_field_container">
                        <label class="form_label"
                               for="full_name_top">Name</label>
                        <input type="text"
                               class="form_input_text"
                               id="full_name_top"
                               name="full_name"
                               placeholder="What should we call you?"
                               maxlength="50"
                               required=""
                               data-np-intersection-state="observed"
                               data-np-autofill-field-type="fullName"
                               data-np-uid="860d27aa-e08f-449b-8ff7-da8099113f6c">
                        <nordpass-icon data-np-uid="860d27aa-e08f-449b-8ff7-da8099113f6c"
                                       tabindex="-1"
                                       style="all: initial !important;"><template shadowrootmode="closed">
                                <link rel="stylesheet"
                                      href="chrome-extension://eiaeiblijfjekdanodkjadfinkhbfgcd/css/content.css"
                                      type="text/css"><icon-container
                                                style="position: initial; --ref-border-radius-xxs: 6px; --ref-border-radius-xs: 8px; --ref-border-radius-sm: 10px; --ref-border-radius-md: 12px; --ref-border-radius-lg: 16px; --ref-border-radius-xl: 20px; --ref-border-radius-xxl: 24px; --ref-border-radius-full: 9999px; --ref-color-grey-0: #FFFFFF; --ref-color-grey-5: #F7F7F8; --ref-color-grey-10: #F2F2F3; --ref-color-grey-15: #EAEAEC; --ref-color-grey-20: #E0E0E1; --ref-color-grey-30: #CBCBCD; --ref-color-grey-40: #B6B6B9; --ref-color-grey-50: #A1A1A5; --ref-color-grey-60: #8A8A8E; --ref-color-grey-65: #727279; --ref-color-grey-70: #59595F; --ref-color-grey-75: #4A4A4F; --ref-color-grey-80: #39393C; --ref-color-grey-85: #28282A; --ref-color-grey-90: #252527; --ref-color-grey-92: #1B1B1D; --ref-color-grey-95: #111112; --ref-color-grey-100: #000000; --ref-color-teal-2: #E6FAFA; --ref-color-teal-5: #D7F5F5; --ref-color-teal-10: #EEFFFB; --ref-color-teal-15: #ACE5E5; --ref-color-teal-20: #C6FFF3; --ref-color-teal-30: #8EFFEA; --ref-color-teal-40: #4DFBDE; --ref-color-teal-50: #19E8CC; --ref-color-teal-60: #00CFB6; --ref-color-teal-70: #00AD99; --ref-color-teal-80: #028378; --ref-color-teal-85: #085C5B; --ref-color-teal-90: #086760; --ref-color-teal-95: #0D3D3C; --ref-color-teal-100: #0C554F; --ref-color-green-2: #ECF8F3; --ref-color-green-5: #DDF2E9; --ref-color-green-10: #BFEED4; --ref-color-green-15: #90E4B2; --ref-color-green-20: #4FD88B; --ref-color-green-30: #19C879; --ref-color-green-40: #00BD6B; --ref-color-green-50: #00AB61; --ref-color-green-60: #019856; --ref-color-green-70: #00844B; --ref-color-green-80: #036D3F; --ref-color-green-85: #035E37; --ref-color-green-90: #024B2C; --ref-color-green-95: #073D25; --ref-color-green-100: #0D3322; --ref-color-purpleblue: #5062F6; --ref-color-purple-2: #F6F5FF; --ref-color-purple-5: #ECEBFF; --ref-color-purple-10: #DEDBFF; --ref-color-purple-15: #CBC7FF; --ref-color-purple-20: #B4ADFF; --ref-color-purple-30: #988fff; --ref-color-purple-40: #8475F4; --ref-color-purple-50: #705FF4; --ref-color-purple-60: #6552F4; --ref-color-purple-70: #5B3CE5; --ref-color-purple-80: #4C33C7; --ref-color-purple-85: #422DAE; --ref-color-purple-90: #382791; --ref-color-purple-95: #2E2173; --ref-color-purple-100: #2A205C; --ref-color-pink-2: #FEF0F7; --ref-color-pink-5: #FEE2F0; --ref-color-pink-10: #FECEE6; --ref-color-pink-15: #FFB5DA; --ref-color-pink-20: #FC97C9; --ref-color-pink-30: #FA70B5; --ref-color-pink-40: #F452A3; --ref-color-pink-50: #F03391; --ref-color-pink-60: #E3167D; --ref-color-pink-70: #CC1571; --ref-color-pink-80: #B01161; --ref-color-pink-85: #9B0D54; --ref-color-pink-90: #7A1648; --ref-color-pink-95: #63163D; --ref-color-pink-100: #4D1C35; --ref-color-magenta-2: #FCF2FD; --ref-color-magenta-5: #F9E4FB; --ref-color-magenta-10: #F6CFF9; --ref-color-magenta-15: #EAB6F0; --ref-color-magenta-20: #E19AE9; --ref-color-magenta-30: #D778E2; --ref-color-magenta-40: #CF5FDD; --ref-color-magenta-50: #C742D8; --ref-color-magenta-60: #B92ACB; --ref-color-magenta-70: #A323B3; --ref-color-magenta-80: #8D1C9C; --ref-color-magenta-85: #7D178A; --ref-color-magenta-90: #681273; --ref-color-magenta-95: #54175C; --ref-color-magenta-100: #431B47; --ref-color-red-2: #FFF0F0; --ref-color-red-5: #FFE5E5; --ref-color-red-10: #FFD1D1; --ref-color-red-15: #FDB5B5; --ref-color-red-20: #FD9B9B; --ref-color-red-30: #FF7A7A; --ref-color-red-40: #FD5D5D; --ref-color-red-50: #FB4646; --ref-color-red-60: #EF3434; --ref-color-red-70: #DB1F1F; --ref-color-red-80: #C01B1B; --ref-color-red-85: #A01C1C; --ref-color-red-90: #831B1B; --ref-color-red-95: #691C1C; --ref-color-red-100: #541C1C; --ref-color-orange-2: #FFF2ED; --ref-color-orange-5: #FFE9E0; --ref-color-orange-10: #FFD8C7; --ref-color-orange-15: #FFC2A8; --ref-color-orange-20: #FFAF8C; --ref-color-orange-30: #FF9966; --ref-color-orange-40: #FF8142; --ref-color-orange-50: #FD6E26; --ref-color-orange-60: #F9660B; --ref-color-orange-70: #E55800; --ref-color-orange-80: #C24A00; --ref-color-orange-85: #A33F00; --ref-color-orange-90: #823303; --ref-color-orange-95: #682D08; --ref-color-orange-100: #502307; --ref-color-yellow-2: #FFF8EB; --ref-color-yellow-5: #FFF0D6; --ref-color-yellow-10: #FFE4B3; --ref-color-yellow-15: #FFD994; --ref-color-yellow-20: #FFCF76; --ref-color-yellow-30: #FFBF52; --ref-color-yellow-40: #FFB029; --ref-color-yellow-50: #F79D02; --ref-color-yellow-60: #EB8D00; --ref-color-yellow-70: #D67900; --ref-color-yellow-80: #BD6800; --ref-color-yellow-85: #A35A00; --ref-color-yellow-90: #804600; --ref-color-yellow-95: #613500; --ref-color-yellow-100: #472800; --ref-color-blue-2: #EBF5FF; --ref-color-blue-5: #DBEFFF; --ref-color-blue-10: #C2E2FF; --ref-color-blue-15: #9FD2FC; --ref-color-blue-20: #75BFFF; --ref-color-blue-30: #47A9FF; --ref-color-blue-40: #1791FC; --ref-color-blue-50: #007EED; --ref-color-blue-60: #0470DC; --ref-color-blue-70: #0361BF; --ref-color-blue-80: #0654A2; --ref-color-blue-85: #05498F; --ref-color-blue-90: #043B76; --ref-color-blue-95: #063560; --ref-color-blue-100: #0A2B4D; --ref-color-beige-10: #FAF9F8; --ref-color-beige-20: #F7F6F4; --ref-color-beige-30: #F5F4F1; --ref-color-beige-40: #EFEDE8; --ref-color-beige-50: #EAE6DF; --ref-color-beige-60: #DEDAD3; --ref-color-beige-70: #CCC8C2; --ref-color-beige-80: #B0ADA8; --ref-color-beige-90: #82807E; --ref-color-beige-100: #5A5452; --ref-color-forest-green-10: #EDF2F0; --ref-color-forest-green-20: #CCD9D5; --ref-color-forest-green-30: #A6BDB5; --ref-color-forest-green-40: #80A195; --ref-color-forest-green-50: #678E80; --ref-color-forest-green-60: #4D7B6B; --ref-color-forest-green-70: #346955; --ref-color-forest-green-80: #1A5640; --ref-color-forest-green-90: #01432B; --ref-color-forest-green-100: #013220; --ref-color-lime-10: #FCFEE7; --ref-color-lime-20: #F7FCCB; --ref-color-lime-30: #EEF99D; --ref-color-lime-40: #D6EF49; --ref-color-lime-50: #CBE635; --ref-color-lime-60: #ADCC16; --ref-color-lime-70: #87A30D; --ref-color-lime-80: #667C0F; --ref-color-lime-90: #516212; --ref-color-lime-100: #445314; --ref-color-grey-95-3: rgba(17, 17, 18, 0.03); --ref-color-grey-95-5: rgba(17, 17, 18, 0.05); --ref-color-grey-95-4: rgba(17, 17, 18, 0.04); --ref-color-grey-95-7: rgba(17, 17, 18, 0.07); --ref-color-grey-95-15: rgba(17, 17, 18, 0.15); --ref-color-grey-0-6: rgba(255, 255, 255, 0.06); --ref-color-grey-0-10: rgba(255, 255, 255, 0.1); --ref-color-grey-0-15: rgba(255, 255, 255, 0.15); --ref-color-grey-0-20: rgba(255, 255, 255, 0.2); --ref-font-family-base: Inter; --ref-font-family-mono: Roboto Mono; --ref-font-size-xxxl: 32px; --ref-font-size-xxl: 24px; --ref-font-size-xl: 20px; --ref-font-size-lg: 18px; --ref-font-size-base: 16px; --ref-font-size-sm: 14px; --ref-font-size-xs: 12px; --ref-font-size-xxs: 11px; --ref-font-size-xxxl-rem: 2rem; --ref-font-size-xxl-rem: 1.5rem; --ref-font-size-xl-rem: 1.25rem; --ref-font-size-lg-rem: 1.125rem; --ref-font-size-base-rem: 1rem; --ref-font-size-sm-rem: 0.875rem; --ref-font-size-xs-rem: 0.75rem; --ref-font-size-xxs-rem: 0.6875rem; --ref-font-weight-regular: 400; --ref-font-weight-medium: 500; --ref-font-weight-semibold: 600; --ref-font-weight-bold: 700; --ref-font-letter-spacing-base: 0; --ref-font-letter-spacing-tight: -0.3px; --ref-font-line-height-none: 1; --ref-font-line-height-xs: 1.3; --ref-font-line-height-sm: 1.4; --ref-font-line-height-md: 1.5; --ref-font-line-height-lg: 1.6; --ref-size-1x: 4px; --ref-size-2x: 8px; --ref-size-3x: 12px; --ref-size-4x: 16px; --ref-size-5x: 20px; --ref-size-6x: 24px; --ref-size-7x: 28px; --ref-size-8x: 32px; --ref-size-9x: 36px; --ref-size-10x: 40px; --ref-size-11x: 44px; --ref-size-12x: 48px; --ref-size-13x: 52px; --ref-size-14x: 56px; --ref-size-15x: 60px; --ref-size-16x: 64px; --ref-size-17x: 68px; --ref-size-18x: 72px; --ref-size-19x: 76px; --ref-size-20x: 80px; --ref-size-1x-rem: 0.25rem; --ref-size-2x-rem: 0.5rem; --ref-size-3x-rem: 0.75rem; --ref-size-4x-rem: 1rem; --ref-size-5x-rem: 1.25rem; --ref-size-6x-rem: 1.5rem; --ref-size-7x-rem: 1.75rem; --ref-size-8x-rem: 2rem; --ref-size-9x-rem: 2.25rem; --ref-size-10x-rem: 2.5rem; --ref-size-11x-rem: 2.75rem; --ref-size-12x-rem: 3rem; --ref-size-13x-rem: 3.25rem; --ref-size-14x-rem: 3.5rem; --ref-size-15x-rem: 3.75rem; --ref-size-16x-rem: 4rem; --ref-size-17x-rem: 4.25rem; --ref-size-18x-rem: 4.5rem; --ref-size-19x-rem: 4.75rem; --ref-size-20x-rem: 5rem; --sys-text-body-base: 500 14px/1.5 Inter; --sys-text-body-bold: 700 14px/1.5 Inter; --sys-text-body-semibold: 600 14px/1.4 Inter; --sys-text-heading-h1: 600 24px/1.3 Inter; --sys-text-heading-h2: 600 20px/1.3 Inter; --sys-text-heading-h3: 600 18px/1.4 Inter; --sys-text-heading-h4: 600 16px/1.4 Inter; --sys-text-heading-h4-medium: 500 18px/1.4 Inter; --sys-text-heading-h5: 500 14px/1.5 Inter; --sys-text-label-base: 500 14px/1.5 Inter; --sys-text-label-lg: 500 18px/1.4 Inter; --sys-text-label-small: 500 12px/1.6 Inter; --sys-text-secret-lg: 700 18px/1.4 Roboto Mono; --sys-text-secret-sm: 500 14px/1.5 Roboto Mono; --sys-text-secret-xxl: 700 24px/1.3 Roboto Mono; --sys-text-small: 500 12px/1.6 Inter; --sys-text-small-semibold: 600 12px/1.3 Inter; --sys-text-micro: 600 11px/1.3 Inter; --sys-text-title: 500 16px/1.5 Inter; --sys-text-title-semibold: 600 16px/1.5 Inter; --sys-color-bg-case: #000000; --sys-color-border-case: transparent; --sys-color-bg-primary: #FFFFFF; --sys-color-bg-secondary: #F7F7F8; --sys-color-bg-tertiary: #F2F2F3; --sys-color-bg-quaternary: #FFFFFF; --sys-color-on-bg-case-primary: #FFFFFF; --sys-color-on-bg-case-secondary: #A1A1A5; --sys-color-on-bg-primary: #1B1B1D; --sys-color-on-bg-secondary: #727279; --sys-color-on-bg-tertiary: #8A8A8E; --sys-color-on-bg-inverse-primary: #FFFFFF; --sys-color-on-bg-inverse-secondary: rgba(255, 255, 255, 0.6); --sys-color-on-bg-disabled: #B6B6B9; --sys-color-on-bg-placeholder: #B6B6B9; --sys-color-container-hover: rgba(17, 17, 18, 0.04); --sys-color-container-focus: rgba(17, 17, 18, 0.04); --sys-color-container-active: rgba(17, 17, 18, 0.07); --sys-color-container-disabled: rgba(17, 17, 18, 0.03); --sys-color-container-opaque-disabled: #EAEAEC; --sys-color-accent-primary: #1B1B1D; --sys-color-accent-primary-hover: #28282A; --sys-color-accent-primary-focus: #1B1B1D; --sys-color-accent-primary-active: #1B1B1D; --sys-color-accent-primary-accessible: #00AD99; --sys-color-accent-primary-accessible-hover: #19E8CC; --sys-color-accent-primary-tint-hover: rgba(27, 27, 29, 0.05); --sys-color-accent-primary-tint-focus: rgba(27, 27, 29, 0.1); --sys-color-accent-primary-tint-active: rgba(27, 27, 29, 0.15); --sys-color-accent-secondary: #FFFFFF; --sys-color-accent-secondary-hover: #F7F7F8; --sys-color-accent-secondary-focus: #F7F7F8; --sys-color-accent-secondary-active: #EAEAEC; --sys-color-accent-secondary-accessible: #252527; --sys-color-accent-secondary-accessible-hover: #39393C; --sys-color-accent-secondary-tint-hover: rgba(255, 255, 255, 0.05); --sys-color-accent-secondary-tint-focus: rgba(255, 255, 255, 0.1); --sys-color-accent-secondary-tint-active: rgba(37, 37, 39, 0.15); --sys-color-on-accent-primary: #FFFFFF; --sys-color-on-accent-primary-tint: #028378; --sys-color-on-accent-secondary: #1B1B1D; --sys-color-on-accent-secondary-tint: #252527; --sys-color-status-danger: #C01B1B; --sys-color-status-warning: #C24A00; --sys-color-status-success: #036D3F; --sys-color-status-info: #0361BF; --sys-color-status-new: #028378; --sys-color-status-danger-tint-subtle: rgba(239, 52, 52, 0.05); --sys-color-status-danger-tint: rgba(239, 52, 52, 0.6); --sys-color-status-danger-tint-hover: rgba(239, 52, 52, 0.3); --sys-color-status-danger-tint-focus: rgba(239, 52, 52, 0.85); --sys-color-status-danger-tint-active: rgba(239, 52, 52, 0.2); --sys-color-status-warning-tint-subtle: rgba(249, 102, 11, 0.05); --sys-color-status-warning-tint: rgba(249, 102, 11, 0.15); --sys-color-status-warning-tint-hover: rgba(249, 102, 11, 0.1); --sys-color-status-success-tint: rgba(1, 152, 86, 0.15); --sys-color-status-info-tint: rgba(4, 112, 220, 0.15); --sys-color-status-new-tint: rgba(0, 207, 182, 0.15); --sys-color-status-border-danger-tint-subtle: rgba(239, 52, 52, 0.3); --sys-color-status-border-danger-tint-strong: rgba(239, 52, 52, 0.6); --sys-color-status-border-warning-tint-subtle: rgba(249, 102, 11, 0.3); --sys-color-on-status-primary: #FFFFFF; --sys-color-on-status-tint: #1B1B1D; --sys-color-divider-subtle: rgba(17, 17, 18, 0.1); --sys-color-divider-strong: rgba(17, 17, 18, 0.15); --sys-color-border-subtle: rgba(17, 17, 18, 0.1); --sys-color-border-strong: rgba(17, 17, 18, 0.15); --sys-color-border-gradient-start: rgba(27, 27, 29, 0.1); --sys-color-border-gradient-end: rgba(27, 27, 29, 0.15); --sys-color-input-border: #B6B6B9; --sys-color-input-border-secondary: rgba(17, 17, 18, 0.1); --sys-color-input-border-disabled: rgba(17, 17, 18, 0.03); --sys-color-input-border-destructive: rgba(17, 17, 18, 0.1); --sys-color-input-outline-focus-primary: rgba(17, 17, 18, 0.5); --sys-color-input-outline-focus-secondary: rgba(17, 17, 18, 0.3); --sys-color-input-shadow-inner-secondary: rgba(0, 0, 0, 0.06); --sys-color-input-border-outer-gap: rgba(255, 255, 255, 0.03); --sys-color-input-border-gradient-primary-start: rgba(0, 0, 0, 0.2); --sys-color-input-border-gradient-primary-end: rgba(0, 0, 0, 0.5); --sys-color-input-border-gradient-primary-disabled-start: rgba(0, 0, 0, 0.06); --sys-color-input-border-gradient-primary-disabled-end: rgba(0, 0, 0, 0.12); --sys-color-input-border-gradient-secondary-start: rgba(27, 27, 29, 0.09); --sys-color-input-border-gradient-secondary-end: rgba(27, 27, 29, 0.15); --sys-color-input-border-gradient-secondary-disabled-start: rgba(27, 27, 29, 0.07); --sys-color-input-border-gradient-secondary-disabled-end: rgba(27, 27, 29, 0.15); --sys-color-input-border-gradient-danger-start: rgba(27, 27, 29, 0.09); --sys-color-input-border-gradient-danger-end: rgba(27, 27, 29, 0.15); --sys-color-input-border-gradient-danger-disabled-start: rgba(27, 27, 29, 0.07); --sys-color-input-border-gradient-danger-disabled-end: rgba(27, 27, 29, 0.15); --sys-shadow-color: rgba(0, 0, 0, 0.08); --sys-color-shadow-soft: rgba(0, 0, 0, 0.15); --sys-color-shadow-mid: rgba(0, 0, 0, 0.25); --sys-color-shadow-strong: rgba(0, 0, 0, 0.4); --sys-color-brand-teal: #00CFB6; --sys-color-brand-lime: #D6EF49; --sys-color-brand-forest-green: #01432B; --sys-color-brand-beige: #F5F4F1; --sys-color-input-border-error: rgba(219, 31, 31, 0.16); --sys-color-input-border-error-hover: rgba(219, 31, 31, 0.3); --sys-color-input-border-error-focus: rgba(219, 31, 31, 0.6); --sys-color-container-on-case-default: rgba(255, 255, 255, 0.15); --sys-color-container-on-case-hover: rgba(255, 255, 255, 0.2); --sys-color-container-on-case-focus: rgba(255, 255, 255, 0.2); --sys-color-container-on-case-active: rgba(255, 255, 255, 0.25); --sys-color-container-on-case-disabled: rgba(255, 255, 255, 0.12); --sys-color-container-on-case-light-hover: rgba(255, 255, 255, 0.15); --sys-color-container-on-case-light-focus: rgba(255, 255, 255, 0.15); --sys-color-container-on-case-light-active: rgba(255, 255, 255, 0.2); --sys-color-input-border-secondary-on-case: rgba(255, 255, 255, 0.08); --ref-elevation-level-1: 0 2px 2px -2px; --ref-elevation-level-5: 0 8px 12px -8px; --ref-elevation-level-8: 0 16px 16px -8px; --ref-elevation-level-10: 0 28px 24px -12; --comp-btn-height-xs: 24px; --comp-btn-width-xs: 24px; --comp-btn-height-sm: 32px; --comp-btn-width-sm: 32px; --comp-btn-border-radius-xs: 6px; --comp-btn-border-radius-sm: 8px; --comp-btn-text-sm: 500 12px/1.6 Inter; --comp-btn-text-md: 500 14px/1.5 Inter; --comp-btn-border-radius-md: 10px; --comp-btn-padding-left-md: 16px; --comp-btn-padding-right-md: 16px; --comp-btn-padding-left-sm: 12px; --comp-btn-padding-right-sm: 12px; --comp-btn-height-md: 36px; --comp-btn-text-lg: 500 14px/1.5 Inter; --comp-btn-border-radius-lg: 12px; --comp-btn-padding-left-lg: 24px; --comp-btn-padding-right-lg: 24px; --comp-btn-height-lg: 48px; --comp-btn-text-xl: 500 14px/1.5 Inter; --comp-btn-text-secondary-xl: 500 12px/1.6 Inter; --comp-btn-border-radius-xl: 12px; --comp-btn-padding-left-xl: 16px; --comp-btn-padding-right-xl: 16px; --comp-btn-height-xl: 60px; --comp-btn-padding-fab-left: 12px; --comp-btn-padding-fab-right: 12px; --comp-btn-color-bg-contained-primary: #1B1B1D; --comp-btn-color-bg-contained-primary-hover: #28282A; --comp-btn-color-bg-contained-primary-focus: #1B1B1D; --comp-btn-color-bg-contained-primary-active: #1B1B1D; --comp-btn-color-bg-contained-primary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-primary: #FFFFFF; --comp-btn-content-color-contained-primary-disabled: #B6B6B9; --comp-btn-color-bg-container-secondary: #FFFFFF; --comp-btn-color-bg-contained-secondary-hover: #F7F7F8; --comp-btn-color-bg-contained-secondary-focus: rgba(255, 255, 255, 0.1); --comp-btn-color-bg-contained-secondary-active: rgba(37, 37, 39, 0.15); --comp-btn-content-color-contained-secondary: #1B1B1D; --comp-btn-color-border-contained-secondary: rgba(0, 0, 0, 0.08); --comp-btn-color-border-contained-secondary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-color-border-contained-primary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-secondary-disabled: #B6B6B9; --comp-btn-color-bg-contained-tertiary: #FFFFFF; --comp-btn-color-bg-contained-tertiary-hover: #F7F7F8; --comp-btn-color-bg-contained-tertiary-focus: #F7F7F8; --comp-btn-color-bg-contained-tertiary-active: #EAEAEC; --comp-btn-color-bg-contained-tertiary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-tertiary: #1B1B1D; --comp-btn-content-color-contained-tertiary-disabled: #B6B6B9; --comp-btn-color-bg-contained-danger-hover: #F7F7F8; --comp-btn-color-bg-contained-danger-focus: rgba(239, 52, 52, 0.85); --comp-btn-color-bg-contained-danger-active: rgba(239, 52, 52, 0.2); --comp-btn-color-border-contained-danger: rgba(17, 17, 18, 0.1); --comp-btn-color-border-contained-danger-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-danger: #C01B1B; --comp-btn-content-color-contained-danger-disabled: #B6B6B9; --comp-btn-shadow-fab: 0 8px 12px -8px rgba(0, 0, 0, 0.6); --comp-btn-color-content-plain-danger: #C01B1B; --comp-btn-color-content-plain-secondary: #1B1B1D; --comp-btn-content-color-plain-disabled: #B6B6B9; --comp-btn-content-color-plain-nomode: #FFFFFF; --comp-btn-content-color-plain-nomode-disabled: rgba(255, 255, 255, 0.4); --comp-btn-color-content-plain-primary: #1B1B1D; --comp-btn-color-bg-plain-primary-hover: rgba(27, 27, 29, 0.05); --comp-btn-color-bg-plain-primary-focus: rgba(27, 27, 29, 0.1); --comp-btn-color-bg-plain-primary-active: rgba(27, 27, 29, 0.15); --comp-btn-color-bg-plain-secondary-hover: rgba(17, 17, 18, 0.04); --comp-btn-color-bg-plain-secondary-focus: rgba(255, 255, 255, 0.1); --comp-btn-color-bg-plain-secondary-active: rgba(37, 37, 39, 0.15); --comp-btn-color-bg-plain-danger-focus: rgba(239, 52, 52, 0.85); --comp-btn-color-bg-plain-danger-active: rgba(239, 52, 52, 0.2); --comp-btn-color-secondary-danger: #FFFFFF; --comp-btn-content-spacing: 4px; --comp-btn-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-btn-color-outline: rgba(17, 17, 18, 0.3); --comp-btn-group-spacing-horizontal: 8px; --comp-btn-group-spacing-vertical: 12px; --comp-btn-shadow-inner: 0 1px 0 0 rgba(0, 0, 0, 0.06); --comp-calendar-text: 500 14px/1.5 Inter; --comp-calendar-text-bold: 700 14px/1.5 Inter; --comp-calendar-date-border-radius: 9999px; --comp-calendar-color-text: #1B1B1D; --comp-calendar-color-text-secondary: #727279; --comp-calendar-date-color-text: #1B1B1D; --comp-calendar-date-color-text-hover: #1B1B1D; --comp-calendar-date-color-text-disabled: #B6B6B9; --comp-calendar-date-color-text-selected: #FFFFFF; --comp-calendar-date-color-bg-selected: #1B1B1D; --comp-calendar-date-color-border-selected: #1B1B1D; --comp-calendar-date-color-bg-current: #EAEAEC; --comp-calendar-date-color-border-current: #EAEAEC; --comp-calendar-date-color-border-hover: #1B1B1D; --comp-calendar-date-color-bg-range: #D7F5F5; --comp-loader-animation-duration: 2.4s; --comp-loader-color-stroke-neutral: #1B1B1D; --comp-loader-color-stroke-brand: #1B1B1D; --comp-snackbar-height: 44px; --comp-snackbar-border-radius: 12px; --comp-snackbar-padding-x: 16px; --comp-snackbar-content-spacing: 8px; --comp-snackbar-color-text: #FFFFFF; --comp-snackbar-text: 500 14px/1.5 Inter; --comp-snackbar-icon-color-neutral: #FFFFFF; --comp-snackbar-shadow: 0 8px 12px -8px rgba(0, 0, 0, 0.7); --comp-snackbar-color-bg: #000000; --comp-snackbar-divider-color: rgba(255, 255, 255, 0.35); --comp-snackbar-icon-color-success: #036D3F; --comp-snackbar-icon-color-danger: #C01B1B; --comp-toggle-width: 40px; --comp-toggle-height: 24px; --comp-toggle-border-radius: 9999px; --comp-toggle-padding: 2px; --comp-toggle-knob-size: 20px; --comp-toggle-color-bg-off: #CBCBCD; --comp-toggle-content-color: #FFFFFF; --comp-toggle-icon-color: #000000; --comp-toggle-color-bg-on: #1B1B1D; --comp-tooltip-color-bg: #000000; --comp-tooltip-font-size: 12px; --comp-tooltip-font-weight: 500; --comp-tooltip-line-height: 1.3; --comp-tooltip-color-text: #FFFFFF; --comp-tooltip-border-radius: 10px; --comp-tooltip-padding-horizontal-sm: 12px; --comp-tooltip-padding-vertical-sm: 8px; --comp-tooltip-padding-horizontal-md: 8px; --comp-tooltip-padding-vertical-md: 8px; --comp-tooltip-min-width: 56px; --comp-tooltip-max-width: 300px; --comp-tooltip-arrow-size: 6px; --comp-tooltip-border-color: rgba(255, 255, 255, 0.16); --comp-tooltip-arrow-left-arrow: 12.5px; --comp-tooltip-arrow-side-placement: 4px; --comp-error-block-color-danger: #C01B1B; --comp-error-block-color-warning: #C24A00; --comp-error-block-color-info: #727279; --comp-error-block-text: 500 12px/1.6 Inter; --comp-tab-height: 32px; --comp-tab-height-lg: 52px; --comp-tab-border-radius: 8px; --comp-tab-bar-border-radius: 10px; --comp-tab-bar-spacing: 0px; --comp-tab-bar-spacing-lg: 0px; --comp-tab-bar-padding-x: 12px; --comp-tab-bar-padding-x-lg: 20px; --comp-tab-bar-padding-outer: 2px; --comp-tab-bar-divider-color: rgba(17, 17, 18, 0.1); --comp-tab-bar-color-border: rgba(17, 17, 18, 0.1); --comp-tab-color-text: #727279; --comp-tab-color-text-active: #1B1B1D; --comp-tab-color-text-secondary: #727279; --comp-tab-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-tab-height-old: 36px; --comp-tab-height-lg-old: 64px; --comp-tab-bar-spacing-old: 20px; --comp-tab-bar-spacing-lg-old: 32px; --color-border-active-old: #1B1B1D; --comp-tab-color-bg: rgba(0, 0, 0, 0.03); --comp-tab-color-bg-active: #FFFFFF; --comp-tab-color-border-hover-old: rgba(0, 0, 0, 0.2); --comp-link-text: 500 14px/1.5 Inter; --comp-link-content-spacing: 4px; --comp-link-content-color: #1B1B1D; --comp-link-content-color-hover: #28282A; --comp-link-content-color-disabled: #B6B6B9; --comp-chip-height-sm: 28px; --comp-chip-height-md: 32px; --comp-chip-border-radius: 9999px; --comp-chip-text-sm: 500 12px/1.6 Inter; --comp-chip-text-md: 500 14px/1.5 Inter; --comp-chip-color-bg: #FFFFFF; --comp-chip-color-bg-error: rgba(239, 52, 52, 0.05); --comp-chip-color-bg-warning: rgba(249, 102, 11, 0.05); --comp-chip-color-bg-warning-hover: rgba(249, 102, 11, 0.1); --comp-chip-color-bg-error-hover: rgba(239, 52, 52, 0.3); --comp-chip-color-border-error: rgba(239, 52, 52, 0.3); --comp-chip-color-border-warning: rgba(249, 102, 11, 0.3); --comp-chip-icon-color: #1B1B1D; --comp-chip-icon-color-error: #C01B1B; --comp-chip-icon-color-warning: #C24A00; --comp-chip-icon-color-info: #1B1B1D; --comp-chip-color-text: #1B1B1D; --comp-chip-color-text-error: #C01B1B; --comp-chip-color-text-warning: #C24A00; --comp-chip-color-text-info: #1B1B1D; --comp-chip-color-bg-hover: #F2F2F3; --comp-chip-color-bg-info: #F7F7F8; --comp-chip-color-border: #CBCBCD; --comp-chip-color-border-info: #8A8A8E; --comp-dropdown-width-min: 180px; --comp-dropdown-border-radius: 16px; --comp-dropdown-border-radius-b2b-mobile: 10px; --comp-dropdown-item-border-radius: 10px; --comp-dropdown-section-spacing: 8px; --comp-dropdown-item-text-spacing-y: 2px; --comp-dropdown-item-color-border: rgba(17, 17, 18, 0.1); --comp-dropdown-color-border: rgba(17, 17, 18, 0.1); --comp-dropdown-color-bg: #FFFFFF; --comp-dropdown-divider-color: rgba(17, 17, 18, 0.1); --comp-dropdown-item-padding-y-default: 8px; --comp-dropdown-item-padding-x-default: 16px; --comp-dropdown-item-padding-x-menu: 12px; --comp-dropdown-item-padding-x-autofill-sm: 8px; --comp-dropdown-item-padding-x-autofill-md: 12px; --comp-dropdown-item-padding-y-autofill: 4px; --comp-dropdown-item-padding-x-b2b-mobile: 16px; --comp-dropdown-item-padding-y-b2b-mobile: 16px; --comp-dropdown-padding-default: 8px; --comp-dropdown-padding-autofill: 12px; --comp-dropdown-item-content-spacing-x: 12px; --comp-dropdown-item-content-spacing-x-menu: 8px; --comp-dropdown-item-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-dropdown-item-color-bg-focus: rgba(17, 17, 18, 0.04); --comp-dropdown-item-color-bg-active: rgba(17, 17, 18, 0.07); --comp-dropdown-color-text-primary: #1B1B1D; --comp-dropdown-color-text-secondary: #727279; --comp-dropdown-color-text-danger: #C01B1B; --comp-dropdown-color-text-disabled: #B6B6B9; --comp-slider-color-text: #1B1B1D; --comp-slider-knob-color: #1B1B1D; --comp-slider-bar-color: #EAEAEC; --comp-avatar-color-border: rgba(255, 255, 255, 0.15); --comp-avatar-size-xxs: 24px; --comp-avatar-size-xs: 28px; --comp-avatar-size-sm: 32px; --comp-avatar-size-md: 36px; --comp-avatar-size-lg: 40px; --comp-avatar-size-xl: 48px; --comp-avatar-size-xxl: 64px; --comp-avatar-border-radius-sm: 6px; --comp-avatar-border-radius-md: 8px; --comp-avatar-border-radius-lg: 10px; --comp-avatar-border-radius-xl: 12px; --comp-avatar-border-radius-xxl: 16px; --comp-avatar-border-radius-full: 9999px; --comp-avatar-color-text: #FFFFFF; --comp-avatar-text-xxs: 700 11px/1.3 Inter; --comp-avatar-text-xs: 700 11px Inter; --comp-avatar-text-sm: 700 12px Inter; --comp-avatar-text-md: 700 12px Inter; --comp-avatar-text-lg: 700 12px Inter; --comp-avatar-text-xl: 600 14px Inter; --comp-avatar-text-xxl: 600 18px Inter; --comp-avatar-icon-color: rgba(0, 0, 0, 0.3); --comp-avatar-color-bg-grey: #59595F; --comp-avatar-color-bg-yellow: #BD6800; --comp-avatar-color-bg-red: #C01B1B; --comp-avatar-color-bg-pink: #B01161; --comp-avatar-color-bg-magenta: #8D1C9C; --comp-avatar-color-bg-purple: #4C33C7; --comp-avatar-color-bg-blue: #0654A2; --comp-avatar-color-bg-teal: #028378; --comp-avatar-color-bg-green: #036D3F; --comp-avatar-color-bg-lime: #667C0F; --comp-avatar-color-bg-beige: #B0ADA8; --comp-pagination-text: 500 14px/1.5 Inter; --comp-pagination-size: 32px; --comp-pagination-border-radius: 9999px; --comp-pagination-spacing: 4px; --comp-pagination-color-text-active: #FFFFFF; --comp-pagination-color-bg-active: #1B1B1D; --comp-pagination-color-text: #1B1B1D; --comp-pagination-color-text-hover: #1B1B1D; --comp-pagination-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-pagination-nav-color: #1B1B1D; --comp-field-border-radius: 10px; --comp-field-text: 500 14px/1.5 Inter; --comp-field-text-secret: 500 14px/1.5 Roboto Mono; --comp-field-text-label: 500 14px/1.5 Inter; --comp-field-text-label-focus: 500 12px/1.6 Inter; --comp-field-text-helper: 500 12px/1.6 Inter; --comp-field-padding-left: 12px; --comp-field-padding-right: 12px; --comp-field-height: 56px; --comp-field-height-compact: 36px; --comp-field-content-spacing: 12px; --comp-field-btn-border-radius: 10px; --comp-field-color-bg-primary: #FFFFFF; --comp-field-color-bg-hover: #FFFFFF; --comp-field-color-bg-focus: #FFFFFF; --comp-field-color-bg-error: #FFFFFF; --comp-field-color-bg-disabled: rgba(17, 17, 18, 0.03); --comp-field-color-border-default: rgba(17, 17, 18, 0.1); --comp-field-color-border-disabled: rgba(17, 17, 18, 0.03); --comp-field-color-border-focus: #1B1B1D; --comp-field-color-border-error: rgba(219, 31, 31, 0.16); --comp-field-color-border-error-hover: rgba(219, 31, 31, 0.3); --comp-field-color-border-error-focus: rgba(219, 31, 31, 0.6); --comp-field-color-text-default: #1B1B1D; --comp-field-color-text-disabled: #B6B6B9; --comp-field-color-text-label: #727279; --comp-field-color-text-label-error: #C01B1B; --comp-field-color-text-helper: #727279; --comp-field-color-text-helper-error: #C01B1B; --comp-field-color-text-helper-success: #036D3F; --comp-field-color-text-placeholder: #B6B6B9; --comp-field-color-suffix-divider: rgba(17, 17, 18, 0.15); --comp-field-icon-color-default: #1B1B1D; --comp-field-icon-color-disabled: #B6B6B9; --comp-field-color-bg-clearable: #1B1B1D; --comp-field-color-text-inverted: #FFFFFF; --comp-field-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-search-bar-color-text: #A1A1A5; --comp-field-color-border-hover: #B6B6B9; --comp-field-color-text-secret-numbers: #705FF4; --comp-field-color-border-outer: #F2F2F3; --comp-field-color-border-outer-error: rgba(239, 52, 52, 0.6); --comp-search-shadow-inner: 0 -1px 0 0 rgba(0, 0, 0, 0.06); --comp-select-shadow-inner: 0 -1px 0 0 rgba(0, 0, 0, 0.06); --comp-select-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-choice-height: 20px; --comp-choice-radio-border-radius: 9999px; --comp-choice-checkbox-border-radius: 6px; --comp-choice-text: 500 14px/1.5 Inter; --comp-choice-color-bg-selected: #1B1B1D; --comp-choice-content-color: #FFFFFF; --comp-choice-content-color-disabled: #B6B6B9; --comp-choice-color-border-selected: #1B1B1D; --comp-choice-color-border: rgba(17, 17, 18, 0.1); --comp-choice-color-border-disabled: rgba(17, 17, 18, 0.03); --comp-choice-color-bg-error: #C01B1B; --comp-choice-color-border-error: #C01B1B; --comp-choice-color-text: #1B1B1D; --comp-choice-focus-outline-color-primary: rgba(17, 17, 18, 0.5); --comp-choice-focus-outline-color-secondary: rgba(17, 17, 18, 0.3); --comp-choice-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-choice-content-spacing: 12px; --comp-choice-group-spacing-x: 24px; --comp-choice-group-spacing-y: 8px; --comp-choice-group-title-spacing-y: 12px; --comp-choice-group-title-text: 500 16px/1.5 Inter; --comp-choice-color-bg: #FFFFFF; --comp-choice-color-bg-disabled: #F2F2F3; --comp-choice-shadow-inner: 0 1px 0 0 rgba(0, 0, 0, 0.06); --comp-dialog-border-radius: 24px; --comp-dialog-text: 500 14px/1.5 Inter; --comp-dialog-text-title: 500 18px/1.4 Inter; --comp-dialog-text-title-block: 500 14px/1.5 Inter; --comp-dialog-text-subtitle: 500 12px/1.6 Inter; --comp-dialog-padding-x: 32px; --comp-dialog-padding-y: 32px; --comp-dialog-animation-ms: 150ms; --comp-dialog-color-bg: #FFFFFF; --comp-dialog-color-border: rgba(17, 17, 18, 0.1); --comp-dialog-color-text: #1B1B1D; --comp-dialog-color-text-title: #1B1B1D; --comp-dialog-color-text-subtitle: #727279; --comp-dialog-divider-color: rgba(17, 17, 18, 0.1); --comp-dialog-scrim-color-bg-visible: rgba(0, 0, 0, 0.5); --comp-dialog-scrim-color-bg-hidden: rgba(40, 40, 42, 0); --comp-skeleton-color: rgba(37, 37, 39, 0.05); --comp-stepper-spacing: 12px; --comp-stepper-indicator-group-spacing: 4px; --comp-stepper-indicator-width-past-and-future: 6px; --comp-stepper-indicator-height-past-and-future: 6px; --comp-stepper-indicator-width-present: 12px; --comp-stepper-indicator-height-present: 6px; --comp-stepper-color-text: #727279; --comp-stepper-indicator-color-past-and-present: #1B1B1D; --comp-stepper-indicator-color-future: #E0E0E1; --comp-badge-text: 500 12px/1.6 Inter; --comp-badge-text-color: #1B1B1D; --comp-badge-border-radius: 8px; --comp-badge-padding-vertical: 4px; --comp-badge-padding-horizontal: 8px; --comp-badge-height: 24px; --comp-badge-content-color-grey-inverse: #FFFFFF; --comp-badge-content-color-inverse: #FFFFFF; --comp-badge-content-bg-inverse: #1B1B1D; --comp-badge-color-border-grey: rgba(17, 17, 18, 0.1); --comp-badge-content-color-danger: #C01B1B; --comp-badge-content-color-warning: #C24A00; --comp-badge-content-color-success: #036D3F; --comp-badge-content-color-info: #0654A2; --comp-badge-content-color-new: #028378; --comp-badge-content-color-pink: #B01161; --comp-badge-content-color-purple: #4C33C7; --comp-badge-content-color-magenta: #8D1C9C; --comp-badge-content-color-grey: #39393C; --comp-badge-color-bg-danger: #FFF0F0; --comp-badge-color-bg-warning: #FFF2ED; --comp-badge-color-bg-success: #ECF8F3; --comp-badge-color-bg-info: #EBF5FF; --comp-badge-color-bg-new: #EEFFFB; --comp-badge-color-bg-pink: #FEF0F7; --comp-badge-color-bg-magenta: #FCF2FD; --comp-badge-color-bg-purple: #F6F5FF; --comp-badge-color-bg-grey: #F7F7F8; --comp-badge-color-bg-grey-inverse: #39393C; --comp-badge-color-border-pink: rgba(204, 21, 113, 0.16); --comp-badge-color-border-magenta: rgba(163, 35, 179, 0.16); --comp-badge-color-border-purple: rgba(91, 60, 229, 0.16); --comp-badge-color-border-grey-inverse: #39393C; --comp-badge-color-border-danger: rgba(219, 31, 31, 0.16); --comp-badge-color-border-warning: rgba(229, 88, 0, 0.16); --comp-badge-color-border-success: rgba(0, 132, 75, 0.16); --comp-badge-color-border-info: rgba(3, 97, 191, 0.16); --comp-badge-color-border-new: rgba(2, 131, 120, 0.16); --comp-feature-tooltip-bg-color: #5062F6; --comp-feature-tooltip-text-color: #FFFFFF; --comp-timer-color-bg: #E0E0E1; --comp-timer-color-fill-safe: #036D3F; --comp-timer-color-fill-danger: #C01B1B; --comp-system-banner-text-title: 700 14px/1.5 Inter; --comp-system-banner-text: 500 14px/1.5 Inter; --comp-status-banner-bg-opacity: 26; --comp-status-banner-bg-opacity-dark: 40; --comp-status-banner-border-radius: 12px; --comp-status-banner-padding: 16px; --comp-status-banner-padding-icon-to-text: 8px; --comp-status-banner-padding-text-to-icon: 20px; --comp-status-banner-padding-text: 2px; --comp-status-banner-color-bg-info: #0361BF26; --comp-status-banner-color-bg-success: #036D3F26; --comp-status-banner-color-bg-warning: #C24A0026; --comp-status-banner-color-bg-danger: #C01B1B26; --comp-status-banner-icon-color-info: #0361BF; --comp-status-banner-icon-color-success: #036D3F; --comp-status-banner-icon-color-warning: #C24A00; --comp-status-banner-icon-color-danger: #C01B1B; --comp-status-banner-color-text: #1B1B1D; --comp-tile-border-radius-sm: 8px; --comp-tile-border-radius-md: 10px; --comp-tile-border-radius-lg: 12px; --comp-tile-padding-sm: 12px; --comp-tile-padding-md: 16px; --comp-tile-padding-lg: 20px; --comp-tile-padding-xl: 24px; --comp-tile-content-spacing-xs: 8px; --comp-tile-content-spacing-sm: 12px; --comp-tile-content-spacing-md: 16px; --comp-tile-content-spacing-lg: 24px; --comp-tile-color-bg-default: #FFFFFF; --comp-tile-color-bg-default-variant: #F2F2F3; --comp-tile-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-tile-color-bg-focus: rgba(17, 17, 18, 0.04); --comp-tile-color-bg-active: rgba(17, 17, 18, 0.07); --comp-tile-color-text-primary: #1B1B1D; --comp-tile-color-border-subtle: rgba(17, 17, 18, 0.1); --comp-tile-color-border-strong: rgba(17, 17, 18, 0.15); --comp-breadcrumbs-text: 500 18px/1.4 Inter; --comp-breadcrumbs-height: 64px; --comp-breadcrumbs-padding-horizontal: 24px; --comp-breadcrumbs-color-text: #8A8A8E; --comp-breadcrumbs-color-text-hover: #1B1B1D; --comp-breadcrumbs-color-text-active: #1B1B1D; --comp-breadcrumbs-color-bg: #FFFFFF; --comp-table-text-header: 600 14px/1.4 Inter; --comp-table-row-height-min: 64px; --comp-table-row-height-min-compact: 72px; --comp-table-row-height-header: 40px; --comp-table-cell-padding-horizontal: 12px; --comp-table-row-padding-horizontal: 12px; --comp-table-row-padding-vertical: 12px; --comp-table-row-padding-vertical-compact: 16px; --comp-table-border-radius: 12px; --comp-table-color-text: #1B1B1D; --comp-table-color-text-secondary: #727279; --comp-table-row-divider-color: rgba(17, 17, 18, 0.1); --comp-table-row-color-bg: #FFFFFF; --comp-table-row-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-nav-width: 280px; --comp-nav-padding: 20px; --comp-nav-color-bg: #F7F7F8; --comp-nav-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-nav-color-bg-active: #FFFFFF; --comp-nav-color-bg-active-hover: rgba(17, 17, 18, 0.04); --comp-nav-row-title-content-spacing: 8px; --comp-nav-row-title-color-outline: rgba(17, 17, 18, 0.5); --comp-nav-row-title-color-text: #727279; --comp-nav-row-title-border-radius: 6px; --comp-nav-row-title-spacing-x: 4px; --comp-nav-row-title-spacing-y: 4px; --comp-nav-row-height: 36px; --comp-nav-row-content-spacing: 8px; --comp-nav-row-padding-x: 8px; --comp-nav-row-border-radius: 10px; --comp-nav-row-color-border-active: rgba(17, 17, 18, 0.15); --comp-nav-list-padding-x: 8px; --comp-nav-divider-spacing: 12px; --comp-nav-divider-color: rgba(17, 17, 18, 0.1); --comp-nav-color-text: #727279; --comp-nav-color-text-active: #1B1B1D; --comp-nav-color-text-secondary: #727279; --comp-nav-color-border: rgba(17, 17, 18, 0.1); --comp-nav-icon-color: #8A8A8E; --comp-nav-icon-color-hover: #1B1B1D; --comp-nav-icon-color-active: #1B1B1D; --comp-nav-icon-color-active-hover: #1B1B1D; --comp-nav-text: 500 14px Inter; --comp-nav-text-sm: 500 12px Inter; --comp-nav-link-color-bg: #F2F2F3; --comp-nav-row-color-border-hover: rgba(17, 17, 18, 0.15); --comp-counter-border-radius: 20px; --comp-counter-color-text: #000000; --comp-counter-color-bg: #FB4646; --comp-counter-text-xs: 600 11px/1.3 Inter; --comp-counter-min-width: 16px; --comp-counter-height: 16px; --comp-counter-padding-x: 4px; --comp-key-shortcut-border-radius: 4px; --comp-key-shortcut-padding-x: 4px; --comp-key-shortcut-color-text: #FFFFFF; --comp-key-shortcut-height: 20px; --comp-key-shortcut-color-bg: #28282A; --comp-key-shortcut-color-border: #4A4A4F; --comp-illuicon-wrapper-border-radius-xs: 8px; --comp-illuicon-wrapper-border-radius-sm: 10px; --comp-illuicon-wrapper-border-radius-lg: 16px; --comp-illuicon-wrapper-size-xs: 32px; --comp-illuicon-wrapper-size-sm: 36px; --comp-illuicon-wrapper-size-lg: 64px; --comp-illuicon-size-xs: 24px; --comp-illuicon-size-sm: 28px; --comp-illuicon-size-lg: 44px; --comp-illuicon-wrapper-color-bg-brand-lime: #D6EF49; --comp-illuicon-wrapper-color-bg-brand-teal: #00CFB6; --comp-illuicon-wrapper-color-bg-neutral-light: #F7F7F8; --comp-illuicon-wrapper-color-bg-status-danger: #C01B1B; --comp-illuicon-wrapper-color-bg-status-warning: #C24A00; --comp-illuicon-wrapper-color-bg-status-success: #036D3F; --comp-illuicon-color-on-brand: #111112; --comp-illuicon-color-on-neutral-light: #111112; --comp-illuicon-color-on-neutral-transparent: #1B1B1D; --comp-illuicon-color-on-status: #FFFFFF; --comp-illuicon-wrapper-color-bg-neutral: #1B1B1D; --comp-illuicon-wrapper-color-bg-neutral-transparent: rgba(0, 0, 0, 0.03); --comp-illuicon-color-on-neutral: #FFFFFF; --comp-illuicon-wrapper-border: rgba(0, 0, 0, 0.03); --comp-empty-state-width: 336px; --comp-empty-state-padding-y-text: 4px; --comp-empty-state-padding-y-to-icon: 24px; --comp-empty-state-padding-y-to-icon-sm: 8px; --comp-empty-state-padding-y-to-buttons: 24px; --comp-empty-state-padding-y-to-buttons-sm: 12px; --comp-empty-state-color-text: #727279; --comp-empty-state-color-text-title: #1B1B1D; --comp-empty-state-text: 500 14px/1.5 Inter; --comp-empty-state-text-sm: 500 12px/1.6 Inter; --comp-empty-state-text-title: 600 20px/1.3 Inter; --comp-empty-state-text-title-md: 600 18px/1.4 Inter; --comp-empty-state-text-title-sm: 500 14px/1.5 Inter; --comp-actionbar-min-width: 400px; --comp-actionbar-max-width: 520px; --comp-actionbar-height: 48px; --comp-actionbar-border-radius: 12px; --comp-actionbar-color-text: #FFFFFF; --comp-actionbar-padding-x: 24px; --comp-actionbar-content-spacing: 12px; --comp-actionbar-text: 500 14px/1.5 Inter; --comp-btn-group-spacing-x: 8px; --comp-actionbar-color-bg: #000000; --comp-actionbar-shadow: 0 8px 12px -8px rgba(0, 0, 0, 0.25); --comp-action-bar-divider-color: rgba(255, 255, 255, 0.2); --comp-item-logo-size-xxs: 24px; --comp-item-logo-size-xs: 32px; --comp-item-logo-size-sm: 40px; --comp-item-logo-size-md: 48px; --comp-item-logo-size-xl: 56px; --comp-item-logo-size-xxl: 64px; --comp-item-logo-border-radius-xxs: 6px; --comp-item-logo-border-radius-xs: 8px; --comp-item-logo-border-radius-sm: 10px; --comp-item-logo-border-radius-md: 12px; --comp-item-logo-border-radius-xl: 14px; --comp-item-logo-border-radius-xxl: 16px; --comp-suitcase-card-color-bg: #F7F7F8; --comp-suitcase-card-padding: 4px; --comp-suitcase-card-border-radius: 16px; --comp-suitcase-card-spacing: 4px; --comp-suitcase-card-actions-spacing: 8px; --comp-suitcase-card-header-spacing: 16px; --comp-suitcase-card-header-padding-y: 20px; --comp-suitcase-card-header-padding-x: 24px; --comp-suitcase-card-text-title: 600 16px/1.4 Inter; --comp-suitcase-card-color-text-title: #1B1B1D; --comp-suitcase-card-text-description: 500 12px/1.6 Inter; --comp-suitcase-card-color-text-description: #8A8A8E; --comp-security-icon-bg-color: #FFFFFF; --comp-security-icon-color-on-neutral: #1B1B1D; --comp-security-icon-bg-color-danger: #C01B1B; --comp-security-icon-color-on-danger: #FFFFFF; --comp-security-icon-padding: 8px; --comp-security-icon-border-radius: 9999px; --comp-security-icon-border-color: rgba(17, 17, 18, 0.1); --comp-security-icon-size: 40px; --comp-section-bg-color: #FFFFFF; --comp-section-padding-xs: 8px; --comp-section-padding-sm: 12px; --comp-section-padding-md: 16px; --comp-section-padding-lg: 24px; --comp-section-border-radius: 12px; --comp-section-row-divider-color: rgba(17, 17, 18, 0.1); --comp-section-row-spacing: 16px; --comp-section-row-icon-color: #1B1B1D; --comp-section-text-title: 600 16px/1.4 Inter; --comp-section-text-color-title: #1B1B1D; --comp-section-text-subtitle: 500 12px/1.6 Inter; --comp-section-text-subtitle-color-neutral: #8A8A8E; --comp-section-text-subtitle-color-danger: #C01B1B; --comp-numbered-list-row-number-size: 24px; --comp-numbered-list-row-number-border-radius: 9999px; --comp-numbered-list-border-radius: 9999px; --comp-numbered-list-marker-bg: rgba(17, 17, 18, 0.05); --comp-numbered-list-marker-color: #1B1B1D; --comp-numbered-list-color-text: #1B1B1D; --comp-btn-color-bg-contained-secondary-on-case: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-contained-secondary-on-case-hover: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-contained-secondary-on-case-focus: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-contained-secondary-on-case-active: rgba(255, 255, 255, 0.25); --comp-btn-color-border-contained-secondary-on-case: rgba(255, 255, 255, 0.08); --comp-btn-content-color-contained-secondary-on-case: #A1A1A5; --comp-btn-content-color-contained-secondary-on-case-interaction: #FFFFFF; --comp-btn-color-bg-plain-on-case-hover: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-plain-on-case-focus: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-plain-on-case-active: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-plain-on-case-open: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-plain-on-case-open-hover: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-plain-on-case-open-focus: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-plain-on-case-open-active: rgba(255, 255, 255, 0.25); --comp-btn-content-color-plain-on-case: #A1A1A5; --comp-btn-content-color-plain-on-case-interaction: #FFFFFF; --comp-btn-color-outline-secondary: rgba(255, 255, 255, 0.35); --comp-btn-shadow-outer-on-case: 0 2px 2px -2px rgba(0, 0, 0, 0.6); --comp-btn-shadow-inner-on-case: 0 -1px 0 0 rgba(255, 255, 255, 0.1);"><span
                                          class="absolute block"
                                          style="z-index: 1; transform: scale(1); left: 1337px; top: 4279.5px; visibility: visible;"><button
                                                type="button"
                                                class="inline-flex h-6 w-[38px] cursor-pointer items-center rounded-[36px] border border-solid border-[#00000029] bg-[--ref-color-grey-0] px-1 shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.12)] hover:bg-[#f2f2f2]"><svg
                                                 width="18"
                                                 height="14"
                                                 class="np-ui-icon mt-[-2px]"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 18 15">
                                                <path d="M11.3024 8.08593L11.3953 8.51919L9.21628 4.76043L9.00144 4.38981L8.78444 4.75918L6.94695 7.88699L6.89767 7.97088L6.91806 8.06601L7.01571 8.52168L6.24953 7.20154L6.03879 6.83844L5.81995 7.19671L1.70048 13.9409C0.78388 12.546 0.25 10.8731 0.25 9.07364C0.25 4.19856 4.16943 0.25 9 0.25C13.8306 0.25 17.75 4.19856 17.75 9.07364C17.75 10.873 17.2161 12.5459 16.2995 13.9409L12.1777 7.19266L11.9601 6.83653L11.7488 7.19635L11.3313 7.90691L11.282 7.9908L11.3024 8.08593Z"
                                                      fill="#00CFB6"
                                                      stroke="#00AD99"
                                                      stroke-width="0.5"></path>
                                            </svg><svg width="9"
                                                 height="10"
                                                 class="np-ui-icon ml-px text-[#1F1F1F]"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 7 9">
                                                <path d="M6 3.58535C6.5826 3.79127 7 4.34689 7 5V7C7 7.82843 6.32843 8.5 5.5 8.5H1.5C0.671573 8.5 0 7.82843 0 7V5C0 4.34689 0.417404 3.79127 1 3.58535V2.5C1 1.12167 2.12167 0 3.5 0C4.87833 0 6 1.12167 6 2.5V3.58535ZM4.75 3.5V2.5C4.75 1.81083 4.18917 1.25 3.5 1.25C2.81083 1.25 2.25 1.81083 2.25 2.5V3.5H4.75Z"
                                                      fill="currentColor"></path>
                                            </svg></button></span></icon-container>
                            </template></nordpass-icon>
                    </div>
                    <div class="form_field_container">
                        <label class="form_label"
                               for="email_top">Email</label>
                        <input type="email"
                               class="form_input_text"
                               id="email_top"
                               name="email"
                               placeholder="you@domain.com"
                               maxlength="100"
                               required=""
                               data-np-intersection-state="observed"
                               data-np-autofill-field-type="email"
                               data-np-uid="9db63e0d-2f4a-4f22-98db-676196308238">
                        <nordpass-icon data-np-uid="9db63e0d-2f4a-4f22-98db-676196308238"
                                       tabindex="-1"
                                       style="all: initial !important;"><template shadowrootmode="closed">
                                <link rel="stylesheet"
                                      href="chrome-extension://eiaeiblijfjekdanodkjadfinkhbfgcd/css/content.css"
                                      type="text/css"><icon-container
                                                style="position: initial; --ref-border-radius-xxs: 6px; --ref-border-radius-xs: 8px; --ref-border-radius-sm: 10px; --ref-border-radius-md: 12px; --ref-border-radius-lg: 16px; --ref-border-radius-xl: 20px; --ref-border-radius-xxl: 24px; --ref-border-radius-full: 9999px; --ref-color-grey-0: #FFFFFF; --ref-color-grey-5: #F7F7F8; --ref-color-grey-10: #F2F2F3; --ref-color-grey-15: #EAEAEC; --ref-color-grey-20: #E0E0E1; --ref-color-grey-30: #CBCBCD; --ref-color-grey-40: #B6B6B9; --ref-color-grey-50: #A1A1A5; --ref-color-grey-60: #8A8A8E; --ref-color-grey-65: #727279; --ref-color-grey-70: #59595F; --ref-color-grey-75: #4A4A4F; --ref-color-grey-80: #39393C; --ref-color-grey-85: #28282A; --ref-color-grey-90: #252527; --ref-color-grey-92: #1B1B1D; --ref-color-grey-95: #111112; --ref-color-grey-100: #000000; --ref-color-teal-2: #E6FAFA; --ref-color-teal-5: #D7F5F5; --ref-color-teal-10: #EEFFFB; --ref-color-teal-15: #ACE5E5; --ref-color-teal-20: #C6FFF3; --ref-color-teal-30: #8EFFEA; --ref-color-teal-40: #4DFBDE; --ref-color-teal-50: #19E8CC; --ref-color-teal-60: #00CFB6; --ref-color-teal-70: #00AD99; --ref-color-teal-80: #028378; --ref-color-teal-85: #085C5B; --ref-color-teal-90: #086760; --ref-color-teal-95: #0D3D3C; --ref-color-teal-100: #0C554F; --ref-color-green-2: #ECF8F3; --ref-color-green-5: #DDF2E9; --ref-color-green-10: #BFEED4; --ref-color-green-15: #90E4B2; --ref-color-green-20: #4FD88B; --ref-color-green-30: #19C879; --ref-color-green-40: #00BD6B; --ref-color-green-50: #00AB61; --ref-color-green-60: #019856; --ref-color-green-70: #00844B; --ref-color-green-80: #036D3F; --ref-color-green-85: #035E37; --ref-color-green-90: #024B2C; --ref-color-green-95: #073D25; --ref-color-green-100: #0D3322; --ref-color-purpleblue: #5062F6; --ref-color-purple-2: #F6F5FF; --ref-color-purple-5: #ECEBFF; --ref-color-purple-10: #DEDBFF; --ref-color-purple-15: #CBC7FF; --ref-color-purple-20: #B4ADFF; --ref-color-purple-30: #988fff; --ref-color-purple-40: #8475F4; --ref-color-purple-50: #705FF4; --ref-color-purple-60: #6552F4; --ref-color-purple-70: #5B3CE5; --ref-color-purple-80: #4C33C7; --ref-color-purple-85: #422DAE; --ref-color-purple-90: #382791; --ref-color-purple-95: #2E2173; --ref-color-purple-100: #2A205C; --ref-color-pink-2: #FEF0F7; --ref-color-pink-5: #FEE2F0; --ref-color-pink-10: #FECEE6; --ref-color-pink-15: #FFB5DA; --ref-color-pink-20: #FC97C9; --ref-color-pink-30: #FA70B5; --ref-color-pink-40: #F452A3; --ref-color-pink-50: #F03391; --ref-color-pink-60: #E3167D; --ref-color-pink-70: #CC1571; --ref-color-pink-80: #B01161; --ref-color-pink-85: #9B0D54; --ref-color-pink-90: #7A1648; --ref-color-pink-95: #63163D; --ref-color-pink-100: #4D1C35; --ref-color-magenta-2: #FCF2FD; --ref-color-magenta-5: #F9E4FB; --ref-color-magenta-10: #F6CFF9; --ref-color-magenta-15: #EAB6F0; --ref-color-magenta-20: #E19AE9; --ref-color-magenta-30: #D778E2; --ref-color-magenta-40: #CF5FDD; --ref-color-magenta-50: #C742D8; --ref-color-magenta-60: #B92ACB; --ref-color-magenta-70: #A323B3; --ref-color-magenta-80: #8D1C9C; --ref-color-magenta-85: #7D178A; --ref-color-magenta-90: #681273; --ref-color-magenta-95: #54175C; --ref-color-magenta-100: #431B47; --ref-color-red-2: #FFF0F0; --ref-color-red-5: #FFE5E5; --ref-color-red-10: #FFD1D1; --ref-color-red-15: #FDB5B5; --ref-color-red-20: #FD9B9B; --ref-color-red-30: #FF7A7A; --ref-color-red-40: #FD5D5D; --ref-color-red-50: #FB4646; --ref-color-red-60: #EF3434; --ref-color-red-70: #DB1F1F; --ref-color-red-80: #C01B1B; --ref-color-red-85: #A01C1C; --ref-color-red-90: #831B1B; --ref-color-red-95: #691C1C; --ref-color-red-100: #541C1C; --ref-color-orange-2: #FFF2ED; --ref-color-orange-5: #FFE9E0; --ref-color-orange-10: #FFD8C7; --ref-color-orange-15: #FFC2A8; --ref-color-orange-20: #FFAF8C; --ref-color-orange-30: #FF9966; --ref-color-orange-40: #FF8142; --ref-color-orange-50: #FD6E26; --ref-color-orange-60: #F9660B; --ref-color-orange-70: #E55800; --ref-color-orange-80: #C24A00; --ref-color-orange-85: #A33F00; --ref-color-orange-90: #823303; --ref-color-orange-95: #682D08; --ref-color-orange-100: #502307; --ref-color-yellow-2: #FFF8EB; --ref-color-yellow-5: #FFF0D6; --ref-color-yellow-10: #FFE4B3; --ref-color-yellow-15: #FFD994; --ref-color-yellow-20: #FFCF76; --ref-color-yellow-30: #FFBF52; --ref-color-yellow-40: #FFB029; --ref-color-yellow-50: #F79D02; --ref-color-yellow-60: #EB8D00; --ref-color-yellow-70: #D67900; --ref-color-yellow-80: #BD6800; --ref-color-yellow-85: #A35A00; --ref-color-yellow-90: #804600; --ref-color-yellow-95: #613500; --ref-color-yellow-100: #472800; --ref-color-blue-2: #EBF5FF; --ref-color-blue-5: #DBEFFF; --ref-color-blue-10: #C2E2FF; --ref-color-blue-15: #9FD2FC; --ref-color-blue-20: #75BFFF; --ref-color-blue-30: #47A9FF; --ref-color-blue-40: #1791FC; --ref-color-blue-50: #007EED; --ref-color-blue-60: #0470DC; --ref-color-blue-70: #0361BF; --ref-color-blue-80: #0654A2; --ref-color-blue-85: #05498F; --ref-color-blue-90: #043B76; --ref-color-blue-95: #063560; --ref-color-blue-100: #0A2B4D; --ref-color-beige-10: #FAF9F8; --ref-color-beige-20: #F7F6F4; --ref-color-beige-30: #F5F4F1; --ref-color-beige-40: #EFEDE8; --ref-color-beige-50: #EAE6DF; --ref-color-beige-60: #DEDAD3; --ref-color-beige-70: #CCC8C2; --ref-color-beige-80: #B0ADA8; --ref-color-beige-90: #82807E; --ref-color-beige-100: #5A5452; --ref-color-forest-green-10: #EDF2F0; --ref-color-forest-green-20: #CCD9D5; --ref-color-forest-green-30: #A6BDB5; --ref-color-forest-green-40: #80A195; --ref-color-forest-green-50: #678E80; --ref-color-forest-green-60: #4D7B6B; --ref-color-forest-green-70: #346955; --ref-color-forest-green-80: #1A5640; --ref-color-forest-green-90: #01432B; --ref-color-forest-green-100: #013220; --ref-color-lime-10: #FCFEE7; --ref-color-lime-20: #F7FCCB; --ref-color-lime-30: #EEF99D; --ref-color-lime-40: #D6EF49; --ref-color-lime-50: #CBE635; --ref-color-lime-60: #ADCC16; --ref-color-lime-70: #87A30D; --ref-color-lime-80: #667C0F; --ref-color-lime-90: #516212; --ref-color-lime-100: #445314; --ref-color-grey-95-3: rgba(17, 17, 18, 0.03); --ref-color-grey-95-5: rgba(17, 17, 18, 0.05); --ref-color-grey-95-4: rgba(17, 17, 18, 0.04); --ref-color-grey-95-7: rgba(17, 17, 18, 0.07); --ref-color-grey-95-15: rgba(17, 17, 18, 0.15); --ref-color-grey-0-6: rgba(255, 255, 255, 0.06); --ref-color-grey-0-10: rgba(255, 255, 255, 0.1); --ref-color-grey-0-15: rgba(255, 255, 255, 0.15); --ref-color-grey-0-20: rgba(255, 255, 255, 0.2); --ref-font-family-base: Inter; --ref-font-family-mono: Roboto Mono; --ref-font-size-xxxl: 32px; --ref-font-size-xxl: 24px; --ref-font-size-xl: 20px; --ref-font-size-lg: 18px; --ref-font-size-base: 16px; --ref-font-size-sm: 14px; --ref-font-size-xs: 12px; --ref-font-size-xxs: 11px; --ref-font-size-xxxl-rem: 2rem; --ref-font-size-xxl-rem: 1.5rem; --ref-font-size-xl-rem: 1.25rem; --ref-font-size-lg-rem: 1.125rem; --ref-font-size-base-rem: 1rem; --ref-font-size-sm-rem: 0.875rem; --ref-font-size-xs-rem: 0.75rem; --ref-font-size-xxs-rem: 0.6875rem; --ref-font-weight-regular: 400; --ref-font-weight-medium: 500; --ref-font-weight-semibold: 600; --ref-font-weight-bold: 700; --ref-font-letter-spacing-base: 0; --ref-font-letter-spacing-tight: -0.3px; --ref-font-line-height-none: 1; --ref-font-line-height-xs: 1.3; --ref-font-line-height-sm: 1.4; --ref-font-line-height-md: 1.5; --ref-font-line-height-lg: 1.6; --ref-size-1x: 4px; --ref-size-2x: 8px; --ref-size-3x: 12px; --ref-size-4x: 16px; --ref-size-5x: 20px; --ref-size-6x: 24px; --ref-size-7x: 28px; --ref-size-8x: 32px; --ref-size-9x: 36px; --ref-size-10x: 40px; --ref-size-11x: 44px; --ref-size-12x: 48px; --ref-size-13x: 52px; --ref-size-14x: 56px; --ref-size-15x: 60px; --ref-size-16x: 64px; --ref-size-17x: 68px; --ref-size-18x: 72px; --ref-size-19x: 76px; --ref-size-20x: 80px; --ref-size-1x-rem: 0.25rem; --ref-size-2x-rem: 0.5rem; --ref-size-3x-rem: 0.75rem; --ref-size-4x-rem: 1rem; --ref-size-5x-rem: 1.25rem; --ref-size-6x-rem: 1.5rem; --ref-size-7x-rem: 1.75rem; --ref-size-8x-rem: 2rem; --ref-size-9x-rem: 2.25rem; --ref-size-10x-rem: 2.5rem; --ref-size-11x-rem: 2.75rem; --ref-size-12x-rem: 3rem; --ref-size-13x-rem: 3.25rem; --ref-size-14x-rem: 3.5rem; --ref-size-15x-rem: 3.75rem; --ref-size-16x-rem: 4rem; --ref-size-17x-rem: 4.25rem; --ref-size-18x-rem: 4.5rem; --ref-size-19x-rem: 4.75rem; --ref-size-20x-rem: 5rem; --sys-text-body-base: 500 14px/1.5 Inter; --sys-text-body-bold: 700 14px/1.5 Inter; --sys-text-body-semibold: 600 14px/1.4 Inter; --sys-text-heading-h1: 600 24px/1.3 Inter; --sys-text-heading-h2: 600 20px/1.3 Inter; --sys-text-heading-h3: 600 18px/1.4 Inter; --sys-text-heading-h4: 600 16px/1.4 Inter; --sys-text-heading-h4-medium: 500 18px/1.4 Inter; --sys-text-heading-h5: 500 14px/1.5 Inter; --sys-text-label-base: 500 14px/1.5 Inter; --sys-text-label-lg: 500 18px/1.4 Inter; --sys-text-label-small: 500 12px/1.6 Inter; --sys-text-secret-lg: 700 18px/1.4 Roboto Mono; --sys-text-secret-sm: 500 14px/1.5 Roboto Mono; --sys-text-secret-xxl: 700 24px/1.3 Roboto Mono; --sys-text-small: 500 12px/1.6 Inter; --sys-text-small-semibold: 600 12px/1.3 Inter; --sys-text-micro: 600 11px/1.3 Inter; --sys-text-title: 500 16px/1.5 Inter; --sys-text-title-semibold: 600 16px/1.5 Inter; --sys-color-bg-case: #000000; --sys-color-border-case: transparent; --sys-color-bg-primary: #FFFFFF; --sys-color-bg-secondary: #F7F7F8; --sys-color-bg-tertiary: #F2F2F3; --sys-color-bg-quaternary: #FFFFFF; --sys-color-on-bg-case-primary: #FFFFFF; --sys-color-on-bg-case-secondary: #A1A1A5; --sys-color-on-bg-primary: #1B1B1D; --sys-color-on-bg-secondary: #727279; --sys-color-on-bg-tertiary: #8A8A8E; --sys-color-on-bg-inverse-primary: #FFFFFF; --sys-color-on-bg-inverse-secondary: rgba(255, 255, 255, 0.6); --sys-color-on-bg-disabled: #B6B6B9; --sys-color-on-bg-placeholder: #B6B6B9; --sys-color-container-hover: rgba(17, 17, 18, 0.04); --sys-color-container-focus: rgba(17, 17, 18, 0.04); --sys-color-container-active: rgba(17, 17, 18, 0.07); --sys-color-container-disabled: rgba(17, 17, 18, 0.03); --sys-color-container-opaque-disabled: #EAEAEC; --sys-color-accent-primary: #1B1B1D; --sys-color-accent-primary-hover: #28282A; --sys-color-accent-primary-focus: #1B1B1D; --sys-color-accent-primary-active: #1B1B1D; --sys-color-accent-primary-accessible: #00AD99; --sys-color-accent-primary-accessible-hover: #19E8CC; --sys-color-accent-primary-tint-hover: rgba(27, 27, 29, 0.05); --sys-color-accent-primary-tint-focus: rgba(27, 27, 29, 0.1); --sys-color-accent-primary-tint-active: rgba(27, 27, 29, 0.15); --sys-color-accent-secondary: #FFFFFF; --sys-color-accent-secondary-hover: #F7F7F8; --sys-color-accent-secondary-focus: #F7F7F8; --sys-color-accent-secondary-active: #EAEAEC; --sys-color-accent-secondary-accessible: #252527; --sys-color-accent-secondary-accessible-hover: #39393C; --sys-color-accent-secondary-tint-hover: rgba(255, 255, 255, 0.05); --sys-color-accent-secondary-tint-focus: rgba(255, 255, 255, 0.1); --sys-color-accent-secondary-tint-active: rgba(37, 37, 39, 0.15); --sys-color-on-accent-primary: #FFFFFF; --sys-color-on-accent-primary-tint: #028378; --sys-color-on-accent-secondary: #1B1B1D; --sys-color-on-accent-secondary-tint: #252527; --sys-color-status-danger: #C01B1B; --sys-color-status-warning: #C24A00; --sys-color-status-success: #036D3F; --sys-color-status-info: #0361BF; --sys-color-status-new: #028378; --sys-color-status-danger-tint-subtle: rgba(239, 52, 52, 0.05); --sys-color-status-danger-tint: rgba(239, 52, 52, 0.6); --sys-color-status-danger-tint-hover: rgba(239, 52, 52, 0.3); --sys-color-status-danger-tint-focus: rgba(239, 52, 52, 0.85); --sys-color-status-danger-tint-active: rgba(239, 52, 52, 0.2); --sys-color-status-warning-tint-subtle: rgba(249, 102, 11, 0.05); --sys-color-status-warning-tint: rgba(249, 102, 11, 0.15); --sys-color-status-warning-tint-hover: rgba(249, 102, 11, 0.1); --sys-color-status-success-tint: rgba(1, 152, 86, 0.15); --sys-color-status-info-tint: rgba(4, 112, 220, 0.15); --sys-color-status-new-tint: rgba(0, 207, 182, 0.15); --sys-color-status-border-danger-tint-subtle: rgba(239, 52, 52, 0.3); --sys-color-status-border-danger-tint-strong: rgba(239, 52, 52, 0.6); --sys-color-status-border-warning-tint-subtle: rgba(249, 102, 11, 0.3); --sys-color-on-status-primary: #FFFFFF; --sys-color-on-status-tint: #1B1B1D; --sys-color-divider-subtle: rgba(17, 17, 18, 0.1); --sys-color-divider-strong: rgba(17, 17, 18, 0.15); --sys-color-border-subtle: rgba(17, 17, 18, 0.1); --sys-color-border-strong: rgba(17, 17, 18, 0.15); --sys-color-border-gradient-start: rgba(27, 27, 29, 0.1); --sys-color-border-gradient-end: rgba(27, 27, 29, 0.15); --sys-color-input-border: #B6B6B9; --sys-color-input-border-secondary: rgba(17, 17, 18, 0.1); --sys-color-input-border-disabled: rgba(17, 17, 18, 0.03); --sys-color-input-border-destructive: rgba(17, 17, 18, 0.1); --sys-color-input-outline-focus-primary: rgba(17, 17, 18, 0.5); --sys-color-input-outline-focus-secondary: rgba(17, 17, 18, 0.3); --sys-color-input-shadow-inner-secondary: rgba(0, 0, 0, 0.06); --sys-color-input-border-outer-gap: rgba(255, 255, 255, 0.03); --sys-color-input-border-gradient-primary-start: rgba(0, 0, 0, 0.2); --sys-color-input-border-gradient-primary-end: rgba(0, 0, 0, 0.5); --sys-color-input-border-gradient-primary-disabled-start: rgba(0, 0, 0, 0.06); --sys-color-input-border-gradient-primary-disabled-end: rgba(0, 0, 0, 0.12); --sys-color-input-border-gradient-secondary-start: rgba(27, 27, 29, 0.09); --sys-color-input-border-gradient-secondary-end: rgba(27, 27, 29, 0.15); --sys-color-input-border-gradient-secondary-disabled-start: rgba(27, 27, 29, 0.07); --sys-color-input-border-gradient-secondary-disabled-end: rgba(27, 27, 29, 0.15); --sys-color-input-border-gradient-danger-start: rgba(27, 27, 29, 0.09); --sys-color-input-border-gradient-danger-end: rgba(27, 27, 29, 0.15); --sys-color-input-border-gradient-danger-disabled-start: rgba(27, 27, 29, 0.07); --sys-color-input-border-gradient-danger-disabled-end: rgba(27, 27, 29, 0.15); --sys-shadow-color: rgba(0, 0, 0, 0.08); --sys-color-shadow-soft: rgba(0, 0, 0, 0.15); --sys-color-shadow-mid: rgba(0, 0, 0, 0.25); --sys-color-shadow-strong: rgba(0, 0, 0, 0.4); --sys-color-brand-teal: #00CFB6; --sys-color-brand-lime: #D6EF49; --sys-color-brand-forest-green: #01432B; --sys-color-brand-beige: #F5F4F1; --sys-color-input-border-error: rgba(219, 31, 31, 0.16); --sys-color-input-border-error-hover: rgba(219, 31, 31, 0.3); --sys-color-input-border-error-focus: rgba(219, 31, 31, 0.6); --sys-color-container-on-case-default: rgba(255, 255, 255, 0.15); --sys-color-container-on-case-hover: rgba(255, 255, 255, 0.2); --sys-color-container-on-case-focus: rgba(255, 255, 255, 0.2); --sys-color-container-on-case-active: rgba(255, 255, 255, 0.25); --sys-color-container-on-case-disabled: rgba(255, 255, 255, 0.12); --sys-color-container-on-case-light-hover: rgba(255, 255, 255, 0.15); --sys-color-container-on-case-light-focus: rgba(255, 255, 255, 0.15); --sys-color-container-on-case-light-active: rgba(255, 255, 255, 0.2); --sys-color-input-border-secondary-on-case: rgba(255, 255, 255, 0.08); --ref-elevation-level-1: 0 2px 2px -2px; --ref-elevation-level-5: 0 8px 12px -8px; --ref-elevation-level-8: 0 16px 16px -8px; --ref-elevation-level-10: 0 28px 24px -12; --comp-btn-height-xs: 24px; --comp-btn-width-xs: 24px; --comp-btn-height-sm: 32px; --comp-btn-width-sm: 32px; --comp-btn-border-radius-xs: 6px; --comp-btn-border-radius-sm: 8px; --comp-btn-text-sm: 500 12px/1.6 Inter; --comp-btn-text-md: 500 14px/1.5 Inter; --comp-btn-border-radius-md: 10px; --comp-btn-padding-left-md: 16px; --comp-btn-padding-right-md: 16px; --comp-btn-padding-left-sm: 12px; --comp-btn-padding-right-sm: 12px; --comp-btn-height-md: 36px; --comp-btn-text-lg: 500 14px/1.5 Inter; --comp-btn-border-radius-lg: 12px; --comp-btn-padding-left-lg: 24px; --comp-btn-padding-right-lg: 24px; --comp-btn-height-lg: 48px; --comp-btn-text-xl: 500 14px/1.5 Inter; --comp-btn-text-secondary-xl: 500 12px/1.6 Inter; --comp-btn-border-radius-xl: 12px; --comp-btn-padding-left-xl: 16px; --comp-btn-padding-right-xl: 16px; --comp-btn-height-xl: 60px; --comp-btn-padding-fab-left: 12px; --comp-btn-padding-fab-right: 12px; --comp-btn-color-bg-contained-primary: #1B1B1D; --comp-btn-color-bg-contained-primary-hover: #28282A; --comp-btn-color-bg-contained-primary-focus: #1B1B1D; --comp-btn-color-bg-contained-primary-active: #1B1B1D; --comp-btn-color-bg-contained-primary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-primary: #FFFFFF; --comp-btn-content-color-contained-primary-disabled: #B6B6B9; --comp-btn-color-bg-container-secondary: #FFFFFF; --comp-btn-color-bg-contained-secondary-hover: #F7F7F8; --comp-btn-color-bg-contained-secondary-focus: rgba(255, 255, 255, 0.1); --comp-btn-color-bg-contained-secondary-active: rgba(37, 37, 39, 0.15); --comp-btn-content-color-contained-secondary: #1B1B1D; --comp-btn-color-border-contained-secondary: rgba(0, 0, 0, 0.08); --comp-btn-color-border-contained-secondary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-color-border-contained-primary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-secondary-disabled: #B6B6B9; --comp-btn-color-bg-contained-tertiary: #FFFFFF; --comp-btn-color-bg-contained-tertiary-hover: #F7F7F8; --comp-btn-color-bg-contained-tertiary-focus: #F7F7F8; --comp-btn-color-bg-contained-tertiary-active: #EAEAEC; --comp-btn-color-bg-contained-tertiary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-tertiary: #1B1B1D; --comp-btn-content-color-contained-tertiary-disabled: #B6B6B9; --comp-btn-color-bg-contained-danger-hover: #F7F7F8; --comp-btn-color-bg-contained-danger-focus: rgba(239, 52, 52, 0.85); --comp-btn-color-bg-contained-danger-active: rgba(239, 52, 52, 0.2); --comp-btn-color-border-contained-danger: rgba(17, 17, 18, 0.1); --comp-btn-color-border-contained-danger-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-danger: #C01B1B; --comp-btn-content-color-contained-danger-disabled: #B6B6B9; --comp-btn-shadow-fab: 0 8px 12px -8px rgba(0, 0, 0, 0.6); --comp-btn-color-content-plain-danger: #C01B1B; --comp-btn-color-content-plain-secondary: #1B1B1D; --comp-btn-content-color-plain-disabled: #B6B6B9; --comp-btn-content-color-plain-nomode: #FFFFFF; --comp-btn-content-color-plain-nomode-disabled: rgba(255, 255, 255, 0.4); --comp-btn-color-content-plain-primary: #1B1B1D; --comp-btn-color-bg-plain-primary-hover: rgba(27, 27, 29, 0.05); --comp-btn-color-bg-plain-primary-focus: rgba(27, 27, 29, 0.1); --comp-btn-color-bg-plain-primary-active: rgba(27, 27, 29, 0.15); --comp-btn-color-bg-plain-secondary-hover: rgba(17, 17, 18, 0.04); --comp-btn-color-bg-plain-secondary-focus: rgba(255, 255, 255, 0.1); --comp-btn-color-bg-plain-secondary-active: rgba(37, 37, 39, 0.15); --comp-btn-color-bg-plain-danger-focus: rgba(239, 52, 52, 0.85); --comp-btn-color-bg-plain-danger-active: rgba(239, 52, 52, 0.2); --comp-btn-color-secondary-danger: #FFFFFF; --comp-btn-content-spacing: 4px; --comp-btn-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-btn-color-outline: rgba(17, 17, 18, 0.3); --comp-btn-group-spacing-horizontal: 8px; --comp-btn-group-spacing-vertical: 12px; --comp-btn-shadow-inner: 0 1px 0 0 rgba(0, 0, 0, 0.06); --comp-calendar-text: 500 14px/1.5 Inter; --comp-calendar-text-bold: 700 14px/1.5 Inter; --comp-calendar-date-border-radius: 9999px; --comp-calendar-color-text: #1B1B1D; --comp-calendar-color-text-secondary: #727279; --comp-calendar-date-color-text: #1B1B1D; --comp-calendar-date-color-text-hover: #1B1B1D; --comp-calendar-date-color-text-disabled: #B6B6B9; --comp-calendar-date-color-text-selected: #FFFFFF; --comp-calendar-date-color-bg-selected: #1B1B1D; --comp-calendar-date-color-border-selected: #1B1B1D; --comp-calendar-date-color-bg-current: #EAEAEC; --comp-calendar-date-color-border-current: #EAEAEC; --comp-calendar-date-color-border-hover: #1B1B1D; --comp-calendar-date-color-bg-range: #D7F5F5; --comp-loader-animation-duration: 2.4s; --comp-loader-color-stroke-neutral: #1B1B1D; --comp-loader-color-stroke-brand: #1B1B1D; --comp-snackbar-height: 44px; --comp-snackbar-border-radius: 12px; --comp-snackbar-padding-x: 16px; --comp-snackbar-content-spacing: 8px; --comp-snackbar-color-text: #FFFFFF; --comp-snackbar-text: 500 14px/1.5 Inter; --comp-snackbar-icon-color-neutral: #FFFFFF; --comp-snackbar-shadow: 0 8px 12px -8px rgba(0, 0, 0, 0.7); --comp-snackbar-color-bg: #000000; --comp-snackbar-divider-color: rgba(255, 255, 255, 0.35); --comp-snackbar-icon-color-success: #036D3F; --comp-snackbar-icon-color-danger: #C01B1B; --comp-toggle-width: 40px; --comp-toggle-height: 24px; --comp-toggle-border-radius: 9999px; --comp-toggle-padding: 2px; --comp-toggle-knob-size: 20px; --comp-toggle-color-bg-off: #CBCBCD; --comp-toggle-content-color: #FFFFFF; --comp-toggle-icon-color: #000000; --comp-toggle-color-bg-on: #1B1B1D; --comp-tooltip-color-bg: #000000; --comp-tooltip-font-size: 12px; --comp-tooltip-font-weight: 500; --comp-tooltip-line-height: 1.3; --comp-tooltip-color-text: #FFFFFF; --comp-tooltip-border-radius: 10px; --comp-tooltip-padding-horizontal-sm: 12px; --comp-tooltip-padding-vertical-sm: 8px; --comp-tooltip-padding-horizontal-md: 8px; --comp-tooltip-padding-vertical-md: 8px; --comp-tooltip-min-width: 56px; --comp-tooltip-max-width: 300px; --comp-tooltip-arrow-size: 6px; --comp-tooltip-border-color: rgba(255, 255, 255, 0.16); --comp-tooltip-arrow-left-arrow: 12.5px; --comp-tooltip-arrow-side-placement: 4px; --comp-error-block-color-danger: #C01B1B; --comp-error-block-color-warning: #C24A00; --comp-error-block-color-info: #727279; --comp-error-block-text: 500 12px/1.6 Inter; --comp-tab-height: 32px; --comp-tab-height-lg: 52px; --comp-tab-border-radius: 8px; --comp-tab-bar-border-radius: 10px; --comp-tab-bar-spacing: 0px; --comp-tab-bar-spacing-lg: 0px; --comp-tab-bar-padding-x: 12px; --comp-tab-bar-padding-x-lg: 20px; --comp-tab-bar-padding-outer: 2px; --comp-tab-bar-divider-color: rgba(17, 17, 18, 0.1); --comp-tab-bar-color-border: rgba(17, 17, 18, 0.1); --comp-tab-color-text: #727279; --comp-tab-color-text-active: #1B1B1D; --comp-tab-color-text-secondary: #727279; --comp-tab-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-tab-height-old: 36px; --comp-tab-height-lg-old: 64px; --comp-tab-bar-spacing-old: 20px; --comp-tab-bar-spacing-lg-old: 32px; --color-border-active-old: #1B1B1D; --comp-tab-color-bg: rgba(0, 0, 0, 0.03); --comp-tab-color-bg-active: #FFFFFF; --comp-tab-color-border-hover-old: rgba(0, 0, 0, 0.2); --comp-link-text: 500 14px/1.5 Inter; --comp-link-content-spacing: 4px; --comp-link-content-color: #1B1B1D; --comp-link-content-color-hover: #28282A; --comp-link-content-color-disabled: #B6B6B9; --comp-chip-height-sm: 28px; --comp-chip-height-md: 32px; --comp-chip-border-radius: 9999px; --comp-chip-text-sm: 500 12px/1.6 Inter; --comp-chip-text-md: 500 14px/1.5 Inter; --comp-chip-color-bg: #FFFFFF; --comp-chip-color-bg-error: rgba(239, 52, 52, 0.05); --comp-chip-color-bg-warning: rgba(249, 102, 11, 0.05); --comp-chip-color-bg-warning-hover: rgba(249, 102, 11, 0.1); --comp-chip-color-bg-error-hover: rgba(239, 52, 52, 0.3); --comp-chip-color-border-error: rgba(239, 52, 52, 0.3); --comp-chip-color-border-warning: rgba(249, 102, 11, 0.3); --comp-chip-icon-color: #1B1B1D; --comp-chip-icon-color-error: #C01B1B; --comp-chip-icon-color-warning: #C24A00; --comp-chip-icon-color-info: #1B1B1D; --comp-chip-color-text: #1B1B1D; --comp-chip-color-text-error: #C01B1B; --comp-chip-color-text-warning: #C24A00; --comp-chip-color-text-info: #1B1B1D; --comp-chip-color-bg-hover: #F2F2F3; --comp-chip-color-bg-info: #F7F7F8; --comp-chip-color-border: #CBCBCD; --comp-chip-color-border-info: #8A8A8E; --comp-dropdown-width-min: 180px; --comp-dropdown-border-radius: 16px; --comp-dropdown-border-radius-b2b-mobile: 10px; --comp-dropdown-item-border-radius: 10px; --comp-dropdown-section-spacing: 8px; --comp-dropdown-item-text-spacing-y: 2px; --comp-dropdown-item-color-border: rgba(17, 17, 18, 0.1); --comp-dropdown-color-border: rgba(17, 17, 18, 0.1); --comp-dropdown-color-bg: #FFFFFF; --comp-dropdown-divider-color: rgba(17, 17, 18, 0.1); --comp-dropdown-item-padding-y-default: 8px; --comp-dropdown-item-padding-x-default: 16px; --comp-dropdown-item-padding-x-menu: 12px; --comp-dropdown-item-padding-x-autofill-sm: 8px; --comp-dropdown-item-padding-x-autofill-md: 12px; --comp-dropdown-item-padding-y-autofill: 4px; --comp-dropdown-item-padding-x-b2b-mobile: 16px; --comp-dropdown-item-padding-y-b2b-mobile: 16px; --comp-dropdown-padding-default: 8px; --comp-dropdown-padding-autofill: 12px; --comp-dropdown-item-content-spacing-x: 12px; --comp-dropdown-item-content-spacing-x-menu: 8px; --comp-dropdown-item-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-dropdown-item-color-bg-focus: rgba(17, 17, 18, 0.04); --comp-dropdown-item-color-bg-active: rgba(17, 17, 18, 0.07); --comp-dropdown-color-text-primary: #1B1B1D; --comp-dropdown-color-text-secondary: #727279; --comp-dropdown-color-text-danger: #C01B1B; --comp-dropdown-color-text-disabled: #B6B6B9; --comp-slider-color-text: #1B1B1D; --comp-slider-knob-color: #1B1B1D; --comp-slider-bar-color: #EAEAEC; --comp-avatar-color-border: rgba(255, 255, 255, 0.15); --comp-avatar-size-xxs: 24px; --comp-avatar-size-xs: 28px; --comp-avatar-size-sm: 32px; --comp-avatar-size-md: 36px; --comp-avatar-size-lg: 40px; --comp-avatar-size-xl: 48px; --comp-avatar-size-xxl: 64px; --comp-avatar-border-radius-sm: 6px; --comp-avatar-border-radius-md: 8px; --comp-avatar-border-radius-lg: 10px; --comp-avatar-border-radius-xl: 12px; --comp-avatar-border-radius-xxl: 16px; --comp-avatar-border-radius-full: 9999px; --comp-avatar-color-text: #FFFFFF; --comp-avatar-text-xxs: 700 11px/1.3 Inter; --comp-avatar-text-xs: 700 11px Inter; --comp-avatar-text-sm: 700 12px Inter; --comp-avatar-text-md: 700 12px Inter; --comp-avatar-text-lg: 700 12px Inter; --comp-avatar-text-xl: 600 14px Inter; --comp-avatar-text-xxl: 600 18px Inter; --comp-avatar-icon-color: rgba(0, 0, 0, 0.3); --comp-avatar-color-bg-grey: #59595F; --comp-avatar-color-bg-yellow: #BD6800; --comp-avatar-color-bg-red: #C01B1B; --comp-avatar-color-bg-pink: #B01161; --comp-avatar-color-bg-magenta: #8D1C9C; --comp-avatar-color-bg-purple: #4C33C7; --comp-avatar-color-bg-blue: #0654A2; --comp-avatar-color-bg-teal: #028378; --comp-avatar-color-bg-green: #036D3F; --comp-avatar-color-bg-lime: #667C0F; --comp-avatar-color-bg-beige: #B0ADA8; --comp-pagination-text: 500 14px/1.5 Inter; --comp-pagination-size: 32px; --comp-pagination-border-radius: 9999px; --comp-pagination-spacing: 4px; --comp-pagination-color-text-active: #FFFFFF; --comp-pagination-color-bg-active: #1B1B1D; --comp-pagination-color-text: #1B1B1D; --comp-pagination-color-text-hover: #1B1B1D; --comp-pagination-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-pagination-nav-color: #1B1B1D; --comp-field-border-radius: 10px; --comp-field-text: 500 14px/1.5 Inter; --comp-field-text-secret: 500 14px/1.5 Roboto Mono; --comp-field-text-label: 500 14px/1.5 Inter; --comp-field-text-label-focus: 500 12px/1.6 Inter; --comp-field-text-helper: 500 12px/1.6 Inter; --comp-field-padding-left: 12px; --comp-field-padding-right: 12px; --comp-field-height: 56px; --comp-field-height-compact: 36px; --comp-field-content-spacing: 12px; --comp-field-btn-border-radius: 10px; --comp-field-color-bg-primary: #FFFFFF; --comp-field-color-bg-hover: #FFFFFF; --comp-field-color-bg-focus: #FFFFFF; --comp-field-color-bg-error: #FFFFFF; --comp-field-color-bg-disabled: rgba(17, 17, 18, 0.03); --comp-field-color-border-default: rgba(17, 17, 18, 0.1); --comp-field-color-border-disabled: rgba(17, 17, 18, 0.03); --comp-field-color-border-focus: #1B1B1D; --comp-field-color-border-error: rgba(219, 31, 31, 0.16); --comp-field-color-border-error-hover: rgba(219, 31, 31, 0.3); --comp-field-color-border-error-focus: rgba(219, 31, 31, 0.6); --comp-field-color-text-default: #1B1B1D; --comp-field-color-text-disabled: #B6B6B9; --comp-field-color-text-label: #727279; --comp-field-color-text-label-error: #C01B1B; --comp-field-color-text-helper: #727279; --comp-field-color-text-helper-error: #C01B1B; --comp-field-color-text-helper-success: #036D3F; --comp-field-color-text-placeholder: #B6B6B9; --comp-field-color-suffix-divider: rgba(17, 17, 18, 0.15); --comp-field-icon-color-default: #1B1B1D; --comp-field-icon-color-disabled: #B6B6B9; --comp-field-color-bg-clearable: #1B1B1D; --comp-field-color-text-inverted: #FFFFFF; --comp-field-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-search-bar-color-text: #A1A1A5; --comp-field-color-border-hover: #B6B6B9; --comp-field-color-text-secret-numbers: #705FF4; --comp-field-color-border-outer: #F2F2F3; --comp-field-color-border-outer-error: rgba(239, 52, 52, 0.6); --comp-search-shadow-inner: 0 -1px 0 0 rgba(0, 0, 0, 0.06); --comp-select-shadow-inner: 0 -1px 0 0 rgba(0, 0, 0, 0.06); --comp-select-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-choice-height: 20px; --comp-choice-radio-border-radius: 9999px; --comp-choice-checkbox-border-radius: 6px; --comp-choice-text: 500 14px/1.5 Inter; --comp-choice-color-bg-selected: #1B1B1D; --comp-choice-content-color: #FFFFFF; --comp-choice-content-color-disabled: #B6B6B9; --comp-choice-color-border-selected: #1B1B1D; --comp-choice-color-border: rgba(17, 17, 18, 0.1); --comp-choice-color-border-disabled: rgba(17, 17, 18, 0.03); --comp-choice-color-bg-error: #C01B1B; --comp-choice-color-border-error: #C01B1B; --comp-choice-color-text: #1B1B1D; --comp-choice-focus-outline-color-primary: rgba(17, 17, 18, 0.5); --comp-choice-focus-outline-color-secondary: rgba(17, 17, 18, 0.3); --comp-choice-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-choice-content-spacing: 12px; --comp-choice-group-spacing-x: 24px; --comp-choice-group-spacing-y: 8px; --comp-choice-group-title-spacing-y: 12px; --comp-choice-group-title-text: 500 16px/1.5 Inter; --comp-choice-color-bg: #FFFFFF; --comp-choice-color-bg-disabled: #F2F2F3; --comp-choice-shadow-inner: 0 1px 0 0 rgba(0, 0, 0, 0.06); --comp-dialog-border-radius: 24px; --comp-dialog-text: 500 14px/1.5 Inter; --comp-dialog-text-title: 500 18px/1.4 Inter; --comp-dialog-text-title-block: 500 14px/1.5 Inter; --comp-dialog-text-subtitle: 500 12px/1.6 Inter; --comp-dialog-padding-x: 32px; --comp-dialog-padding-y: 32px; --comp-dialog-animation-ms: 150ms; --comp-dialog-color-bg: #FFFFFF; --comp-dialog-color-border: rgba(17, 17, 18, 0.1); --comp-dialog-color-text: #1B1B1D; --comp-dialog-color-text-title: #1B1B1D; --comp-dialog-color-text-subtitle: #727279; --comp-dialog-divider-color: rgba(17, 17, 18, 0.1); --comp-dialog-scrim-color-bg-visible: rgba(0, 0, 0, 0.5); --comp-dialog-scrim-color-bg-hidden: rgba(40, 40, 42, 0); --comp-skeleton-color: rgba(37, 37, 39, 0.05); --comp-stepper-spacing: 12px; --comp-stepper-indicator-group-spacing: 4px; --comp-stepper-indicator-width-past-and-future: 6px; --comp-stepper-indicator-height-past-and-future: 6px; --comp-stepper-indicator-width-present: 12px; --comp-stepper-indicator-height-present: 6px; --comp-stepper-color-text: #727279; --comp-stepper-indicator-color-past-and-present: #1B1B1D; --comp-stepper-indicator-color-future: #E0E0E1; --comp-badge-text: 500 12px/1.6 Inter; --comp-badge-text-color: #1B1B1D; --comp-badge-border-radius: 8px; --comp-badge-padding-vertical: 4px; --comp-badge-padding-horizontal: 8px; --comp-badge-height: 24px; --comp-badge-content-color-grey-inverse: #FFFFFF; --comp-badge-content-color-inverse: #FFFFFF; --comp-badge-content-bg-inverse: #1B1B1D; --comp-badge-color-border-grey: rgba(17, 17, 18, 0.1); --comp-badge-content-color-danger: #C01B1B; --comp-badge-content-color-warning: #C24A00; --comp-badge-content-color-success: #036D3F; --comp-badge-content-color-info: #0654A2; --comp-badge-content-color-new: #028378; --comp-badge-content-color-pink: #B01161; --comp-badge-content-color-purple: #4C33C7; --comp-badge-content-color-magenta: #8D1C9C; --comp-badge-content-color-grey: #39393C; --comp-badge-color-bg-danger: #FFF0F0; --comp-badge-color-bg-warning: #FFF2ED; --comp-badge-color-bg-success: #ECF8F3; --comp-badge-color-bg-info: #EBF5FF; --comp-badge-color-bg-new: #EEFFFB; --comp-badge-color-bg-pink: #FEF0F7; --comp-badge-color-bg-magenta: #FCF2FD; --comp-badge-color-bg-purple: #F6F5FF; --comp-badge-color-bg-grey: #F7F7F8; --comp-badge-color-bg-grey-inverse: #39393C; --comp-badge-color-border-pink: rgba(204, 21, 113, 0.16); --comp-badge-color-border-magenta: rgba(163, 35, 179, 0.16); --comp-badge-color-border-purple: rgba(91, 60, 229, 0.16); --comp-badge-color-border-grey-inverse: #39393C; --comp-badge-color-border-danger: rgba(219, 31, 31, 0.16); --comp-badge-color-border-warning: rgba(229, 88, 0, 0.16); --comp-badge-color-border-success: rgba(0, 132, 75, 0.16); --comp-badge-color-border-info: rgba(3, 97, 191, 0.16); --comp-badge-color-border-new: rgba(2, 131, 120, 0.16); --comp-feature-tooltip-bg-color: #5062F6; --comp-feature-tooltip-text-color: #FFFFFF; --comp-timer-color-bg: #E0E0E1; --comp-timer-color-fill-safe: #036D3F; --comp-timer-color-fill-danger: #C01B1B; --comp-system-banner-text-title: 700 14px/1.5 Inter; --comp-system-banner-text: 500 14px/1.5 Inter; --comp-status-banner-bg-opacity: 26; --comp-status-banner-bg-opacity-dark: 40; --comp-status-banner-border-radius: 12px; --comp-status-banner-padding: 16px; --comp-status-banner-padding-icon-to-text: 8px; --comp-status-banner-padding-text-to-icon: 20px; --comp-status-banner-padding-text: 2px; --comp-status-banner-color-bg-info: #0361BF26; --comp-status-banner-color-bg-success: #036D3F26; --comp-status-banner-color-bg-warning: #C24A0026; --comp-status-banner-color-bg-danger: #C01B1B26; --comp-status-banner-icon-color-info: #0361BF; --comp-status-banner-icon-color-success: #036D3F; --comp-status-banner-icon-color-warning: #C24A00; --comp-status-banner-icon-color-danger: #C01B1B; --comp-status-banner-color-text: #1B1B1D; --comp-tile-border-radius-sm: 8px; --comp-tile-border-radius-md: 10px; --comp-tile-border-radius-lg: 12px; --comp-tile-padding-sm: 12px; --comp-tile-padding-md: 16px; --comp-tile-padding-lg: 20px; --comp-tile-padding-xl: 24px; --comp-tile-content-spacing-xs: 8px; --comp-tile-content-spacing-sm: 12px; --comp-tile-content-spacing-md: 16px; --comp-tile-content-spacing-lg: 24px; --comp-tile-color-bg-default: #FFFFFF; --comp-tile-color-bg-default-variant: #F2F2F3; --comp-tile-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-tile-color-bg-focus: rgba(17, 17, 18, 0.04); --comp-tile-color-bg-active: rgba(17, 17, 18, 0.07); --comp-tile-color-text-primary: #1B1B1D; --comp-tile-color-border-subtle: rgba(17, 17, 18, 0.1); --comp-tile-color-border-strong: rgba(17, 17, 18, 0.15); --comp-breadcrumbs-text: 500 18px/1.4 Inter; --comp-breadcrumbs-height: 64px; --comp-breadcrumbs-padding-horizontal: 24px; --comp-breadcrumbs-color-text: #8A8A8E; --comp-breadcrumbs-color-text-hover: #1B1B1D; --comp-breadcrumbs-color-text-active: #1B1B1D; --comp-breadcrumbs-color-bg: #FFFFFF; --comp-table-text-header: 600 14px/1.4 Inter; --comp-table-row-height-min: 64px; --comp-table-row-height-min-compact: 72px; --comp-table-row-height-header: 40px; --comp-table-cell-padding-horizontal: 12px; --comp-table-row-padding-horizontal: 12px; --comp-table-row-padding-vertical: 12px; --comp-table-row-padding-vertical-compact: 16px; --comp-table-border-radius: 12px; --comp-table-color-text: #1B1B1D; --comp-table-color-text-secondary: #727279; --comp-table-row-divider-color: rgba(17, 17, 18, 0.1); --comp-table-row-color-bg: #FFFFFF; --comp-table-row-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-nav-width: 280px; --comp-nav-padding: 20px; --comp-nav-color-bg: #F7F7F8; --comp-nav-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-nav-color-bg-active: #FFFFFF; --comp-nav-color-bg-active-hover: rgba(17, 17, 18, 0.04); --comp-nav-row-title-content-spacing: 8px; --comp-nav-row-title-color-outline: rgba(17, 17, 18, 0.5); --comp-nav-row-title-color-text: #727279; --comp-nav-row-title-border-radius: 6px; --comp-nav-row-title-spacing-x: 4px; --comp-nav-row-title-spacing-y: 4px; --comp-nav-row-height: 36px; --comp-nav-row-content-spacing: 8px; --comp-nav-row-padding-x: 8px; --comp-nav-row-border-radius: 10px; --comp-nav-row-color-border-active: rgba(17, 17, 18, 0.15); --comp-nav-list-padding-x: 8px; --comp-nav-divider-spacing: 12px; --comp-nav-divider-color: rgba(17, 17, 18, 0.1); --comp-nav-color-text: #727279; --comp-nav-color-text-active: #1B1B1D; --comp-nav-color-text-secondary: #727279; --comp-nav-color-border: rgba(17, 17, 18, 0.1); --comp-nav-icon-color: #8A8A8E; --comp-nav-icon-color-hover: #1B1B1D; --comp-nav-icon-color-active: #1B1B1D; --comp-nav-icon-color-active-hover: #1B1B1D; --comp-nav-text: 500 14px Inter; --comp-nav-text-sm: 500 12px Inter; --comp-nav-link-color-bg: #F2F2F3; --comp-nav-row-color-border-hover: rgba(17, 17, 18, 0.15); --comp-counter-border-radius: 20px; --comp-counter-color-text: #000000; --comp-counter-color-bg: #FB4646; --comp-counter-text-xs: 600 11px/1.3 Inter; --comp-counter-min-width: 16px; --comp-counter-height: 16px; --comp-counter-padding-x: 4px; --comp-key-shortcut-border-radius: 4px; --comp-key-shortcut-padding-x: 4px; --comp-key-shortcut-color-text: #FFFFFF; --comp-key-shortcut-height: 20px; --comp-key-shortcut-color-bg: #28282A; --comp-key-shortcut-color-border: #4A4A4F; --comp-illuicon-wrapper-border-radius-xs: 8px; --comp-illuicon-wrapper-border-radius-sm: 10px; --comp-illuicon-wrapper-border-radius-lg: 16px; --comp-illuicon-wrapper-size-xs: 32px; --comp-illuicon-wrapper-size-sm: 36px; --comp-illuicon-wrapper-size-lg: 64px; --comp-illuicon-size-xs: 24px; --comp-illuicon-size-sm: 28px; --comp-illuicon-size-lg: 44px; --comp-illuicon-wrapper-color-bg-brand-lime: #D6EF49; --comp-illuicon-wrapper-color-bg-brand-teal: #00CFB6; --comp-illuicon-wrapper-color-bg-neutral-light: #F7F7F8; --comp-illuicon-wrapper-color-bg-status-danger: #C01B1B; --comp-illuicon-wrapper-color-bg-status-warning: #C24A00; --comp-illuicon-wrapper-color-bg-status-success: #036D3F; --comp-illuicon-color-on-brand: #111112; --comp-illuicon-color-on-neutral-light: #111112; --comp-illuicon-color-on-neutral-transparent: #1B1B1D; --comp-illuicon-color-on-status: #FFFFFF; --comp-illuicon-wrapper-color-bg-neutral: #1B1B1D; --comp-illuicon-wrapper-color-bg-neutral-transparent: rgba(0, 0, 0, 0.03); --comp-illuicon-color-on-neutral: #FFFFFF; --comp-illuicon-wrapper-border: rgba(0, 0, 0, 0.03); --comp-empty-state-width: 336px; --comp-empty-state-padding-y-text: 4px; --comp-empty-state-padding-y-to-icon: 24px; --comp-empty-state-padding-y-to-icon-sm: 8px; --comp-empty-state-padding-y-to-buttons: 24px; --comp-empty-state-padding-y-to-buttons-sm: 12px; --comp-empty-state-color-text: #727279; --comp-empty-state-color-text-title: #1B1B1D; --comp-empty-state-text: 500 14px/1.5 Inter; --comp-empty-state-text-sm: 500 12px/1.6 Inter; --comp-empty-state-text-title: 600 20px/1.3 Inter; --comp-empty-state-text-title-md: 600 18px/1.4 Inter; --comp-empty-state-text-title-sm: 500 14px/1.5 Inter; --comp-actionbar-min-width: 400px; --comp-actionbar-max-width: 520px; --comp-actionbar-height: 48px; --comp-actionbar-border-radius: 12px; --comp-actionbar-color-text: #FFFFFF; --comp-actionbar-padding-x: 24px; --comp-actionbar-content-spacing: 12px; --comp-actionbar-text: 500 14px/1.5 Inter; --comp-btn-group-spacing-x: 8px; --comp-actionbar-color-bg: #000000; --comp-actionbar-shadow: 0 8px 12px -8px rgba(0, 0, 0, 0.25); --comp-action-bar-divider-color: rgba(255, 255, 255, 0.2); --comp-item-logo-size-xxs: 24px; --comp-item-logo-size-xs: 32px; --comp-item-logo-size-sm: 40px; --comp-item-logo-size-md: 48px; --comp-item-logo-size-xl: 56px; --comp-item-logo-size-xxl: 64px; --comp-item-logo-border-radius-xxs: 6px; --comp-item-logo-border-radius-xs: 8px; --comp-item-logo-border-radius-sm: 10px; --comp-item-logo-border-radius-md: 12px; --comp-item-logo-border-radius-xl: 14px; --comp-item-logo-border-radius-xxl: 16px; --comp-suitcase-card-color-bg: #F7F7F8; --comp-suitcase-card-padding: 4px; --comp-suitcase-card-border-radius: 16px; --comp-suitcase-card-spacing: 4px; --comp-suitcase-card-actions-spacing: 8px; --comp-suitcase-card-header-spacing: 16px; --comp-suitcase-card-header-padding-y: 20px; --comp-suitcase-card-header-padding-x: 24px; --comp-suitcase-card-text-title: 600 16px/1.4 Inter; --comp-suitcase-card-color-text-title: #1B1B1D; --comp-suitcase-card-text-description: 500 12px/1.6 Inter; --comp-suitcase-card-color-text-description: #8A8A8E; --comp-security-icon-bg-color: #FFFFFF; --comp-security-icon-color-on-neutral: #1B1B1D; --comp-security-icon-bg-color-danger: #C01B1B; --comp-security-icon-color-on-danger: #FFFFFF; --comp-security-icon-padding: 8px; --comp-security-icon-border-radius: 9999px; --comp-security-icon-border-color: rgba(17, 17, 18, 0.1); --comp-security-icon-size: 40px; --comp-section-bg-color: #FFFFFF; --comp-section-padding-xs: 8px; --comp-section-padding-sm: 12px; --comp-section-padding-md: 16px; --comp-section-padding-lg: 24px; --comp-section-border-radius: 12px; --comp-section-row-divider-color: rgba(17, 17, 18, 0.1); --comp-section-row-spacing: 16px; --comp-section-row-icon-color: #1B1B1D; --comp-section-text-title: 600 16px/1.4 Inter; --comp-section-text-color-title: #1B1B1D; --comp-section-text-subtitle: 500 12px/1.6 Inter; --comp-section-text-subtitle-color-neutral: #8A8A8E; --comp-section-text-subtitle-color-danger: #C01B1B; --comp-numbered-list-row-number-size: 24px; --comp-numbered-list-row-number-border-radius: 9999px; --comp-numbered-list-border-radius: 9999px; --comp-numbered-list-marker-bg: rgba(17, 17, 18, 0.05); --comp-numbered-list-marker-color: #1B1B1D; --comp-numbered-list-color-text: #1B1B1D; --comp-btn-color-bg-contained-secondary-on-case: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-contained-secondary-on-case-hover: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-contained-secondary-on-case-focus: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-contained-secondary-on-case-active: rgba(255, 255, 255, 0.25); --comp-btn-color-border-contained-secondary-on-case: rgba(255, 255, 255, 0.08); --comp-btn-content-color-contained-secondary-on-case: #A1A1A5; --comp-btn-content-color-contained-secondary-on-case-interaction: #FFFFFF; --comp-btn-color-bg-plain-on-case-hover: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-plain-on-case-focus: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-plain-on-case-active: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-plain-on-case-open: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-plain-on-case-open-hover: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-plain-on-case-open-focus: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-plain-on-case-open-active: rgba(255, 255, 255, 0.25); --comp-btn-content-color-plain-on-case: #A1A1A5; --comp-btn-content-color-plain-on-case-interaction: #FFFFFF; --comp-btn-color-outline-secondary: rgba(255, 255, 255, 0.35); --comp-btn-shadow-outer-on-case: 0 2px 2px -2px rgba(0, 0, 0, 0.6); --comp-btn-shadow-inner-on-case: 0 -1px 0 0 rgba(255, 255, 255, 0.1);"><span
                                          class="absolute block"
                                          style="z-index: 1; transform: scale(1); left: 1337px; top: 4381.5px; visibility: visible;"><button
                                                type="button"
                                                class="inline-flex h-6 w-[38px] cursor-pointer items-center rounded-[36px] border border-solid border-[#00000029] bg-[--ref-color-grey-0] px-1 shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.12)] hover:bg-[#f2f2f2]"><svg
                                                 width="18"
                                                 height="14"
                                                 class="np-ui-icon mt-[-2px]"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 18 15">
                                                <path d="M11.3024 8.08593L11.3953 8.51919L9.21628 4.76043L9.00144 4.38981L8.78444 4.75918L6.94695 7.88699L6.89767 7.97088L6.91806 8.06601L7.01571 8.52168L6.24953 7.20154L6.03879 6.83844L5.81995 7.19671L1.70048 13.9409C0.78388 12.546 0.25 10.8731 0.25 9.07364C0.25 4.19856 4.16943 0.25 9 0.25C13.8306 0.25 17.75 4.19856 17.75 9.07364C17.75 10.873 17.2161 12.5459 16.2995 13.9409L12.1777 7.19266L11.9601 6.83653L11.7488 7.19635L11.3313 7.90691L11.282 7.9908L11.3024 8.08593Z"
                                                      fill="#00CFB6"
                                                      stroke="#00AD99"
                                                      stroke-width="0.5"></path>
                                            </svg><svg width="9"
                                                 height="10"
                                                 class="np-ui-icon ml-px text-[#1F1F1F]"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 7 9">
                                                <path d="M6 3.58535C6.5826 3.79127 7 4.34689 7 5V7C7 7.82843 6.32843 8.5 5.5 8.5H1.5C0.671573 8.5 0 7.82843 0 7V5C0 4.34689 0.417404 3.79127 1 3.58535V2.5C1 1.12167 2.12167 0 3.5 0C4.87833 0 6 1.12167 6 2.5V3.58535ZM4.75 3.5V2.5C4.75 1.81083 4.18917 1.25 3.5 1.25C2.81083 1.25 2.25 1.81083 2.25 2.5V3.5H4.75Z"
                                                      fill="currentColor"></path>
                                            </svg></button></span></icon-container>
                            </template></nordpass-icon>
                    </div>
                    <div class="form_field_container">
                        <label class="form_label"
                               for="phone_top">Phone</label>
                        <input type="tel"
                               class="form_input_text"
                               id="phone_top"
                               name="phone"
                               placeholder="817-123-4567"
                               maxlength="14"
                               required=""
                               data-np-intersection-state="observed"
                               data-np-autofill-field-type="phone"
                               data-np-uid="a92c8d60-cd55-4b29-8cd1-72cacfef1499">
                        <nordpass-icon data-np-uid="a92c8d60-cd55-4b29-8cd1-72cacfef1499"
                                       tabindex="-1"
                                       style="all: initial !important;"><template shadowrootmode="closed">
                                <link rel="stylesheet"
                                      href="chrome-extension://eiaeiblijfjekdanodkjadfinkhbfgcd/css/content.css"
                                      type="text/css"><icon-container
                                                style="position: initial; --ref-border-radius-xxs: 6px; --ref-border-radius-xs: 8px; --ref-border-radius-sm: 10px; --ref-border-radius-md: 12px; --ref-border-radius-lg: 16px; --ref-border-radius-xl: 20px; --ref-border-radius-xxl: 24px; --ref-border-radius-full: 9999px; --ref-color-grey-0: #FFFFFF; --ref-color-grey-5: #F7F7F8; --ref-color-grey-10: #F2F2F3; --ref-color-grey-15: #EAEAEC; --ref-color-grey-20: #E0E0E1; --ref-color-grey-30: #CBCBCD; --ref-color-grey-40: #B6B6B9; --ref-color-grey-50: #A1A1A5; --ref-color-grey-60: #8A8A8E; --ref-color-grey-65: #727279; --ref-color-grey-70: #59595F; --ref-color-grey-75: #4A4A4F; --ref-color-grey-80: #39393C; --ref-color-grey-85: #28282A; --ref-color-grey-90: #252527; --ref-color-grey-92: #1B1B1D; --ref-color-grey-95: #111112; --ref-color-grey-100: #000000; --ref-color-teal-2: #E6FAFA; --ref-color-teal-5: #D7F5F5; --ref-color-teal-10: #EEFFFB; --ref-color-teal-15: #ACE5E5; --ref-color-teal-20: #C6FFF3; --ref-color-teal-30: #8EFFEA; --ref-color-teal-40: #4DFBDE; --ref-color-teal-50: #19E8CC; --ref-color-teal-60: #00CFB6; --ref-color-teal-70: #00AD99; --ref-color-teal-80: #028378; --ref-color-teal-85: #085C5B; --ref-color-teal-90: #086760; --ref-color-teal-95: #0D3D3C; --ref-color-teal-100: #0C554F; --ref-color-green-2: #ECF8F3; --ref-color-green-5: #DDF2E9; --ref-color-green-10: #BFEED4; --ref-color-green-15: #90E4B2; --ref-color-green-20: #4FD88B; --ref-color-green-30: #19C879; --ref-color-green-40: #00BD6B; --ref-color-green-50: #00AB61; --ref-color-green-60: #019856; --ref-color-green-70: #00844B; --ref-color-green-80: #036D3F; --ref-color-green-85: #035E37; --ref-color-green-90: #024B2C; --ref-color-green-95: #073D25; --ref-color-green-100: #0D3322; --ref-color-purpleblue: #5062F6; --ref-color-purple-2: #F6F5FF; --ref-color-purple-5: #ECEBFF; --ref-color-purple-10: #DEDBFF; --ref-color-purple-15: #CBC7FF; --ref-color-purple-20: #B4ADFF; --ref-color-purple-30: #988fff; --ref-color-purple-40: #8475F4; --ref-color-purple-50: #705FF4; --ref-color-purple-60: #6552F4; --ref-color-purple-70: #5B3CE5; --ref-color-purple-80: #4C33C7; --ref-color-purple-85: #422DAE; --ref-color-purple-90: #382791; --ref-color-purple-95: #2E2173; --ref-color-purple-100: #2A205C; --ref-color-pink-2: #FEF0F7; --ref-color-pink-5: #FEE2F0; --ref-color-pink-10: #FECEE6; --ref-color-pink-15: #FFB5DA; --ref-color-pink-20: #FC97C9; --ref-color-pink-30: #FA70B5; --ref-color-pink-40: #F452A3; --ref-color-pink-50: #F03391; --ref-color-pink-60: #E3167D; --ref-color-pink-70: #CC1571; --ref-color-pink-80: #B01161; --ref-color-pink-85: #9B0D54; --ref-color-pink-90: #7A1648; --ref-color-pink-95: #63163D; --ref-color-pink-100: #4D1C35; --ref-color-magenta-2: #FCF2FD; --ref-color-magenta-5: #F9E4FB; --ref-color-magenta-10: #F6CFF9; --ref-color-magenta-15: #EAB6F0; --ref-color-magenta-20: #E19AE9; --ref-color-magenta-30: #D778E2; --ref-color-magenta-40: #CF5FDD; --ref-color-magenta-50: #C742D8; --ref-color-magenta-60: #B92ACB; --ref-color-magenta-70: #A323B3; --ref-color-magenta-80: #8D1C9C; --ref-color-magenta-85: #7D178A; --ref-color-magenta-90: #681273; --ref-color-magenta-95: #54175C; --ref-color-magenta-100: #431B47; --ref-color-red-2: #FFF0F0; --ref-color-red-5: #FFE5E5; --ref-color-red-10: #FFD1D1; --ref-color-red-15: #FDB5B5; --ref-color-red-20: #FD9B9B; --ref-color-red-30: #FF7A7A; --ref-color-red-40: #FD5D5D; --ref-color-red-50: #FB4646; --ref-color-red-60: #EF3434; --ref-color-red-70: #DB1F1F; --ref-color-red-80: #C01B1B; --ref-color-red-85: #A01C1C; --ref-color-red-90: #831B1B; --ref-color-red-95: #691C1C; --ref-color-red-100: #541C1C; --ref-color-orange-2: #FFF2ED; --ref-color-orange-5: #FFE9E0; --ref-color-orange-10: #FFD8C7; --ref-color-orange-15: #FFC2A8; --ref-color-orange-20: #FFAF8C; --ref-color-orange-30: #FF9966; --ref-color-orange-40: #FF8142; --ref-color-orange-50: #FD6E26; --ref-color-orange-60: #F9660B; --ref-color-orange-70: #E55800; --ref-color-orange-80: #C24A00; --ref-color-orange-85: #A33F00; --ref-color-orange-90: #823303; --ref-color-orange-95: #682D08; --ref-color-orange-100: #502307; --ref-color-yellow-2: #FFF8EB; --ref-color-yellow-5: #FFF0D6; --ref-color-yellow-10: #FFE4B3; --ref-color-yellow-15: #FFD994; --ref-color-yellow-20: #FFCF76; --ref-color-yellow-30: #FFBF52; --ref-color-yellow-40: #FFB029; --ref-color-yellow-50: #F79D02; --ref-color-yellow-60: #EB8D00; --ref-color-yellow-70: #D67900; --ref-color-yellow-80: #BD6800; --ref-color-yellow-85: #A35A00; --ref-color-yellow-90: #804600; --ref-color-yellow-95: #613500; --ref-color-yellow-100: #472800; --ref-color-blue-2: #EBF5FF; --ref-color-blue-5: #DBEFFF; --ref-color-blue-10: #C2E2FF; --ref-color-blue-15: #9FD2FC; --ref-color-blue-20: #75BFFF; --ref-color-blue-30: #47A9FF; --ref-color-blue-40: #1791FC; --ref-color-blue-50: #007EED; --ref-color-blue-60: #0470DC; --ref-color-blue-70: #0361BF; --ref-color-blue-80: #0654A2; --ref-color-blue-85: #05498F; --ref-color-blue-90: #043B76; --ref-color-blue-95: #063560; --ref-color-blue-100: #0A2B4D; --ref-color-beige-10: #FAF9F8; --ref-color-beige-20: #F7F6F4; --ref-color-beige-30: #F5F4F1; --ref-color-beige-40: #EFEDE8; --ref-color-beige-50: #EAE6DF; --ref-color-beige-60: #DEDAD3; --ref-color-beige-70: #CCC8C2; --ref-color-beige-80: #B0ADA8; --ref-color-beige-90: #82807E; --ref-color-beige-100: #5A5452; --ref-color-forest-green-10: #EDF2F0; --ref-color-forest-green-20: #CCD9D5; --ref-color-forest-green-30: #A6BDB5; --ref-color-forest-green-40: #80A195; --ref-color-forest-green-50: #678E80; --ref-color-forest-green-60: #4D7B6B; --ref-color-forest-green-70: #346955; --ref-color-forest-green-80: #1A5640; --ref-color-forest-green-90: #01432B; --ref-color-forest-green-100: #013220; --ref-color-lime-10: #FCFEE7; --ref-color-lime-20: #F7FCCB; --ref-color-lime-30: #EEF99D; --ref-color-lime-40: #D6EF49; --ref-color-lime-50: #CBE635; --ref-color-lime-60: #ADCC16; --ref-color-lime-70: #87A30D; --ref-color-lime-80: #667C0F; --ref-color-lime-90: #516212; --ref-color-lime-100: #445314; --ref-color-grey-95-3: rgba(17, 17, 18, 0.03); --ref-color-grey-95-5: rgba(17, 17, 18, 0.05); --ref-color-grey-95-4: rgba(17, 17, 18, 0.04); --ref-color-grey-95-7: rgba(17, 17, 18, 0.07); --ref-color-grey-95-15: rgba(17, 17, 18, 0.15); --ref-color-grey-0-6: rgba(255, 255, 255, 0.06); --ref-color-grey-0-10: rgba(255, 255, 255, 0.1); --ref-color-grey-0-15: rgba(255, 255, 255, 0.15); --ref-color-grey-0-20: rgba(255, 255, 255, 0.2); --ref-font-family-base: Inter; --ref-font-family-mono: Roboto Mono; --ref-font-size-xxxl: 32px; --ref-font-size-xxl: 24px; --ref-font-size-xl: 20px; --ref-font-size-lg: 18px; --ref-font-size-base: 16px; --ref-font-size-sm: 14px; --ref-font-size-xs: 12px; --ref-font-size-xxs: 11px; --ref-font-size-xxxl-rem: 2rem; --ref-font-size-xxl-rem: 1.5rem; --ref-font-size-xl-rem: 1.25rem; --ref-font-size-lg-rem: 1.125rem; --ref-font-size-base-rem: 1rem; --ref-font-size-sm-rem: 0.875rem; --ref-font-size-xs-rem: 0.75rem; --ref-font-size-xxs-rem: 0.6875rem; --ref-font-weight-regular: 400; --ref-font-weight-medium: 500; --ref-font-weight-semibold: 600; --ref-font-weight-bold: 700; --ref-font-letter-spacing-base: 0; --ref-font-letter-spacing-tight: -0.3px; --ref-font-line-height-none: 1; --ref-font-line-height-xs: 1.3; --ref-font-line-height-sm: 1.4; --ref-font-line-height-md: 1.5; --ref-font-line-height-lg: 1.6; --ref-size-1x: 4px; --ref-size-2x: 8px; --ref-size-3x: 12px; --ref-size-4x: 16px; --ref-size-5x: 20px; --ref-size-6x: 24px; --ref-size-7x: 28px; --ref-size-8x: 32px; --ref-size-9x: 36px; --ref-size-10x: 40px; --ref-size-11x: 44px; --ref-size-12x: 48px; --ref-size-13x: 52px; --ref-size-14x: 56px; --ref-size-15x: 60px; --ref-size-16x: 64px; --ref-size-17x: 68px; --ref-size-18x: 72px; --ref-size-19x: 76px; --ref-size-20x: 80px; --ref-size-1x-rem: 0.25rem; --ref-size-2x-rem: 0.5rem; --ref-size-3x-rem: 0.75rem; --ref-size-4x-rem: 1rem; --ref-size-5x-rem: 1.25rem; --ref-size-6x-rem: 1.5rem; --ref-size-7x-rem: 1.75rem; --ref-size-8x-rem: 2rem; --ref-size-9x-rem: 2.25rem; --ref-size-10x-rem: 2.5rem; --ref-size-11x-rem: 2.75rem; --ref-size-12x-rem: 3rem; --ref-size-13x-rem: 3.25rem; --ref-size-14x-rem: 3.5rem; --ref-size-15x-rem: 3.75rem; --ref-size-16x-rem: 4rem; --ref-size-17x-rem: 4.25rem; --ref-size-18x-rem: 4.5rem; --ref-size-19x-rem: 4.75rem; --ref-size-20x-rem: 5rem; --sys-text-body-base: 500 14px/1.5 Inter; --sys-text-body-bold: 700 14px/1.5 Inter; --sys-text-body-semibold: 600 14px/1.4 Inter; --sys-text-heading-h1: 600 24px/1.3 Inter; --sys-text-heading-h2: 600 20px/1.3 Inter; --sys-text-heading-h3: 600 18px/1.4 Inter; --sys-text-heading-h4: 600 16px/1.4 Inter; --sys-text-heading-h4-medium: 500 18px/1.4 Inter; --sys-text-heading-h5: 500 14px/1.5 Inter; --sys-text-label-base: 500 14px/1.5 Inter; --sys-text-label-lg: 500 18px/1.4 Inter; --sys-text-label-small: 500 12px/1.6 Inter; --sys-text-secret-lg: 700 18px/1.4 Roboto Mono; --sys-text-secret-sm: 500 14px/1.5 Roboto Mono; --sys-text-secret-xxl: 700 24px/1.3 Roboto Mono; --sys-text-small: 500 12px/1.6 Inter; --sys-text-small-semibold: 600 12px/1.3 Inter; --sys-text-micro: 600 11px/1.3 Inter; --sys-text-title: 500 16px/1.5 Inter; --sys-text-title-semibold: 600 16px/1.5 Inter; --sys-color-bg-case: #000000; --sys-color-border-case: transparent; --sys-color-bg-primary: #FFFFFF; --sys-color-bg-secondary: #F7F7F8; --sys-color-bg-tertiary: #F2F2F3; --sys-color-bg-quaternary: #FFFFFF; --sys-color-on-bg-case-primary: #FFFFFF; --sys-color-on-bg-case-secondary: #A1A1A5; --sys-color-on-bg-primary: #1B1B1D; --sys-color-on-bg-secondary: #727279; --sys-color-on-bg-tertiary: #8A8A8E; --sys-color-on-bg-inverse-primary: #FFFFFF; --sys-color-on-bg-inverse-secondary: rgba(255, 255, 255, 0.6); --sys-color-on-bg-disabled: #B6B6B9; --sys-color-on-bg-placeholder: #B6B6B9; --sys-color-container-hover: rgba(17, 17, 18, 0.04); --sys-color-container-focus: rgba(17, 17, 18, 0.04); --sys-color-container-active: rgba(17, 17, 18, 0.07); --sys-color-container-disabled: rgba(17, 17, 18, 0.03); --sys-color-container-opaque-disabled: #EAEAEC; --sys-color-accent-primary: #1B1B1D; --sys-color-accent-primary-hover: #28282A; --sys-color-accent-primary-focus: #1B1B1D; --sys-color-accent-primary-active: #1B1B1D; --sys-color-accent-primary-accessible: #00AD99; --sys-color-accent-primary-accessible-hover: #19E8CC; --sys-color-accent-primary-tint-hover: rgba(27, 27, 29, 0.05); --sys-color-accent-primary-tint-focus: rgba(27, 27, 29, 0.1); --sys-color-accent-primary-tint-active: rgba(27, 27, 29, 0.15); --sys-color-accent-secondary: #FFFFFF; --sys-color-accent-secondary-hover: #F7F7F8; --sys-color-accent-secondary-focus: #F7F7F8; --sys-color-accent-secondary-active: #EAEAEC; --sys-color-accent-secondary-accessible: #252527; --sys-color-accent-secondary-accessible-hover: #39393C; --sys-color-accent-secondary-tint-hover: rgba(255, 255, 255, 0.05); --sys-color-accent-secondary-tint-focus: rgba(255, 255, 255, 0.1); --sys-color-accent-secondary-tint-active: rgba(37, 37, 39, 0.15); --sys-color-on-accent-primary: #FFFFFF; --sys-color-on-accent-primary-tint: #028378; --sys-color-on-accent-secondary: #1B1B1D; --sys-color-on-accent-secondary-tint: #252527; --sys-color-status-danger: #C01B1B; --sys-color-status-warning: #C24A00; --sys-color-status-success: #036D3F; --sys-color-status-info: #0361BF; --sys-color-status-new: #028378; --sys-color-status-danger-tint-subtle: rgba(239, 52, 52, 0.05); --sys-color-status-danger-tint: rgba(239, 52, 52, 0.6); --sys-color-status-danger-tint-hover: rgba(239, 52, 52, 0.3); --sys-color-status-danger-tint-focus: rgba(239, 52, 52, 0.85); --sys-color-status-danger-tint-active: rgba(239, 52, 52, 0.2); --sys-color-status-warning-tint-subtle: rgba(249, 102, 11, 0.05); --sys-color-status-warning-tint: rgba(249, 102, 11, 0.15); --sys-color-status-warning-tint-hover: rgba(249, 102, 11, 0.1); --sys-color-status-success-tint: rgba(1, 152, 86, 0.15); --sys-color-status-info-tint: rgba(4, 112, 220, 0.15); --sys-color-status-new-tint: rgba(0, 207, 182, 0.15); --sys-color-status-border-danger-tint-subtle: rgba(239, 52, 52, 0.3); --sys-color-status-border-danger-tint-strong: rgba(239, 52, 52, 0.6); --sys-color-status-border-warning-tint-subtle: rgba(249, 102, 11, 0.3); --sys-color-on-status-primary: #FFFFFF; --sys-color-on-status-tint: #1B1B1D; --sys-color-divider-subtle: rgba(17, 17, 18, 0.1); --sys-color-divider-strong: rgba(17, 17, 18, 0.15); --sys-color-border-subtle: rgba(17, 17, 18, 0.1); --sys-color-border-strong: rgba(17, 17, 18, 0.15); --sys-color-border-gradient-start: rgba(27, 27, 29, 0.1); --sys-color-border-gradient-end: rgba(27, 27, 29, 0.15); --sys-color-input-border: #B6B6B9; --sys-color-input-border-secondary: rgba(17, 17, 18, 0.1); --sys-color-input-border-disabled: rgba(17, 17, 18, 0.03); --sys-color-input-border-destructive: rgba(17, 17, 18, 0.1); --sys-color-input-outline-focus-primary: rgba(17, 17, 18, 0.5); --sys-color-input-outline-focus-secondary: rgba(17, 17, 18, 0.3); --sys-color-input-shadow-inner-secondary: rgba(0, 0, 0, 0.06); --sys-color-input-border-outer-gap: rgba(255, 255, 255, 0.03); --sys-color-input-border-gradient-primary-start: rgba(0, 0, 0, 0.2); --sys-color-input-border-gradient-primary-end: rgba(0, 0, 0, 0.5); --sys-color-input-border-gradient-primary-disabled-start: rgba(0, 0, 0, 0.06); --sys-color-input-border-gradient-primary-disabled-end: rgba(0, 0, 0, 0.12); --sys-color-input-border-gradient-secondary-start: rgba(27, 27, 29, 0.09); --sys-color-input-border-gradient-secondary-end: rgba(27, 27, 29, 0.15); --sys-color-input-border-gradient-secondary-disabled-start: rgba(27, 27, 29, 0.07); --sys-color-input-border-gradient-secondary-disabled-end: rgba(27, 27, 29, 0.15); --sys-color-input-border-gradient-danger-start: rgba(27, 27, 29, 0.09); --sys-color-input-border-gradient-danger-end: rgba(27, 27, 29, 0.15); --sys-color-input-border-gradient-danger-disabled-start: rgba(27, 27, 29, 0.07); --sys-color-input-border-gradient-danger-disabled-end: rgba(27, 27, 29, 0.15); --sys-shadow-color: rgba(0, 0, 0, 0.08); --sys-color-shadow-soft: rgba(0, 0, 0, 0.15); --sys-color-shadow-mid: rgba(0, 0, 0, 0.25); --sys-color-shadow-strong: rgba(0, 0, 0, 0.4); --sys-color-brand-teal: #00CFB6; --sys-color-brand-lime: #D6EF49; --sys-color-brand-forest-green: #01432B; --sys-color-brand-beige: #F5F4F1; --sys-color-input-border-error: rgba(219, 31, 31, 0.16); --sys-color-input-border-error-hover: rgba(219, 31, 31, 0.3); --sys-color-input-border-error-focus: rgba(219, 31, 31, 0.6); --sys-color-container-on-case-default: rgba(255, 255, 255, 0.15); --sys-color-container-on-case-hover: rgba(255, 255, 255, 0.2); --sys-color-container-on-case-focus: rgba(255, 255, 255, 0.2); --sys-color-container-on-case-active: rgba(255, 255, 255, 0.25); --sys-color-container-on-case-disabled: rgba(255, 255, 255, 0.12); --sys-color-container-on-case-light-hover: rgba(255, 255, 255, 0.15); --sys-color-container-on-case-light-focus: rgba(255, 255, 255, 0.15); --sys-color-container-on-case-light-active: rgba(255, 255, 255, 0.2); --sys-color-input-border-secondary-on-case: rgba(255, 255, 255, 0.08); --ref-elevation-level-1: 0 2px 2px -2px; --ref-elevation-level-5: 0 8px 12px -8px; --ref-elevation-level-8: 0 16px 16px -8px; --ref-elevation-level-10: 0 28px 24px -12; --comp-btn-height-xs: 24px; --comp-btn-width-xs: 24px; --comp-btn-height-sm: 32px; --comp-btn-width-sm: 32px; --comp-btn-border-radius-xs: 6px; --comp-btn-border-radius-sm: 8px; --comp-btn-text-sm: 500 12px/1.6 Inter; --comp-btn-text-md: 500 14px/1.5 Inter; --comp-btn-border-radius-md: 10px; --comp-btn-padding-left-md: 16px; --comp-btn-padding-right-md: 16px; --comp-btn-padding-left-sm: 12px; --comp-btn-padding-right-sm: 12px; --comp-btn-height-md: 36px; --comp-btn-text-lg: 500 14px/1.5 Inter; --comp-btn-border-radius-lg: 12px; --comp-btn-padding-left-lg: 24px; --comp-btn-padding-right-lg: 24px; --comp-btn-height-lg: 48px; --comp-btn-text-xl: 500 14px/1.5 Inter; --comp-btn-text-secondary-xl: 500 12px/1.6 Inter; --comp-btn-border-radius-xl: 12px; --comp-btn-padding-left-xl: 16px; --comp-btn-padding-right-xl: 16px; --comp-btn-height-xl: 60px; --comp-btn-padding-fab-left: 12px; --comp-btn-padding-fab-right: 12px; --comp-btn-color-bg-contained-primary: #1B1B1D; --comp-btn-color-bg-contained-primary-hover: #28282A; --comp-btn-color-bg-contained-primary-focus: #1B1B1D; --comp-btn-color-bg-contained-primary-active: #1B1B1D; --comp-btn-color-bg-contained-primary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-primary: #FFFFFF; --comp-btn-content-color-contained-primary-disabled: #B6B6B9; --comp-btn-color-bg-container-secondary: #FFFFFF; --comp-btn-color-bg-contained-secondary-hover: #F7F7F8; --comp-btn-color-bg-contained-secondary-focus: rgba(255, 255, 255, 0.1); --comp-btn-color-bg-contained-secondary-active: rgba(37, 37, 39, 0.15); --comp-btn-content-color-contained-secondary: #1B1B1D; --comp-btn-color-border-contained-secondary: rgba(0, 0, 0, 0.08); --comp-btn-color-border-contained-secondary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-color-border-contained-primary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-secondary-disabled: #B6B6B9; --comp-btn-color-bg-contained-tertiary: #FFFFFF; --comp-btn-color-bg-contained-tertiary-hover: #F7F7F8; --comp-btn-color-bg-contained-tertiary-focus: #F7F7F8; --comp-btn-color-bg-contained-tertiary-active: #EAEAEC; --comp-btn-color-bg-contained-tertiary-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-tertiary: #1B1B1D; --comp-btn-content-color-contained-tertiary-disabled: #B6B6B9; --comp-btn-color-bg-contained-danger-hover: #F7F7F8; --comp-btn-color-bg-contained-danger-focus: rgba(239, 52, 52, 0.85); --comp-btn-color-bg-contained-danger-active: rgba(239, 52, 52, 0.2); --comp-btn-color-border-contained-danger: rgba(17, 17, 18, 0.1); --comp-btn-color-border-contained-danger-disabled: rgba(17, 17, 18, 0.03); --comp-btn-content-color-contained-danger: #C01B1B; --comp-btn-content-color-contained-danger-disabled: #B6B6B9; --comp-btn-shadow-fab: 0 8px 12px -8px rgba(0, 0, 0, 0.6); --comp-btn-color-content-plain-danger: #C01B1B; --comp-btn-color-content-plain-secondary: #1B1B1D; --comp-btn-content-color-plain-disabled: #B6B6B9; --comp-btn-content-color-plain-nomode: #FFFFFF; --comp-btn-content-color-plain-nomode-disabled: rgba(255, 255, 255, 0.4); --comp-btn-color-content-plain-primary: #1B1B1D; --comp-btn-color-bg-plain-primary-hover: rgba(27, 27, 29, 0.05); --comp-btn-color-bg-plain-primary-focus: rgba(27, 27, 29, 0.1); --comp-btn-color-bg-plain-primary-active: rgba(27, 27, 29, 0.15); --comp-btn-color-bg-plain-secondary-hover: rgba(17, 17, 18, 0.04); --comp-btn-color-bg-plain-secondary-focus: rgba(255, 255, 255, 0.1); --comp-btn-color-bg-plain-secondary-active: rgba(37, 37, 39, 0.15); --comp-btn-color-bg-plain-danger-focus: rgba(239, 52, 52, 0.85); --comp-btn-color-bg-plain-danger-active: rgba(239, 52, 52, 0.2); --comp-btn-color-secondary-danger: #FFFFFF; --comp-btn-content-spacing: 4px; --comp-btn-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-btn-color-outline: rgba(17, 17, 18, 0.3); --comp-btn-group-spacing-horizontal: 8px; --comp-btn-group-spacing-vertical: 12px; --comp-btn-shadow-inner: 0 1px 0 0 rgba(0, 0, 0, 0.06); --comp-calendar-text: 500 14px/1.5 Inter; --comp-calendar-text-bold: 700 14px/1.5 Inter; --comp-calendar-date-border-radius: 9999px; --comp-calendar-color-text: #1B1B1D; --comp-calendar-color-text-secondary: #727279; --comp-calendar-date-color-text: #1B1B1D; --comp-calendar-date-color-text-hover: #1B1B1D; --comp-calendar-date-color-text-disabled: #B6B6B9; --comp-calendar-date-color-text-selected: #FFFFFF; --comp-calendar-date-color-bg-selected: #1B1B1D; --comp-calendar-date-color-border-selected: #1B1B1D; --comp-calendar-date-color-bg-current: #EAEAEC; --comp-calendar-date-color-border-current: #EAEAEC; --comp-calendar-date-color-border-hover: #1B1B1D; --comp-calendar-date-color-bg-range: #D7F5F5; --comp-loader-animation-duration: 2.4s; --comp-loader-color-stroke-neutral: #1B1B1D; --comp-loader-color-stroke-brand: #1B1B1D; --comp-snackbar-height: 44px; --comp-snackbar-border-radius: 12px; --comp-snackbar-padding-x: 16px; --comp-snackbar-content-spacing: 8px; --comp-snackbar-color-text: #FFFFFF; --comp-snackbar-text: 500 14px/1.5 Inter; --comp-snackbar-icon-color-neutral: #FFFFFF; --comp-snackbar-shadow: 0 8px 12px -8px rgba(0, 0, 0, 0.7); --comp-snackbar-color-bg: #000000; --comp-snackbar-divider-color: rgba(255, 255, 255, 0.35); --comp-snackbar-icon-color-success: #036D3F; --comp-snackbar-icon-color-danger: #C01B1B; --comp-toggle-width: 40px; --comp-toggle-height: 24px; --comp-toggle-border-radius: 9999px; --comp-toggle-padding: 2px; --comp-toggle-knob-size: 20px; --comp-toggle-color-bg-off: #CBCBCD; --comp-toggle-content-color: #FFFFFF; --comp-toggle-icon-color: #000000; --comp-toggle-color-bg-on: #1B1B1D; --comp-tooltip-color-bg: #000000; --comp-tooltip-font-size: 12px; --comp-tooltip-font-weight: 500; --comp-tooltip-line-height: 1.3; --comp-tooltip-color-text: #FFFFFF; --comp-tooltip-border-radius: 10px; --comp-tooltip-padding-horizontal-sm: 12px; --comp-tooltip-padding-vertical-sm: 8px; --comp-tooltip-padding-horizontal-md: 8px; --comp-tooltip-padding-vertical-md: 8px; --comp-tooltip-min-width: 56px; --comp-tooltip-max-width: 300px; --comp-tooltip-arrow-size: 6px; --comp-tooltip-border-color: rgba(255, 255, 255, 0.16); --comp-tooltip-arrow-left-arrow: 12.5px; --comp-tooltip-arrow-side-placement: 4px; --comp-error-block-color-danger: #C01B1B; --comp-error-block-color-warning: #C24A00; --comp-error-block-color-info: #727279; --comp-error-block-text: 500 12px/1.6 Inter; --comp-tab-height: 32px; --comp-tab-height-lg: 52px; --comp-tab-border-radius: 8px; --comp-tab-bar-border-radius: 10px; --comp-tab-bar-spacing: 0px; --comp-tab-bar-spacing-lg: 0px; --comp-tab-bar-padding-x: 12px; --comp-tab-bar-padding-x-lg: 20px; --comp-tab-bar-padding-outer: 2px; --comp-tab-bar-divider-color: rgba(17, 17, 18, 0.1); --comp-tab-bar-color-border: rgba(17, 17, 18, 0.1); --comp-tab-color-text: #727279; --comp-tab-color-text-active: #1B1B1D; --comp-tab-color-text-secondary: #727279; --comp-tab-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-tab-height-old: 36px; --comp-tab-height-lg-old: 64px; --comp-tab-bar-spacing-old: 20px; --comp-tab-bar-spacing-lg-old: 32px; --color-border-active-old: #1B1B1D; --comp-tab-color-bg: rgba(0, 0, 0, 0.03); --comp-tab-color-bg-active: #FFFFFF; --comp-tab-color-border-hover-old: rgba(0, 0, 0, 0.2); --comp-link-text: 500 14px/1.5 Inter; --comp-link-content-spacing: 4px; --comp-link-content-color: #1B1B1D; --comp-link-content-color-hover: #28282A; --comp-link-content-color-disabled: #B6B6B9; --comp-chip-height-sm: 28px; --comp-chip-height-md: 32px; --comp-chip-border-radius: 9999px; --comp-chip-text-sm: 500 12px/1.6 Inter; --comp-chip-text-md: 500 14px/1.5 Inter; --comp-chip-color-bg: #FFFFFF; --comp-chip-color-bg-error: rgba(239, 52, 52, 0.05); --comp-chip-color-bg-warning: rgba(249, 102, 11, 0.05); --comp-chip-color-bg-warning-hover: rgba(249, 102, 11, 0.1); --comp-chip-color-bg-error-hover: rgba(239, 52, 52, 0.3); --comp-chip-color-border-error: rgba(239, 52, 52, 0.3); --comp-chip-color-border-warning: rgba(249, 102, 11, 0.3); --comp-chip-icon-color: #1B1B1D; --comp-chip-icon-color-error: #C01B1B; --comp-chip-icon-color-warning: #C24A00; --comp-chip-icon-color-info: #1B1B1D; --comp-chip-color-text: #1B1B1D; --comp-chip-color-text-error: #C01B1B; --comp-chip-color-text-warning: #C24A00; --comp-chip-color-text-info: #1B1B1D; --comp-chip-color-bg-hover: #F2F2F3; --comp-chip-color-bg-info: #F7F7F8; --comp-chip-color-border: #CBCBCD; --comp-chip-color-border-info: #8A8A8E; --comp-dropdown-width-min: 180px; --comp-dropdown-border-radius: 16px; --comp-dropdown-border-radius-b2b-mobile: 10px; --comp-dropdown-item-border-radius: 10px; --comp-dropdown-section-spacing: 8px; --comp-dropdown-item-text-spacing-y: 2px; --comp-dropdown-item-color-border: rgba(17, 17, 18, 0.1); --comp-dropdown-color-border: rgba(17, 17, 18, 0.1); --comp-dropdown-color-bg: #FFFFFF; --comp-dropdown-divider-color: rgba(17, 17, 18, 0.1); --comp-dropdown-item-padding-y-default: 8px; --comp-dropdown-item-padding-x-default: 16px; --comp-dropdown-item-padding-x-menu: 12px; --comp-dropdown-item-padding-x-autofill-sm: 8px; --comp-dropdown-item-padding-x-autofill-md: 12px; --comp-dropdown-item-padding-y-autofill: 4px; --comp-dropdown-item-padding-x-b2b-mobile: 16px; --comp-dropdown-item-padding-y-b2b-mobile: 16px; --comp-dropdown-padding-default: 8px; --comp-dropdown-padding-autofill: 12px; --comp-dropdown-item-content-spacing-x: 12px; --comp-dropdown-item-content-spacing-x-menu: 8px; --comp-dropdown-item-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-dropdown-item-color-bg-focus: rgba(17, 17, 18, 0.04); --comp-dropdown-item-color-bg-active: rgba(17, 17, 18, 0.07); --comp-dropdown-color-text-primary: #1B1B1D; --comp-dropdown-color-text-secondary: #727279; --comp-dropdown-color-text-danger: #C01B1B; --comp-dropdown-color-text-disabled: #B6B6B9; --comp-slider-color-text: #1B1B1D; --comp-slider-knob-color: #1B1B1D; --comp-slider-bar-color: #EAEAEC; --comp-avatar-color-border: rgba(255, 255, 255, 0.15); --comp-avatar-size-xxs: 24px; --comp-avatar-size-xs: 28px; --comp-avatar-size-sm: 32px; --comp-avatar-size-md: 36px; --comp-avatar-size-lg: 40px; --comp-avatar-size-xl: 48px; --comp-avatar-size-xxl: 64px; --comp-avatar-border-radius-sm: 6px; --comp-avatar-border-radius-md: 8px; --comp-avatar-border-radius-lg: 10px; --comp-avatar-border-radius-xl: 12px; --comp-avatar-border-radius-xxl: 16px; --comp-avatar-border-radius-full: 9999px; --comp-avatar-color-text: #FFFFFF; --comp-avatar-text-xxs: 700 11px/1.3 Inter; --comp-avatar-text-xs: 700 11px Inter; --comp-avatar-text-sm: 700 12px Inter; --comp-avatar-text-md: 700 12px Inter; --comp-avatar-text-lg: 700 12px Inter; --comp-avatar-text-xl: 600 14px Inter; --comp-avatar-text-xxl: 600 18px Inter; --comp-avatar-icon-color: rgba(0, 0, 0, 0.3); --comp-avatar-color-bg-grey: #59595F; --comp-avatar-color-bg-yellow: #BD6800; --comp-avatar-color-bg-red: #C01B1B; --comp-avatar-color-bg-pink: #B01161; --comp-avatar-color-bg-magenta: #8D1C9C; --comp-avatar-color-bg-purple: #4C33C7; --comp-avatar-color-bg-blue: #0654A2; --comp-avatar-color-bg-teal: #028378; --comp-avatar-color-bg-green: #036D3F; --comp-avatar-color-bg-lime: #667C0F; --comp-avatar-color-bg-beige: #B0ADA8; --comp-pagination-text: 500 14px/1.5 Inter; --comp-pagination-size: 32px; --comp-pagination-border-radius: 9999px; --comp-pagination-spacing: 4px; --comp-pagination-color-text-active: #FFFFFF; --comp-pagination-color-bg-active: #1B1B1D; --comp-pagination-color-text: #1B1B1D; --comp-pagination-color-text-hover: #1B1B1D; --comp-pagination-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-pagination-nav-color: #1B1B1D; --comp-field-border-radius: 10px; --comp-field-text: 500 14px/1.5 Inter; --comp-field-text-secret: 500 14px/1.5 Roboto Mono; --comp-field-text-label: 500 14px/1.5 Inter; --comp-field-text-label-focus: 500 12px/1.6 Inter; --comp-field-text-helper: 500 12px/1.6 Inter; --comp-field-padding-left: 12px; --comp-field-padding-right: 12px; --comp-field-height: 56px; --comp-field-height-compact: 36px; --comp-field-content-spacing: 12px; --comp-field-btn-border-radius: 10px; --comp-field-color-bg-primary: #FFFFFF; --comp-field-color-bg-hover: #FFFFFF; --comp-field-color-bg-focus: #FFFFFF; --comp-field-color-bg-error: #FFFFFF; --comp-field-color-bg-disabled: rgba(17, 17, 18, 0.03); --comp-field-color-border-default: rgba(17, 17, 18, 0.1); --comp-field-color-border-disabled: rgba(17, 17, 18, 0.03); --comp-field-color-border-focus: #1B1B1D; --comp-field-color-border-error: rgba(219, 31, 31, 0.16); --comp-field-color-border-error-hover: rgba(219, 31, 31, 0.3); --comp-field-color-border-error-focus: rgba(219, 31, 31, 0.6); --comp-field-color-text-default: #1B1B1D; --comp-field-color-text-disabled: #B6B6B9; --comp-field-color-text-label: #727279; --comp-field-color-text-label-error: #C01B1B; --comp-field-color-text-helper: #727279; --comp-field-color-text-helper-error: #C01B1B; --comp-field-color-text-helper-success: #036D3F; --comp-field-color-text-placeholder: #B6B6B9; --comp-field-color-suffix-divider: rgba(17, 17, 18, 0.15); --comp-field-icon-color-default: #1B1B1D; --comp-field-icon-color-disabled: #B6B6B9; --comp-field-color-bg-clearable: #1B1B1D; --comp-field-color-text-inverted: #FFFFFF; --comp-field-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-search-bar-color-text: #A1A1A5; --comp-field-color-border-hover: #B6B6B9; --comp-field-color-text-secret-numbers: #705FF4; --comp-field-color-border-outer: #F2F2F3; --comp-field-color-border-outer-error: rgba(239, 52, 52, 0.6); --comp-search-shadow-inner: 0 -1px 0 0 rgba(0, 0, 0, 0.06); --comp-select-shadow-inner: 0 -1px 0 0 rgba(0, 0, 0, 0.06); --comp-select-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-choice-height: 20px; --comp-choice-radio-border-radius: 9999px; --comp-choice-checkbox-border-radius: 6px; --comp-choice-text: 500 14px/1.5 Inter; --comp-choice-color-bg-selected: #1B1B1D; --comp-choice-content-color: #FFFFFF; --comp-choice-content-color-disabled: #B6B6B9; --comp-choice-color-border-selected: #1B1B1D; --comp-choice-color-border: rgba(17, 17, 18, 0.1); --comp-choice-color-border-disabled: rgba(17, 17, 18, 0.03); --comp-choice-color-bg-error: #C01B1B; --comp-choice-color-border-error: #C01B1B; --comp-choice-color-text: #1B1B1D; --comp-choice-focus-outline-color-primary: rgba(17, 17, 18, 0.5); --comp-choice-focus-outline-color-secondary: rgba(17, 17, 18, 0.3); --comp-choice-shadow-outer: 0 2px 2px -2px rgba(0, 0, 0, 0.15); --comp-choice-content-spacing: 12px; --comp-choice-group-spacing-x: 24px; --comp-choice-group-spacing-y: 8px; --comp-choice-group-title-spacing-y: 12px; --comp-choice-group-title-text: 500 16px/1.5 Inter; --comp-choice-color-bg: #FFFFFF; --comp-choice-color-bg-disabled: #F2F2F3; --comp-choice-shadow-inner: 0 1px 0 0 rgba(0, 0, 0, 0.06); --comp-dialog-border-radius: 24px; --comp-dialog-text: 500 14px/1.5 Inter; --comp-dialog-text-title: 500 18px/1.4 Inter; --comp-dialog-text-title-block: 500 14px/1.5 Inter; --comp-dialog-text-subtitle: 500 12px/1.6 Inter; --comp-dialog-padding-x: 32px; --comp-dialog-padding-y: 32px; --comp-dialog-animation-ms: 150ms; --comp-dialog-color-bg: #FFFFFF; --comp-dialog-color-border: rgba(17, 17, 18, 0.1); --comp-dialog-color-text: #1B1B1D; --comp-dialog-color-text-title: #1B1B1D; --comp-dialog-color-text-subtitle: #727279; --comp-dialog-divider-color: rgba(17, 17, 18, 0.1); --comp-dialog-scrim-color-bg-visible: rgba(0, 0, 0, 0.5); --comp-dialog-scrim-color-bg-hidden: rgba(40, 40, 42, 0); --comp-skeleton-color: rgba(37, 37, 39, 0.05); --comp-stepper-spacing: 12px; --comp-stepper-indicator-group-spacing: 4px; --comp-stepper-indicator-width-past-and-future: 6px; --comp-stepper-indicator-height-past-and-future: 6px; --comp-stepper-indicator-width-present: 12px; --comp-stepper-indicator-height-present: 6px; --comp-stepper-color-text: #727279; --comp-stepper-indicator-color-past-and-present: #1B1B1D; --comp-stepper-indicator-color-future: #E0E0E1; --comp-badge-text: 500 12px/1.6 Inter; --comp-badge-text-color: #1B1B1D; --comp-badge-border-radius: 8px; --comp-badge-padding-vertical: 4px; --comp-badge-padding-horizontal: 8px; --comp-badge-height: 24px; --comp-badge-content-color-grey-inverse: #FFFFFF; --comp-badge-content-color-inverse: #FFFFFF; --comp-badge-content-bg-inverse: #1B1B1D; --comp-badge-color-border-grey: rgba(17, 17, 18, 0.1); --comp-badge-content-color-danger: #C01B1B; --comp-badge-content-color-warning: #C24A00; --comp-badge-content-color-success: #036D3F; --comp-badge-content-color-info: #0654A2; --comp-badge-content-color-new: #028378; --comp-badge-content-color-pink: #B01161; --comp-badge-content-color-purple: #4C33C7; --comp-badge-content-color-magenta: #8D1C9C; --comp-badge-content-color-grey: #39393C; --comp-badge-color-bg-danger: #FFF0F0; --comp-badge-color-bg-warning: #FFF2ED; --comp-badge-color-bg-success: #ECF8F3; --comp-badge-color-bg-info: #EBF5FF; --comp-badge-color-bg-new: #EEFFFB; --comp-badge-color-bg-pink: #FEF0F7; --comp-badge-color-bg-magenta: #FCF2FD; --comp-badge-color-bg-purple: #F6F5FF; --comp-badge-color-bg-grey: #F7F7F8; --comp-badge-color-bg-grey-inverse: #39393C; --comp-badge-color-border-pink: rgba(204, 21, 113, 0.16); --comp-badge-color-border-magenta: rgba(163, 35, 179, 0.16); --comp-badge-color-border-purple: rgba(91, 60, 229, 0.16); --comp-badge-color-border-grey-inverse: #39393C; --comp-badge-color-border-danger: rgba(219, 31, 31, 0.16); --comp-badge-color-border-warning: rgba(229, 88, 0, 0.16); --comp-badge-color-border-success: rgba(0, 132, 75, 0.16); --comp-badge-color-border-info: rgba(3, 97, 191, 0.16); --comp-badge-color-border-new: rgba(2, 131, 120, 0.16); --comp-feature-tooltip-bg-color: #5062F6; --comp-feature-tooltip-text-color: #FFFFFF; --comp-timer-color-bg: #E0E0E1; --comp-timer-color-fill-safe: #036D3F; --comp-timer-color-fill-danger: #C01B1B; --comp-system-banner-text-title: 700 14px/1.5 Inter; --comp-system-banner-text: 500 14px/1.5 Inter; --comp-status-banner-bg-opacity: 26; --comp-status-banner-bg-opacity-dark: 40; --comp-status-banner-border-radius: 12px; --comp-status-banner-padding: 16px; --comp-status-banner-padding-icon-to-text: 8px; --comp-status-banner-padding-text-to-icon: 20px; --comp-status-banner-padding-text: 2px; --comp-status-banner-color-bg-info: #0361BF26; --comp-status-banner-color-bg-success: #036D3F26; --comp-status-banner-color-bg-warning: #C24A0026; --comp-status-banner-color-bg-danger: #C01B1B26; --comp-status-banner-icon-color-info: #0361BF; --comp-status-banner-icon-color-success: #036D3F; --comp-status-banner-icon-color-warning: #C24A00; --comp-status-banner-icon-color-danger: #C01B1B; --comp-status-banner-color-text: #1B1B1D; --comp-tile-border-radius-sm: 8px; --comp-tile-border-radius-md: 10px; --comp-tile-border-radius-lg: 12px; --comp-tile-padding-sm: 12px; --comp-tile-padding-md: 16px; --comp-tile-padding-lg: 20px; --comp-tile-padding-xl: 24px; --comp-tile-content-spacing-xs: 8px; --comp-tile-content-spacing-sm: 12px; --comp-tile-content-spacing-md: 16px; --comp-tile-content-spacing-lg: 24px; --comp-tile-color-bg-default: #FFFFFF; --comp-tile-color-bg-default-variant: #F2F2F3; --comp-tile-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-tile-color-bg-focus: rgba(17, 17, 18, 0.04); --comp-tile-color-bg-active: rgba(17, 17, 18, 0.07); --comp-tile-color-text-primary: #1B1B1D; --comp-tile-color-border-subtle: rgba(17, 17, 18, 0.1); --comp-tile-color-border-strong: rgba(17, 17, 18, 0.15); --comp-breadcrumbs-text: 500 18px/1.4 Inter; --comp-breadcrumbs-height: 64px; --comp-breadcrumbs-padding-horizontal: 24px; --comp-breadcrumbs-color-text: #8A8A8E; --comp-breadcrumbs-color-text-hover: #1B1B1D; --comp-breadcrumbs-color-text-active: #1B1B1D; --comp-breadcrumbs-color-bg: #FFFFFF; --comp-table-text-header: 600 14px/1.4 Inter; --comp-table-row-height-min: 64px; --comp-table-row-height-min-compact: 72px; --comp-table-row-height-header: 40px; --comp-table-cell-padding-horizontal: 12px; --comp-table-row-padding-horizontal: 12px; --comp-table-row-padding-vertical: 12px; --comp-table-row-padding-vertical-compact: 16px; --comp-table-border-radius: 12px; --comp-table-color-text: #1B1B1D; --comp-table-color-text-secondary: #727279; --comp-table-row-divider-color: rgba(17, 17, 18, 0.1); --comp-table-row-color-bg: #FFFFFF; --comp-table-row-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-nav-width: 280px; --comp-nav-padding: 20px; --comp-nav-color-bg: #F7F7F8; --comp-nav-color-bg-hover: rgba(17, 17, 18, 0.04); --comp-nav-color-bg-active: #FFFFFF; --comp-nav-color-bg-active-hover: rgba(17, 17, 18, 0.04); --comp-nav-row-title-content-spacing: 8px; --comp-nav-row-title-color-outline: rgba(17, 17, 18, 0.5); --comp-nav-row-title-color-text: #727279; --comp-nav-row-title-border-radius: 6px; --comp-nav-row-title-spacing-x: 4px; --comp-nav-row-title-spacing-y: 4px; --comp-nav-row-height: 36px; --comp-nav-row-content-spacing: 8px; --comp-nav-row-padding-x: 8px; --comp-nav-row-border-radius: 10px; --comp-nav-row-color-border-active: rgba(17, 17, 18, 0.15); --comp-nav-list-padding-x: 8px; --comp-nav-divider-spacing: 12px; --comp-nav-divider-color: rgba(17, 17, 18, 0.1); --comp-nav-color-text: #727279; --comp-nav-color-text-active: #1B1B1D; --comp-nav-color-text-secondary: #727279; --comp-nav-color-border: rgba(17, 17, 18, 0.1); --comp-nav-icon-color: #8A8A8E; --comp-nav-icon-color-hover: #1B1B1D; --comp-nav-icon-color-active: #1B1B1D; --comp-nav-icon-color-active-hover: #1B1B1D; --comp-nav-text: 500 14px Inter; --comp-nav-text-sm: 500 12px Inter; --comp-nav-link-color-bg: #F2F2F3; --comp-nav-row-color-border-hover: rgba(17, 17, 18, 0.15); --comp-counter-border-radius: 20px; --comp-counter-color-text: #000000; --comp-counter-color-bg: #FB4646; --comp-counter-text-xs: 600 11px/1.3 Inter; --comp-counter-min-width: 16px; --comp-counter-height: 16px; --comp-counter-padding-x: 4px; --comp-key-shortcut-border-radius: 4px; --comp-key-shortcut-padding-x: 4px; --comp-key-shortcut-color-text: #FFFFFF; --comp-key-shortcut-height: 20px; --comp-key-shortcut-color-bg: #28282A; --comp-key-shortcut-color-border: #4A4A4F; --comp-illuicon-wrapper-border-radius-xs: 8px; --comp-illuicon-wrapper-border-radius-sm: 10px; --comp-illuicon-wrapper-border-radius-lg: 16px; --comp-illuicon-wrapper-size-xs: 32px; --comp-illuicon-wrapper-size-sm: 36px; --comp-illuicon-wrapper-size-lg: 64px; --comp-illuicon-size-xs: 24px; --comp-illuicon-size-sm: 28px; --comp-illuicon-size-lg: 44px; --comp-illuicon-wrapper-color-bg-brand-lime: #D6EF49; --comp-illuicon-wrapper-color-bg-brand-teal: #00CFB6; --comp-illuicon-wrapper-color-bg-neutral-light: #F7F7F8; --comp-illuicon-wrapper-color-bg-status-danger: #C01B1B; --comp-illuicon-wrapper-color-bg-status-warning: #C24A00; --comp-illuicon-wrapper-color-bg-status-success: #036D3F; --comp-illuicon-color-on-brand: #111112; --comp-illuicon-color-on-neutral-light: #111112; --comp-illuicon-color-on-neutral-transparent: #1B1B1D; --comp-illuicon-color-on-status: #FFFFFF; --comp-illuicon-wrapper-color-bg-neutral: #1B1B1D; --comp-illuicon-wrapper-color-bg-neutral-transparent: rgba(0, 0, 0, 0.03); --comp-illuicon-color-on-neutral: #FFFFFF; --comp-illuicon-wrapper-border: rgba(0, 0, 0, 0.03); --comp-empty-state-width: 336px; --comp-empty-state-padding-y-text: 4px; --comp-empty-state-padding-y-to-icon: 24px; --comp-empty-state-padding-y-to-icon-sm: 8px; --comp-empty-state-padding-y-to-buttons: 24px; --comp-empty-state-padding-y-to-buttons-sm: 12px; --comp-empty-state-color-text: #727279; --comp-empty-state-color-text-title: #1B1B1D; --comp-empty-state-text: 500 14px/1.5 Inter; --comp-empty-state-text-sm: 500 12px/1.6 Inter; --comp-empty-state-text-title: 600 20px/1.3 Inter; --comp-empty-state-text-title-md: 600 18px/1.4 Inter; --comp-empty-state-text-title-sm: 500 14px/1.5 Inter; --comp-actionbar-min-width: 400px; --comp-actionbar-max-width: 520px; --comp-actionbar-height: 48px; --comp-actionbar-border-radius: 12px; --comp-actionbar-color-text: #FFFFFF; --comp-actionbar-padding-x: 24px; --comp-actionbar-content-spacing: 12px; --comp-actionbar-text: 500 14px/1.5 Inter; --comp-btn-group-spacing-x: 8px; --comp-actionbar-color-bg: #000000; --comp-actionbar-shadow: 0 8px 12px -8px rgba(0, 0, 0, 0.25); --comp-action-bar-divider-color: rgba(255, 255, 255, 0.2); --comp-item-logo-size-xxs: 24px; --comp-item-logo-size-xs: 32px; --comp-item-logo-size-sm: 40px; --comp-item-logo-size-md: 48px; --comp-item-logo-size-xl: 56px; --comp-item-logo-size-xxl: 64px; --comp-item-logo-border-radius-xxs: 6px; --comp-item-logo-border-radius-xs: 8px; --comp-item-logo-border-radius-sm: 10px; --comp-item-logo-border-radius-md: 12px; --comp-item-logo-border-radius-xl: 14px; --comp-item-logo-border-radius-xxl: 16px; --comp-suitcase-card-color-bg: #F7F7F8; --comp-suitcase-card-padding: 4px; --comp-suitcase-card-border-radius: 16px; --comp-suitcase-card-spacing: 4px; --comp-suitcase-card-actions-spacing: 8px; --comp-suitcase-card-header-spacing: 16px; --comp-suitcase-card-header-padding-y: 20px; --comp-suitcase-card-header-padding-x: 24px; --comp-suitcase-card-text-title: 600 16px/1.4 Inter; --comp-suitcase-card-color-text-title: #1B1B1D; --comp-suitcase-card-text-description: 500 12px/1.6 Inter; --comp-suitcase-card-color-text-description: #8A8A8E; --comp-security-icon-bg-color: #FFFFFF; --comp-security-icon-color-on-neutral: #1B1B1D; --comp-security-icon-bg-color-danger: #C01B1B; --comp-security-icon-color-on-danger: #FFFFFF; --comp-security-icon-padding: 8px; --comp-security-icon-border-radius: 9999px; --comp-security-icon-border-color: rgba(17, 17, 18, 0.1); --comp-security-icon-size: 40px; --comp-section-bg-color: #FFFFFF; --comp-section-padding-xs: 8px; --comp-section-padding-sm: 12px; --comp-section-padding-md: 16px; --comp-section-padding-lg: 24px; --comp-section-border-radius: 12px; --comp-section-row-divider-color: rgba(17, 17, 18, 0.1); --comp-section-row-spacing: 16px; --comp-section-row-icon-color: #1B1B1D; --comp-section-text-title: 600 16px/1.4 Inter; --comp-section-text-color-title: #1B1B1D; --comp-section-text-subtitle: 500 12px/1.6 Inter; --comp-section-text-subtitle-color-neutral: #8A8A8E; --comp-section-text-subtitle-color-danger: #C01B1B; --comp-numbered-list-row-number-size: 24px; --comp-numbered-list-row-number-border-radius: 9999px; --comp-numbered-list-border-radius: 9999px; --comp-numbered-list-marker-bg: rgba(17, 17, 18, 0.05); --comp-numbered-list-marker-color: #1B1B1D; --comp-numbered-list-color-text: #1B1B1D; --comp-btn-color-bg-contained-secondary-on-case: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-contained-secondary-on-case-hover: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-contained-secondary-on-case-focus: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-contained-secondary-on-case-active: rgba(255, 255, 255, 0.25); --comp-btn-color-border-contained-secondary-on-case: rgba(255, 255, 255, 0.08); --comp-btn-content-color-contained-secondary-on-case: #A1A1A5; --comp-btn-content-color-contained-secondary-on-case-interaction: #FFFFFF; --comp-btn-color-bg-plain-on-case-hover: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-plain-on-case-focus: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-plain-on-case-active: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-plain-on-case-open: rgba(255, 255, 255, 0.15); --comp-btn-color-bg-plain-on-case-open-hover: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-plain-on-case-open-focus: rgba(255, 255, 255, 0.2); --comp-btn-color-bg-plain-on-case-open-active: rgba(255, 255, 255, 0.25); --comp-btn-content-color-plain-on-case: #A1A1A5; --comp-btn-content-color-plain-on-case-interaction: #FFFFFF; --comp-btn-color-outline-secondary: rgba(255, 255, 255, 0.35); --comp-btn-shadow-outer-on-case: 0 2px 2px -2px rgba(0, 0, 0, 0.6); --comp-btn-shadow-inner-on-case: 0 -1px 0 0 rgba(255, 255, 255, 0.1);"><span
                                          class="absolute block"
                                          style="z-index: 1; transform: scale(1); left: 1337px; top: 4483.5px; visibility: visible;"><button
                                                type="button"
                                                class="inline-flex h-6 w-[38px] cursor-pointer items-center rounded-[36px] border border-solid border-[#00000029] bg-[--ref-color-grey-0] px-1 shadow-[0px_0.5px_1px_0px_rgba(0,0,0,0.12)] hover:bg-[#f2f2f2]"><svg
                                                 width="18"
                                                 height="14"
                                                 class="np-ui-icon mt-[-2px]"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 18 15">
                                                <path d="M11.3024 8.08593L11.3953 8.51919L9.21628 4.76043L9.00144 4.38981L8.78444 4.75918L6.94695 7.88699L6.89767 7.97088L6.91806 8.06601L7.01571 8.52168L6.24953 7.20154L6.03879 6.83844L5.81995 7.19671L1.70048 13.9409C0.78388 12.546 0.25 10.8731 0.25 9.07364C0.25 4.19856 4.16943 0.25 9 0.25C13.8306 0.25 17.75 4.19856 17.75 9.07364C17.75 10.873 17.2161 12.5459 16.2995 13.9409L12.1777 7.19266L11.9601 6.83653L11.7488 7.19635L11.3313 7.90691L11.282 7.9908L11.3024 8.08593Z"
                                                      fill="#00CFB6"
                                                      stroke="#00AD99"
                                                      stroke-width="0.5"></path>
                                            </svg><svg width="9"
                                                 height="10"
                                                 class="np-ui-icon ml-px text-[#1F1F1F]"
                                                 fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 7 9">
                                                <path d="M6 3.58535C6.5826 3.79127 7 4.34689 7 5V7C7 7.82843 6.32843 8.5 5.5 8.5H1.5C0.671573 8.5 0 7.82843 0 7V5C0 4.34689 0.417404 3.79127 1 3.58535V2.5C1 1.12167 2.12167 0 3.5 0C4.87833 0 6 1.12167 6 2.5V3.58535ZM4.75 3.5V2.5C4.75 1.81083 4.18917 1.25 3.5 1.25C2.81083 1.25 2.25 1.81083 2.25 2.5V3.5H4.75Z"
                                                      fill="currentColor"></path>
                                            </svg></button></span></icon-container>
                            </template></nordpass-icon>
                    </div>

                    <div class="form_field_container">
                        <p>Do you or a loved one have a prescription for oxygen?</p>
                        <div>
                            <input name="prescribed_o2_patient"
                                   id="prescribed_o2_patient"
                                   type="hidden"
                                   value="">
                            <input name="prescribed_o2_patient_yes"
                                   class="form_button_white prescribed_o2_patient_button"
                                   type="button"
                                   id="rx_yes"
                                   value="Yes">
                            <input name="prescribed_o2_patient_no"
                                   class="form_button_white prescribed_o2_patient_button"
                                   type="button"
                                   id="rx_no"
                                   value="No">
                        </div>
                    </div>

                    <div class="form_field_container">
                        <p>
                            <label class="checkbox_container term_link">I agree to Inogen’s <a href="/terms-of-use/"
                                   target="_blank">Terms of Use</a> and authorize Inogen to contact me including by
                                phone and sms text messaging.
                                <input type="checkbox"
                                       name="terms"
                                       required="required">
                                <span class="checkmark"></span>
                            </label>
                        </p>
                    </div>

                    <div class="form_system_error">
                        <h2>System Error</h2>
                        <p>We are currently experiencing technical difficulties. Please try submitting your information
                            again or call us at:<br><br>855-MY-INOGEN (855-694-6643)</p>
                    </div>

                    <div>
                        <input type="submit"
                               class="form_button inogen-button-orange"
                               value="Get My Free Guide"
                               style="width:100%"
                               disabled="disabled">
                        <div class="form_button_loading"
                             style="display:none"><i class="fas fa-spinner fa-pulse"></i></div>
                    </div>

                </fieldset>

                <fieldset class="lead_form_page lead_form_page4">

                    <p>Your information has been received and a representative will contact you soon!</p>
                    <p>If you would prefer to speak to an Inogen representative now, please call (toll-free):</p>
                    <div class="lead_form_thankyou_centered">
                        <div class="header__phone">
                            855-MY-INOGEN </div>

                        <div class="numeric_vanity_phone_number">(855-694-6643)</div>

                        <p>
                            <a class="form_button download_link"
                               href="//cdn.inogen.com/mobility/pdf/Inogen%20Doctor%20Discussion%20Guide.pdf"
                               target="_blank">DOWNLOAD GUIDE NOW</a>
                        </p>
                    </div>

                </fieldset>

                <div class="form_footer">
                    <p>We take your privacy concerns seriously.<br>
                        <a href="/privacy/">Learn more about our privacy policy.</a>
                    </p>
                </div>
                <input type="hidden"
                       name="xxTrustedFormCertUrl"
                       value="https://cert.trustedform.com/1261cc272a0869d484727cb65692c684a194e168"
                       id="xxTrustedFormCertUrl_0"><input type="hidden"
                       name="xxTrustedFormToken"
                       value="https://cert.trustedform.com/1261cc272a0869d484727cb65692c684a194e168"
                       id="xxTrustedFormToken_0"><input type="hidden"
                       name="xxTrustedFormPingUrl"
                       value="https://ping.trustedform.com/0.N7STT_PmFX0k8ZkiAGE9PsOBTuEFrLgsgT7SF7PfkiD2KuT9oi_RanvqQ_uT3BDbag3rwqE.jx8ilxq-SOCNj62N4Rgggw.oNrcWzg68vgBWdgmA-MCjA"
                       id="xxTrustedFormPingUrl_0">
            </form>
        </div>
    </div>
</div>
 <div class="inogen-scope">
    <div class="inogen-row-top">
      <div class="inogen-card inogen-spotlight">
        <div class="inogen-copy">
          <div class="inogen-eyebrow">Product Spotlight</div>
          <h2>Inogen Rove 6</h2>
          <a href="/product/rove6-system/" class="inogen-btn">Shop now</a>
        </div>
        <div class="inogen-media">
          <img src="https://useruploads.vwo.io/useruploads/1054833/images/2a1b0349985786fd48bc6b3334790832_rove6.png" alt="Inogen Rove 6">
        </div>
      </div>

      <div class="inogen-card inogen-talk">
        <div>
          <h3>Talk to us</h3>
          <p>Call now to speak to an Inogen representative to learn more about our products.</p>
          <a href="tel:844-632-6610">844-632-6610</a>
        </div>
        <div class="inogen-media">
          <img src="//useruploads.vwo.io/useruploads/1054833/images/acfd4505302afd7c708daa6d2cff2074_rectangle351.png" alt="Talk to us">
        </div>
      </div>
    </div>

    <div class="inogen-card inogen-find">
      <h2>Find your Inogen</h2>
      <p>Our lightweight, easy-to-use stationary and portable oxygen concentrators help you move about your home—and out and about in the world!</p>
      <a href="#free-form-guide" class="inogen-btn">Free info guide</a>
    </div>
  </div>
  <section class="testimonials" aria-labelledby="testimonials-title">
  <div class="testimonials__header">
    <h2 id="testimonials-title" class="testimonials__heading">
      What our customers say about us
    </h2>
    <a href="/oxygen-therapy/customer-stories/" class="testimonials__cta">Explore Customers Stories</a>
  </div>

  <div class="testimonials__grid">
    <article class="testimonial-card">
      <h3 class="testimonial-card__name">Debra L.</h3>
      <p class="testimonial-card__quote">
        “Loved working with the representative. My Rove 6 and my home units are both great.”
      </p>
      <div class="testimonial-card__footer">
        <span class="testimonial-card__product">Rove 6</span>
        <img
          src="//useruploads.vwo.io/useruploads/1054833/images/b5759fd5344cb01ad3755669e63250d5_rove6small.png"
          alt="Rove 6 device"
          class="testimonial-card__image"
          loading="lazy"
        />
      </div>
    </article>

    <article class="testimonial-card">
      <h3 class="testimonial-card__name">Molly S.</h3>
      <p class="testimonial-card__quote">
        “I love the improved freedom I have. The battery life lives up to what was promised.”
      </p>
      <div class="testimonial-card__footer">
        <span class="testimonial-card__product">Rove 4</span>
        <img
          src="//useruploads.vwo.io/useruploads/1054833/images/ae76ff58f720f0abb38498138cea31be_rove4small.png"
          alt="Rove 4 device"
          class="testimonial-card__image"
          loading="lazy"
        />
      </div>
    </article>

    <article class="testimonial-card">
      <h3 class="testimonial-card__name">Francis L.</h3>
      <p class="testimonial-card__quote">
        “Not only does the Inogen work really well, the batteries last long and we are starting
        to relax when we have to go places further from home… Just wish we would have gotten one sooner.”
      </p>
      <div class="testimonial-card__footer">
        <span class="testimonial-card__product">Voxi 5</span>
        <img
          src="//useruploads.vwo.io/useruploads/1054833/images/30293762632ec0f46c17b102cbea664f_voxi5small.png"
          alt="Voxi 5 device"
          class="testimonial-card__image"
          loading="lazy"
        />
      </div>
    </article>
  </div>
</section>
<section class="inogen-intro" aria-labelledby="inogen-intro__title">
  <div class="inogen-intro__container">
    <figure class="inogen-intro__media">
      <img
        class="inogen-intro__image"
        src="https://useruploads.vwo.io/useruploads/1054833/images/eed105f74e104fda0b604d1cbbe3e3d4_inogenprovides10.jpg"
        alt="Two people sitting and talking, demonstrating portable oxygen use"
        loading="lazy"
        decoding="async"
      />
    </figure>

    <div class="inogen-intro__content">
      <h2 id="inogen-intro__title" class="inogen-intro__heading">
        Inogen provides oxygen concentrator solutions for both portable and stationary use
      </h2>

      <p class="inogen-intro__paragraph">
        Our Inogen® portable oxygen concentrators were developed to be small, light, and quiet for use at home or while traveling.
        This innovative product family has been thoughtfully designed for patients seeking lightweight devices such as a portable oxygen
        concentrator. With two models available for purchase — the <strong>Inogen® Rove 4™</strong> and <strong>Inogen® Rove 6™</strong> —
        Inogen® portable concentrators provide supplemental oxygen “on-the-go”¹.
      </p>

      <p class="inogen-intro__paragraph">
        For stationary oxygen therapy, the Inogen At Home® provides continuous flow oxygen up to 5 liters per minute in a small,
        compact and light design. Learn more about the <strong>Inogen At Home®</strong> below. The <strong>NEW Inogen® Voxi™ 5</strong>,
        starting at $795, provides a valuable option for a stationary oxygen concentrator. Learn more about Inogen’s stationary
        solutions below.
      </p>
    </div>
  </div>
</section>



`;

export default () => {
  setup(); //use if needed
  console.log(ID);

  const main = document.getElementById('main');
  if (!main) {
    console.warn('No #main');
    return;
  }

  Array.from(main.children).forEach((childElement) => {
    const element = childElement;
    element.style.display = 'none';
  });
  if (document.querySelector('.hero')) {
    document.querySelector('.hero').remove();
  }
  if (document.querySelector('.sec183')) {
    document.querySelector('.sec183').remove();
  }
  //make sure no duplicates

  main.insertAdjacentHTML('beforebegin', heroSection);
  main.insertAdjacentHTML('beforebegin', productCardsSection);

  const grid = document.querySelector('.sec183__grid');
  if (!grid) return;

  const swap = (imgParam, toAlt) => {
    const img = imgParam;
    img.closest('article').classList.toggle('swap-image', toAlt);
    const alt = img.getAttribute('data-alt-src');
    if (!alt) return;
    if (!img.dataset.orig) img.dataset.orig = img.src;
    img.src = toAlt ? alt : img.dataset.orig;
  };

  grid.addEventListener('mouseover', (e) => {
    const img = e.target.closest('.sec183__img');
    if (img) swap(img, true);
  });
  grid.addEventListener('mouseout', (e) => {
    const img = e.target.closest('.sec183__img');
    if (img) swap(img, false);
  });
  //Keyboard accessibility
  grid.addEventListener('focusin', (e) => {
    const img = e.target.closest('.sec183__img');
    if (img) swap(img, true);
  });
  grid.addEventListener('focusout', (e) => {
    const img = e.target.closest('.sec183__img');
    if (img) swap(img, false);
  });

  //progressive lead form

  let lead_form_on_page = false;
  let lead_form_started = false;
  let lead_form_name_valid = false;
  let lead_form_phone_valid = false;
  let lead_form_email_valid = false;
  let lead_form_valid = false;
  let lead_form_campaign = '';
  let lead_form_utm_campaign = '';
  let lead_form_campaign_phone = '';
  let lead_form_trusted_form_cert_url = '';

  jQuery(document).ready(($) => {
    //Forms
    $('.prescribed_o2_patient_button').on('click', function () {
      const button = $(this);
      const value = button.val();
      button.parent().find('.prescribed_o2_patient_button').removeClass('active');
      button.addClass('active');
      button.parent().find("input[name='prescribed_o2_patient']").val(value);

      const form = $(this).parents('form');
      const current_page = $(form).attr('data-page');
      console.log(`current_page: ${current_page}`);

      if (validate_form(form, current_page)) {
        $(form).find("input[type='submit']").removeAttr('disabled');
      } else {
        $(form).find("input[type='submit']").attr('disabled', 'disabled');
      }
    });

    $("form.lead_form input[type='tel']").keyup(function (e) {
      $(this).val(formatUSNumber($(this).val()));
    });

    $("form.lead_form input[name='zip']").keyup(function (e) {
      $(this).val(formatZip($(this).val()));
    });

    $('form.lead_form input').on('change', function (event) {
      console.log(`input changed: ${$(this).val()}`);
      const form = $(this).parents('form');
      const current_page = $(form).attr('data-page');
      console.log(`current_page: ${current_page}`);

      if ($(this).attr('name') == 'prescribed_o2_patient') {
        if (
          typeof $(form)
            .find(`input[name="${$(this).attr('name')}"]:checked`)
            .val() !== 'undefined' &&
          $(form)
            .find(`input[name="${$(this).attr('name')}"]:checked`)
            .val() != ''
        ) {
          if (
            $(form)
              .find(`input[name="${$(this).attr('name')}"]:checked`)
              .val() == 'Yes'
          ) {
            //hide & unselect Is your prescription less than 6 liters per minute? N/A option
            $(form).find('.checkbox_container.under_6lpm_na').hide();
            $(form).find('.checkbox_container.under_6lpm_na input').prop('checked', false);

            //show Is your prescription less than 6 liters per minute? Yes & No options
            $(form).find('.checkbox_container.under_6lpm_yes').show();
            $(form).find('.checkbox_container.under_6lpm_no').show();
          } else if (
            $(form)
              .find(`input[name="${$(this).attr('name')}"]:checked`)
              .val() == 'No'
          ) {
            //show & select Is your prescription less than 6 liters per minute? N/A option
            $(form).find('.checkbox_container.under_6lpm_na').show();
            $(form).find('.checkbox_container.under_6lpm_na input').prop('checked', true);

            //hide Is your prescription less than 6 liters per minute? Yes & No options
            $(form).find('.checkbox_container.under_6lpm_yes').hide();
            $(form).find('.checkbox_container.under_6lpm_no').hide();
          }
        }
      }

      if (validate_form(form, current_page)) {
        $(form).find("input[type='submit']").removeAttr('disabled');
      } else {
        $(form).find("input[type='submit']").attr('disabled', 'disabled');
      }
    });

    $('form.lead_form').on('submit', function (event) {
      event.preventDefault();

      const form = $(this);
      const current_page = $(this).attr('data-page');

      //error checking
      if (validate_form(form, current_page)) {
        const data = $(this).serializeArray();

        //add event_source_url
        const event_source_url = window.location.href;
        data.push({
          name: 'event_source_url',
          value: event_source_url
        });

        console.log('data:\n');
        console.dir(data);

        //submit form

        //show loading icon

        $(this).find('input[type="submit"]').hide();
        $(this).find('.form_button_loading').show();

        $.post('/wp-content/themes/inogen/assets/js/ajax/lead_form.php', data)
          .done((data) => {
            //hide/reset system error message (if it was showing)
            $('.form_system_error').hide();

            const response = JSON.parse(data);
            if (response.outcome == 'failure') {
              switch (response.reason) {
                case 'lead.phone_1 must have valid format':
                case 'Bad phone number':
                  $(form)
                    .find("fieldset.lead_form_page1 input[name='phone']")
                    .parent()
                    .addClass('form_field_error');
                  $(form)
                    .find("fieldset.lead_form_page1 input[name='phone']")
                    .siblings('.form_field_error_message')
                    .remove();
                  $(form)
                    .find("fieldset.lead_form_page1 input[name='phone']")
                    .parent()
                    .append(
                      '<div class="form_field_error_message">This phone number is invalid</div>'
                    );
                  $(form).find('.form_button').show();
                  $(form).find('.form_button_loading').hide();
                  break;
                //case 'lead.trustedform_cert_url must not be blank':
                //break;
                default:
                  //technical difficulties
                  $('.form_system_error').show();
              }
              console.log(`error submitting form: ${response.reason}`);
            } else {
              //successfully submitted form
              console.log('form successfully submitted');

              //set a cookie that lasts for 180 days to track the timestamp of the successful lead submission
              const leadSubmissionTimestamp = new Date().getTime();
              document.cookie = `lead_form_submitted=${leadSubmissionTimestamp}; path=/; max-age=${
                180 * 24 * 60 * 60
              }`;

              //trigger successful new lead pixels/tracking
              console.log('successful new lead, triggering pixels/tracking');

              if (typeof response.lead !== 'undefined' && typeof response.lead.id !== 'undefined') {
                console.log(`lead ID: ${response.lead.id}`);

                //Accutrak Analytics
                const Accutrak_script = document.createElement('script');
                Accutrak_script.innerHTML = `var Accutrak_custom = Accutrak_custom || {}; Accutrak_custom.visitor_keys_cookie = ['leadid']; Accutrak_custom.visitor = {leadid: '${cleanLeadConduitID(
                  response.lead.id
                )}'};  Accutrak.log('https://www.inogen.com/', 'Lead', 'pageview');`;
                document.head.appendChild(Accutrak_script);
                Accutrak.goal('6933');

                //google conversion events
                const prescription_for_oxygen =
                  $(form).find("input[name='prescribed_o2_patient']").val() == 'Yes' ? 'yes' : 'no';
                console.log(`prescription_for_oxygen: ${prescription_for_oxygen}`);
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'conversion',
                  'Prescription for Oxygen': prescription_for_oxygen
                });
              }

              if (window.location.pathname.indexOf('/lp/') == -1) {
                //not on landing page

                //change to next page
                switch (current_page) {
                  case '1':
                    $(form).find('.lead_form_page1').hide();
                    $('.lead_form_header').html('Thank You!');
                    $(form).find('.form_button_loading').hide();
                    $(form).find('.lead_form_page2').hide();
                    $(form).find('.lead_form_page3').hide();
                    $(form).find('.lead_form_page4').show();
                    $('.form_thank_you_message').show();

                    break;
                }
              } else {
                //on landing page - redirect to thank you page

                //add any query string parameters to the thank you page url
                let query_string = window.location.search;

                //add a lead ID parameter to the thank you page url
                //expected successful response: {"outcome":"success","lead":{"id":"68c305c712ccda575b3dd3a9"},"price":0}
                if (
                  typeof response.lead !== 'undefined' &&
                  typeof response.lead.id !== 'undefined'
                ) {
                  if (query_string.length > 0) query_string += `&leadid=${response.lead.id}`;
                  else query_string = `?leadid=${response.lead.id}`;
                }

                //get preferred language
                let preferred_language = 'English';
                if (
                  typeof jQuery(form).find("input[name='preferred_language']").val() !==
                    'undefined' &&
                  jQuery(form).find("input[name='preferred_language']").val() != ''
                ) {
                  preferred_language = jQuery(form)
                    .find("input[name='preferred_language']")
                    .val()
                    .trim();
                }

                if (preferred_language == 'Spanish')
                  window.location.href = `/thankyou-spanish/${query_string}`;
                else window.location.href = `/thankyou/${query_string}`;
              }

              //track in mixpanel

              const lead_form_utm_campaign = getCookie('inogen_utm_campaign');
              const lead_form_campaign = getCookie('inogen_campaign');
              const lead_form_campaign_phone = getCookie('inogen_campaign_phone');
              const lead_form_trusted_form_cert_url =
                $(form).find("input[name='xxTrustedFormCertUrl']").val() || '';

              if (typeof response.lead !== 'undefined' && typeof response.lead.id !== 'undefined') {
                try {
                  mixpanel.track('New Lead', {
                    lead_id: response.lead.id,
                    form_location: $(form).find("input[name='form_location']").val() || 'unknown',
                    campaign: lead_form_campaign,
                    utm_campaign: lead_form_utm_campaign,
                    campaign_phone: lead_form_campaign_phone,
                    trusted_form_cert_url: lead_form_trusted_form_cert_url
                  });
                } catch (err) {
                  console.warn(`error tracking new lead in mixpanel: ${err.message}`);
                }
              }
            }
          })
          .fail(() => {
            //error submitting form - display unavailable message with phone number
            $('.form_system_error').show();
          });
      }
    });
  });

  jQuery(window).on('load', ($) => {
    setTimeout(() => {
      //check if TrustedForm script has loaded
      if (typeof window.trustedForm === 'undefined') {
        console.warn('TrustedForm script did not load');
      }

      //check if all trustedform forms have a certificate url set for them
      jQuery('.trustedform').each(function () {
        if (lead_form_on_page === false) {
          //if form id is "popup-header-form" then ignore it as it's not a real lead form
          if (jQuery(this).attr('id') == 'popup-header-form') {
            //ignore popup forms until they are displayed
          } else {
            //a lead form is present on the page
            lead_form_on_page = true;

            if (typeof getCookie !== 'function') {
              function getCookie(name) {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length == 2) return parts.pop().split(';').shift();
              }
              lead_form_campaign = getCookie('inogen_campaign');
              lead_form_utm_campaign = getCookie('inogen_utm_campaign');
              lead_form_campaign_phone = getCookie('inogen_campaign_phone');
            } else {
              lead_form_campaign = getCookie('inogen_campaign');
              lead_form_utm_campaign = getCookie('inogen_utm_campaign');
              lead_form_campaign_phone = getCookie('inogen_campaign_phone');
            }

            //track lead form on page in mixpanel
            try {
              console.log('tracking lead form on page in mixpanel');
              mixpanel.track('Lead Form Page View', {
                form_location: jQuery(this).find("input[name='form_location']").val() || 'unknown',
                campaign: lead_form_campaign,
                campaign_phone: lead_form_campaign_phone,
                utm_campaign: lead_form_utm_campaign
              });
            } catch (err) {
              console.warn(`error tracking in mixpanel: ${err.message}`);
            }
          }
        }

        const tf_cert = jQuery(this).find("input[name='xxTrustedFormCertUrl']");
        if (tf_cert.length == 1) {
          jQuery(tf_cert).each(function () {
            console.log(`trustedform certificate url: ${jQuery(this).val()}`);
          });
        } else {
          console.log('certificate not set, attempting to load trustedform script again');

          (function trustedFormLoader() {
            const formId = '.trustedform';
            const field = 'xxTrustedFormCertUrl';
            const provideReferrer = false;
            const invertFieldSensitivity = false;
            const tf = document.createElement('script');
            tf.type = 'text/javascript';
            tf.async = true;
            tf.src = `http${
              document.location.protocol === 'https:' ? 's' : ''
            }://api.trustedform.com/trustedform.js?form_selector=${escape(
              formId
            )}&provide_referrer=${escape(provideReferrer)}&field=${escape(
              field
            )}&l=${new Date().getTime()}${Math.random()}&invert_field_sensitivity=${invertFieldSensitivity}`;
            const s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(tf, s);
            //console.log("tf: "+tf.src);

            //success event
            tf.addEventListener('load', () => {
              console.log('trustedform script now loaded');

              setTimeout(() => {
                //confirm a certificate url has been set
                jQuery('.trustedform').each(function eachTrustedForm() {
                  const tf_cert_inner = jQuery(this).find("input[name='xxTrustedFormCertUrl']");
                  if (tf_cert_inner.length === 1) {
                    jQuery(tf_cert_inner).each(function eachCertInput() {
                      console.log(
                        `trustedform certificate url looking better now!!! ${jQuery(this).val()}`
                      );
                    });
                  } else {
                    console.warn('trustedform certificate url still not set');
                  }
                });
              }, 2000);
            });
          })();
        }
      });
    }, 3000);
  });

  function validate_form(form, page) {
    console.log('validating form');
    let valid = true;

    if (lead_form_trusted_form_cert_url == '') {
      lead_form_trusted_form_cert_url =
        jQuery(form).find("input[name='xxTrustedFormCertUrl']").val() || '';
    }

    if (lead_form_started === false) {
      console.log('first time validating the form, tracking lead form started in mixpanel');
      lead_form_started = true;

      /*
		try {
			console.log("tracking lead form started in mixpanel");
			mixpanel.track("Lead Form Started", {
				"form_location": jQuery(form).find("input[name='form_location']").val() || "unknown",
				"campaign": lead_form_campaign,
				"campaign_phone": lead_form_campaign_phone,
				"trusted_form_cert_url": lead_form_trusted_form_cert_url
			});
		} catch(err) {
			console.warn("error tracking in mixpanel: " + err.message);
		}
		*/
    }

    //confirm a value is set for each field in the fieldset
    jQuery(form)
      .find(`fieldset.lead_form_page${page} input`)
      .each(function (index) {
        const field_type = jQuery(this).attr('type');

        console.log(`checking: ${jQuery(this).attr('name')} ...`);

        switch (field_type) {
          case 'checkbox':
            if (jQuery(this).attr('required') == 'required') {
              if (jQuery(this).prop('checked')) {
                //valid
              } else {
                //missing required checkbox
                console.log(`${jQuery(this).attr('name')} is not checked`);
                valid = false;
              }
            }
            break;
          case 'radio':
            var radio_button_name = jQuery(this).attr('name');

            if (jQuery(this).attr('required') == 'required') {
              if (
                typeof jQuery(form).find(`input[name="${radio_button_name}"]:checked`).val() !==
                  'undefined' &&
                jQuery(form).find(`input[name="${radio_button_name}"]:checked`).val() != ''
              ) {
                //valid
                console.log(
                  `${jQuery(this).attr('name')} selected value is [${jQuery(form)
                    .find(`input[name="${radio_button_name}"]:checked`)
                    .val()}]`
                );
              } else {
                //missing required checkbox
                console.log(`${jQuery(this).attr('name')} is not checked`);
                valid = false;
              }
            }

            break;
          default:
            if (typeof jQuery(this).val() === 'undefined' || jQuery(this).val() == '') {
              console.log(`${jQuery(this).attr('name')} is blank`);
              valid = false;
            } else {
              console.log(`${jQuery(this).attr('name')} has a value: [${jQuery(this).val()}]`);
            }
        }
      });

    if (true) {
      //error messages

      //get preferred language
      let preferred_language = 'English';
      if (
        typeof jQuery(form).find("input[name='preferred_language']").val() !== 'undefined' &&
        jQuery(form).find("input[name='preferred_language']").val() != ''
      ) {
        preferred_language = jQuery(form).find("input[name='preferred_language']").val().trim();
      }

      //full name must be at least two parts
      if (
        typeof jQuery(form).find(`fieldset.lead_form_page${page} input[name='full_name']`).val() !==
          'undefined' &&
        jQuery(form).find(`fieldset.lead_form_page${page} input[name='full_name']`).val() != ''
      ) {
        if (
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='full_name']`)
            .val()
            .trim()
            .split(' ').length < 2
        ) {
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='full_name']`)
            .parent()
            .addClass('form_field_error');
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='full_name']`)
            .siblings('.form_field_error_message')
            .remove();
          if (preferred_language == 'English') {
            jQuery(form)
              .find(`fieldset.lead_form_page${page} input[name='full_name']`)
              .parent()
              .append('<div class="form_field_error_message">Please enter your full name</div>');
          } else if (preferred_language == 'Spanish') {
            jQuery(form)
              .find(`fieldset.lead_form_page${page} input[name='full_name']`)
              .parent()
              .append(
                '<div class="form_field_error_message">Por favor ingrese su nombre completo</div>'
              );
          }
          valid = false;
        } else {
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='full_name']`)
            .parent()
            .removeClass('form_field_error');
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='full_name']`)
            .siblings('.form_field_error_message')
            .remove();
          if (lead_form_name_valid === false) {
            lead_form_name_valid = true;
            /*
					try {
						console.log("tracking lead form started in mixpanel");
						mixpanel.track("Name Valid", {
							"form_location": jQuery(form).find("input[name='form_location']").val() || "unknown",
							"campaign": lead_form_campaign,
							"campaign_phone": lead_form_campaign_phone,
							"trusted_form_cert_url": lead_form_trusted_form_cert_url
						});
					} catch(err) {
						console.warn("error tracking in mixpanel: " + err.message);
					}
					*/
          }
        }
      }

      //validate email format
      if (
        typeof jQuery(form).find(`fieldset.lead_form_page${page} input[name='email']`).val() !==
          'undefined' &&
        jQuery(form).find(`fieldset.lead_form_page${page} input[name='email']`).val() != ''
      ) {
        const valid_email_regex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='email']`)
            .val()
            .trim()
            .match(valid_email_regex)
        ) {
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='email']`)
            .parent()
            .removeClass('form_field_error');
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='email']`)
            .siblings('.form_field_error_message')
            .remove();
          if (lead_form_email_valid === false) {
            lead_form_email_valid = true;
            /*
					try {
						console.log("tracking lead form started in mixpanel");
						mixpanel.track("Email Valid", {
							"form_location": jQuery(form).find("input[name='form_location']").val() || "unknown",
							"campaign": lead_form_campaign,
							"campaign_phone": lead_form_campaign_phone,
							"trusted_form_cert_url": lead_form_trusted_form_cert_url
						});
					} catch(err) {
						console.warn("error tracking in mixpanel: " + err.message);
					}
					*/
          }
        } else {
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='email']`)
            .parent()
            .addClass('form_field_error');
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='email']`)
            .siblings('.form_field_error_message')
            .remove();
          if (preferred_language === 'English') {
            jQuery(form)
              .find(`fieldset.lead_form_page${page} input[name='email']`)
              .parent()
              .append(
                '<div class="form_field_error_message">Please enter a valid email address</div>'
              );
          } else if (preferred_language == 'Spanish') {
            jQuery(form)
              .find(`fieldset.lead_form_page${page} input[name='email']`)
              .parent()
              .append(
                '<div class="form_field_error_message">Por favor ingrese una dirección de correo electrónico válida</div>'
              );
          }
          valid = false;
        }
      }

      //validate phone number
      if (
        typeof jQuery(form).find(`fieldset.lead_form_page${page} input[name='phone']`).val() !==
          'undefined' &&
        jQuery(form).find(`fieldset.lead_form_page${page} input[name='phone']`).val() != ''
      ) {
        if (
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='phone']`)
            .val()
            .trim()
            .replace(/\D+/g, '')
            .replace(/^1/, '')
            .match(/([^\d]*\d[^\d]*){10}$/)
        ) {
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='phone']`)
            .parent()
            .removeClass('form_field_error');
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='phone']`)
            .siblings('.form_field_error_message')
            .remove();
          if (lead_form_phone_valid === false) {
            lead_form_phone_valid = true;
          }
        } else {
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='phone']`)
            .parent()
            .addClass('form_field_error');
          jQuery(form)
            .find(`fieldset.lead_form_page${page} input[name='phone']`)
            .siblings('.form_field_error_message')
            .remove();
          if (preferred_language == 'English') {
            jQuery(form)
              .find(`fieldset.lead_form_page${page} input[name='phone']`)
              .parent()
              .append(
                '<div class="form_field_error_message">Please enter a 10 digit phone number</div>'
              );
          } else if (preferred_language == 'Spanish') {
            jQuery(form)
              .find(`fieldset.lead_form_page${page} input[name='phone']`)
              .parent()
              .append(
                '<div class="form_field_error_message">Por favor ingrese un número de teléfono válido</div>'
              );
          }
          valid = false;
        }
      }
    }

    if (valid) {
      console.log('valid');
      if (lead_form_valid === false) {
        lead_form_valid = true;
      }
    } else console.log('invalid');

    return valid;
  }

  function formatUSNumber(entry = '') {
    const match_results = entry
      .replace(/\D+/g, '')
      .replace(/^1/, '')
      .match(/([^\d]*\d[^\d]*){1,10}$/);
    if (match_results === null) {
      return '';
    }
    const match = match_results[0];

    if (match.length >= 4) {
      //only show phone type field for this form (if there is more than one lead form on the page)
      jQuery('.phone_type_container').fadeIn();
    }

    const part1 = match.length > 3 ? `(${match.substring(0, 3)}` : match;
    const part2 = match.length > 3 ? `) ${match.substring(3, 6)}` : '';
    const part3 = match.length > 6 ? `-${match.substring(6, 10)}` : '';
    return `${part1}${part2}${part3}`;
  }

  function formatZip(entry = '') {
    const match_results = entry.replace(/\D+/g, '').match(/([^\d]*\d[^\d]*){1,5}$/);
    if (match_results === null) {
      return '';
    }
    const match = match_results[0];
    return `${match}`;
  }

  function cleanLeadConduitID(input) {
    //Regular expression to match hexadecimal characters
    const hexRegex = /[0-9A-Fa-f]/;

    //Filter out non-hexadecimal characters
    const hexCharacters = input.split('').filter((char) => {
      return hexRegex.test(char);
    });

    //Join the filtered characters back into a string
    const hexString = hexCharacters.join('');

    return hexString;
  }
};
