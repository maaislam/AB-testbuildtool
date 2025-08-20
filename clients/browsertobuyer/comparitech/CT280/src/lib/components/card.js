const card = (id, data) => {
  const {
    name,
    nameWithUrl,
    imageUrl,
    description,
    pricing,
    pros,
    cons,
    features,
    'SaaS/On-Premises': saasOnPremises,
    Cloud_based,
    os,
    Reporting_Analytics,
    freetrialElement,
    pricingText,
    best_for,
    relevant_for
  } = data;
  const html = `
        <div class="${id}__card">
            <div class="card-header">
                <div class="title-wrap">
                    <div>
                       ${nameWithUrl}
                    </div>
                    <div class="logo"><img src="${imageUrl}" alt="provider logo"/></div>
                </div>
                
            </div>

            <p class="desc">
                ${description}
            </p>

            <div class="grid">
                ${
                  pricingText
                    ? `
                    <div class="${id}__item">
                        <div class="${id}__label first-item">Pricing</div>
                        <div class="second-item">
                            <div>${pricingText}</div>
                            <ul>
                               ${
                                 pricing.length > 0
                                   ? pricing.map((item) => `<li>${item}</li>`).join('\n')
                                   : ''
                               }
                            </ul>
                        </div>
                    </div>
                    `
                    : ''
                }

                ${
                  best_for
                    ? `
                     <div class="${id}__item">
                        <div class="${id}__label first-item">Best For</div>
                        <div class="second-item">${best_for}</div>
                    </div>
                    `
                    : ''
                }

                 ${
                   relevant_for
                     ? `
                     <div class="${id}__item">
                        <div class="${id}__label first-item">Relevant For</div>
                        <div class="second-item">${relevant_for}</div>
                    </div>
                    `
                     : ''
                 }
                
                ${
                  pros.length > 0
                    ? `
                    
                    <div class="${id}__item">
                        <div class="${id}__label first-item">Pros</div>
                        <ul class="pros second-item">
                            ${pros.map((item) => `<li><strong>${item}</strong></li>`).join('\n')}
                        </ul>
                    </div>
                    `
                    : ''
                }
                
                ${
                  cons.length > 0
                    ? `
                         <div class="${id}__item">
                            <div class="${id}__label first-item">Cons</div>
                            <ul class="cons second-item">
                                ${cons
                                  .map((item) => `<li><strong>${item}</strong></li>`)
                                  .join('\n')}
                            </ul>
                        </div>
                    
                    `
                    : ''
                }
               
                <div class="${id}__item">
                    <div class="${id}__label first-item">Features</div>
                    <div class="chips second-item">
                        ${features.map((item) => `<span class="chip">${item}</span>`).join('\n')}
                    </div>
                </div>

                ${
                  saasOnPremises
                    ? `
                     <div class="${id}__item">
                        <div class="${id}__label first-item">SaaS/On-Premises</div>
                        <div class="second-item">${saasOnPremises}</div>
                    </div>
                    `
                    : ''
                }

                ${
                  Cloud_based
                    ? `
                     <div class="${id}__item">
                        <div class="${id}__label first-item">Cloud Based</div>
                        <div class="second-item">${Cloud_based}</div>
                    </div>
                    `
                    : ''
                }
               
                ${
                  os
                    ? `
                    <div class="${id}__item">
                        <div class="${id}__label first-item">OS</div>
                        <div class="second-item">${os}</div>
                    </div>  
                    `
                    : ''
                }

                ${
                  Reporting_Analytics
                    ? `
                    <div class="${id}__item">
                        <div class="${id}__label first-item">Reporting & Analytics</div>
                        <div class="second-item">${Reporting_Analytics}</div>
                    </div>  
                    `
                    : ''
                }

                 ${
                   freetrialElement
                     ? `
                     <div class="${id}__item">
                        <div class="${id}__label first-item">Free trial</div>
                        <div class="second-item">${freetrialElement}</div>
                    </div>
                    `
                     : ''
                 }     
            </div>
        </div>
    `;

  return html.trim();
};

export default card;
