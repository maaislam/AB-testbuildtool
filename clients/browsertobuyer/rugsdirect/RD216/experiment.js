if (typeof (btbTestTracking) !== 'undefined' && btbTestTracking.running) { btbTestTracking.running.rd216 = 'v1'; }

convert.$(document).ready(() => {
    console.log('RD 216 - Add Size Guide - V1');

    function trackGAEvent(c, a, l) {
        if (window.dataLayer) {
            window.dataLayer.push({
                event: 'ga_event',
                event_category: c,
                event_action: a,
                event_label: l
            });
            console.log('event tracked', c, a, l);
        }
    }

    function waitForElem(waitFor, callback, minElements = 1, isVariable = false, timer = 15000, frequency = 25) {
        const elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
        if (timer <= 0) return;
        (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined')
            ? callback(elements)
            : setTimeout(() => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
    }

    try {
        window.modalLinkAdded = false;
        if (document.location.pathname.indexOf('/products/') !== -1) {
            waitForElem('form.shopify-product-form .variant-selector__list > .variant-selector__list-item', ([sizes]) => {
                if (sizes) {
                    convert.$('body').addClass('rd216');
                    var $chooseYourSizeLabel = document.querySelector('.variant-selector__toggle-dimensions--container > p.ff-heading');
                    if ($chooseYourSizeLabel) {
                        $chooseYourSizeLabel.innerHTML = '<a href="javascript:void(0)" id="open-size-guide-btn" class="link-sizeguide">Size guide</a>';
                        window.modalLinkAdded = true;
                    }
                }
            });
        } else if (document.location.pathname == '/cart') {
            var itemsSelector = 'form[action="/cart"] [data-cart-item-list] [data-cartitem] .cart-item-remove-product';
            waitForElem(itemsSelector, ([cartitems]) => {
                if (cartitems) {
                    convert.$('body').addClass('rd216');
                    //code to iternate and add link
                    var tmpl_sizeGuide = `<div class="sizeguide-wrapper">
                        <a href="javascript:void(0)" class="link-sizeguide">Check size with our size guide</a>
                    </div>`;
                    Array.from(document.querySelectorAll(itemsSelector)).forEach((removeLink) => {
                        if (removeLink) {
                            removeLink.insertAdjacentHTML('beforebegin', tmpl_sizeGuide);
                        }
                    });
                    window.modalLinkAdded = true;
                }
            });
        }

        waitForElem('modalLinkAdded', () => {
            var imgBasePath = 'https://d31hba4f1d8ahx.cloudfront.net/RD/216/';
                var tmpl_modal = `<!-- RD 216: Background Overlay -->
                    <div id="size-guide-overlay" style="display: block;"></div>
                    <!-- RD 216: Custom Dialog -->
                    <div id="size-guide-modal" class="custom-modal" style="display: block;">
                        <div class="custom-modal-content">
                            <div class="custom-modal-header">
                                <button id="close-size-guide-btn" class="highlights-dialog__close" aria-label="Close">
                                    <svg class="icon-close " aria-hidden="true" focusable="false" role="presentation"
                                        xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M17 1L1 17" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"></path>
                                        <path d="M1 1L17 17" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                                <h2>Size Guide</h2>
                                <div>
                                    <button type="button" class="variant-selector__toggle-dimensions"
                                        aria-label="View dimensions in either cm's or inches" data-dimensions-toggle=""
                                        dimensions-toggled="false">
                                        <div class="variant-selector__toggle-dimensions--label">
                                            <p>cm</p>
                                            <p>inches</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div class="custom-modal-body">
                                <div class="size-guide-tabs">
                                    <button class="tab active" data-target="tab-living-dining">Living/Dining Room</button>
                                    <button class="tab" data-target="tab-bedrooms">Bedrooms</button>
                                    <button class="tab" data-target="tab-runners">Runners</button>
                                </div>
                                <div id="tab-living-dining" class="tab-content active">
                                    <h3>Living/Dining Room</h3>
                                    <div class="size-options">
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}living-80x150.png" alt="80 × 150cm" width="35" height="28">
                                            </div>
                                            <p>Approx<br><strong class="size-cm">80 × 150cm</strong><strong class="size-inches">2’ 8” x
                                                    5’</strong></p>
                                        </div>
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}living-120x170.png" alt="120 × 170cm" width="59"
                                                    height="47"></div>
                                            <p>Approx<br><strong class="size-cm">120 × 170cm</strong><strong class="size-inches">4’ x 5’
                                                    7”</strong></p>
                                        </div>
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}living-160x230.png" alt="160 × 230cm" width="67"
                                                    height="61"></div>
                                            <p>Approx<br><strong class="size-cm">160 × 230cm</strong><strong class="size-inches">5’ 3” x 7’
                                                    6”</strong></p>
                                        </div>
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}living-200x300.png" alt="200 × 300cm" width="67"
                                                    height="61"></div>
                                            <p>Approx<br><strong class="size-cm">200 × 300cm</strong><strong class="size-inches">6’ 7” x 9’
                                                    10”</strong></p>
                                        </div>
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}living-240x340.png" alt="240 × 340cm" width="81"
                                                    height="70"></div>
                                            <p>Approx<br><strong class="size-cm">240 × 340cm</strong><strong class="size-inches">7’ 10” x
                                                    10’ 2”</strong></p>
                                        </div>
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}living-280x360.png" alt="280 × 360cm" width="81"
                                                    height="70"></div>
                                            <p>Approx<br><strong class="size-cm">280 × 360cm</strong><strong class="size-inches">9’ 2” x 11’
                                                    10”</strong></p>
                                        </div>
                                    </div>
                                    <p class="size-guide-note">
                                        Rugs shown with typical living room or dining furniture: <br>
                                        <strong>Armchair:</strong> <span class="size-cm">90 x 95cm</span><span class="size-inches">3’ x 3’
                                            2”</span><br>
                                        <strong>Two seater sofa:</strong> <span class="size-cm">150 x 95cm</span><span
                                            class="size-inches">4’ 11” x 3’ 2”</span><br>
                                        <strong>Three seater sofa:</strong> <span class="size-cm">210 x 95cm</span><span
                                            class="size-inches">6’ 11” x 3’ 2”</span>
                                    </p>
                                </div>
                                <div id="tab-bedrooms" class="tab-content">
                                    <h3>Bedrooms</h3>
                                    <div class="size-options">
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}bedroom-80x150.png" alt="80 x 150cm" width="57"
                                                    height="43"></div>
                                            <p>Approx<br><strong class="size-cm">80 x 150cm</strong><strong class="size-inches">2’ 8” x
                                                    5’</strong></p>
                                        </div>
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}bedroom-120x170.png" alt="120 × 170cm" width="63"
                                                    height="43"></div>
                                            <p>Approx<br><strong class="size-cm">120 × 170cm</strong><strong class="size-inches">4’ x 5’
                                                    7”</strong></p>
                                        </div>
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}bedroom-160x230.png" alt="160 × 230cm" width="51"
                                                    height="43"></div>
                                            <p>Approx<br><strong class="size-cm">160 × 230cm</strong><strong class="size-inches">5’ 3” x 7’
                                                    6”</strong></p>
                                        </div>
                                        <div class="size-option align-top">
                                            <div class="size-icon"><img src="${imgBasePath}bedroom-200x300.png" alt="200 × 300cm" width="67"
                                                    height="45"></div>
                                            <p>Approx<br><strong class="size-cm">200 × 300cm</strong><strong class="size-inches">6’ 7” x 9’
                                                    10”</strong></p>
                                        </div>
                                        <div class="size-option align-top">
                                            <div class="size-icon"><img src="${imgBasePath}bedroom-240x340.png" alt="240 × 340cm" width="77"
                                                    height="54"></div>
                                            <p>Approx<br><strong class="size-cm">240 × 340cm</strong><strong class="size-inches">7’ 10” x
                                                    10’ 2”</strong></p>
                                        </div>
                                        <div class="size-option align-top">
                                            <div class="size-icon"><img src="${imgBasePath}bedroom-280x360.png" alt="280 × 360cm" width="81"
                                                    height="64"></div>
                                            <p>Approx<br><strong class="size-cm">280 × 360cm</strong><strong class="size-inches">9’ 2” x 11’
                                                    10”</strong></p>
                                        </div>
                                    </div>
                                    <p class="size-guide-note">
                                        Rugs shown with typical double bed: <br>
                                        <strong>Double Bed:</strong> approx <span class="size-cm">135 x 190cm</span><span
                                            class="size-inches">4’ 6” x 6’ 3”</span><br>
                                    </p>
                                </div>
                                <div id="tab-runners" class="tab-content">
                                    <h3>Runners</h3>
                                    <div class="size-options">
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}runner-60x180.png" alt="60 x 180cm" width="41" height="42">
                                            </div>
                                            <p>Approx<br><strong class="size-cm">60 x 180cm</strong><strong class="size-inches">2’ x 5’
                                                    11”</strong></p>
                                        </div>
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}runner-60x240.png" alt="60 x 240cm" width="41" height="55">
                                            </div>
                                            <p>Approx<br><strong class="size-cm">60 x 240cm</strong><strong class="size-inches">2’ x 7’
                                                    11”</strong></p>
                                        </div>
                                        <div class="size-option">
                                            <div class="size-icon"><img src="${imgBasePath}runner-60x320.png" alt="60 x 320cm" width="41" height="78">
                                            </div>
                                            <p>Approx<br><strong class="size-cm">60 x 320cm</strong><strong class="size-inches">2’ x 10’
                                                    6”</strong></p>
                                        </div>
                                    </div>
                                    <p class="size-guide-note">
                                        Runners are suitable for most halls, beside beds or next to furniture: <br>
                                        <strong>3 Seat Sofa:</strong> approx <span class="size-cm">190 x 120cm</span><span
                                            class="size-inches">6’ 3” x 4’</span><br>
                                    </p>
                                </div>
                            </div>
                            <div class="custom-modal-footer">
                                <button id="close-footer-btn" class="button-primary">Close Guide</button>
                            </div>
                        </div>
                    </div>`;
            document.body.insertAdjacentHTML('beforeend', tmpl_modal);

            var isDimensionsToggled;
            function handleToggle($ele, updateToggle) {
                if (updateToggle) {
                    isDimensionsToggled = !isDimensionsToggled;
                    $ele.attr('dimensions-toggled', isDimensionsToggled);
                }
                var $sizeGuideModal = convert.$('#size-guide-modal');
                if ($ele.attr('dimensions-toggled') == 'true') {
                    $sizeGuideModal.find('.size-inches').show();
                    $sizeGuideModal.find('.size-cm').hide();
                } else {
                    $sizeGuideModal.find('.size-cm').show();
                    $sizeGuideModal.find('.size-inches').hide();
                }
            }

            convert.$('[data-dimensions-toggle]').on('click', (e) => {
                handleToggle(convert.$(e.currentTarget), true);
            });
            handleToggle(convert.$('[data-dimensions-toggle]:first'));

            var overlay = document.getElementById('size-guide-overlay');
                var modal = document.getElementById('size-guide-modal');
                var openButtons = document.querySelectorAll('.link-sizeguide');
                var closeButtons = [document.getElementById('close-size-guide-btn'), document.getElementById('close-footer-btn')];
                var tabs = document.querySelectorAll('.rd216 .tab');
                var tabContents = document.querySelectorAll('.rd216 .tab-content');

            //Function to open the modal
            function openModal() {
                overlay.classList.add('show');
                modal.classList.add('show');
                trackGAEvent('RD 216', 'size_guide_opened', (document.location.pathname == '/cart') ? 'cart' : 'pdp');
            }

            //Function to close the modal
            function closeModal() {
                //Add a small timeout to allow fade-out animation to complete before hiding elements
                overlay.classList.remove('show');
                modal.classList.remove('show');

                setTimeout(() => {
                    overlay.style.display = 'none';
                    modal.style.display = 'none';
                }, 300); //Match this duration with the CSS transition (0.3s)
            }

            //Tab switching functionality
            tabs.forEach((tab) => {
                tab.addEventListener('click', () => {
                    //Remove 'active' class from all tabs
                    tabs.forEach((t) => t.classList.remove('active'));

                    //Add 'active' class to the clicked tab
                    tab.classList.add('active');

                    //Remove 'active' class from all tab-content sections
                    tabContents.forEach((content) => content.classList.remove('active'));

                    //Add 'active' class to the corresponding tab-content section
                    const targetContentId = tab.getAttribute('data-target');
                    const targetContent = document.getElementById(targetContentId);
                    if (targetContent) {
                        targetContent.classList.add('active');
                    }
                });
            });

            //Event listeners for open and close
            openButtons.forEach((btn) => {
                btn.addEventListener('click', () => {
                    overlay.style.display = 'block';
                    modal.style.display = 'block';
                    setTimeout(openModal, 10); //Small delay to ensure animation starts after display changes
                });
            });

            closeButtons.forEach((button) => button.addEventListener('click', closeModal));

            //Close modal by clicking on the overlay
            overlay.addEventListener('click', closeModal);

            //Close the modal with the Escape key
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && overlay.classList.contains('show')) {
                    closeModal();
                }
            });
        }, 0, true);
    } catch (ex) {
        throw ex;
    } finally {
        setTimeout(() => {
            document.body.style.visibility = 'visible';
        }, 4000);
    }
});
