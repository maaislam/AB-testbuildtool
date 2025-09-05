import { crossIcon, tickIcon } from '../assets/icons';

const card = (id, data) => {
  const {
    name,
    extraName,
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
    relevant_for,
    operating_systems,
    poster,
    additionalInfo
  } = data;
  const html = `
        <div class="${id}__card">
            <div class="card-header">
                <div class="title-wrap">
                    <div class="provider-name-info">
                       ${nameWithUrl}
                       ${extraName ? `<div class="extra-name">${extraName}</div>` : ''}
                    </div>
                    <div class="logo"><img src="${imageUrl}" alt="provider logo"/></div>
                </div>
                
            </div>
            <div class="grid">
                ${
                  pricingText
                    ? `
                    <div class="${id}__item">
                        <div class="${id}__label first-item">Pricing</div>
                        <div class="second-item">
                            <div class="pricing-text">${pricingText}</div>
                               ${
                                 pricing.length > 0
                                   ? `<ul>${pricing
                                       .map((item) => `<li>${item}</li>`)
                                       .join('\n')}</ul>`
                                   : ''
                               }
                            
                        </div>
                    </div>
                    `
                    : ''
                }

                ${
                  operating_systems
                    ? `
                     <div class="${id}__item">
                        <div class="${id}__label first-item">Operating Systems</div>
                        <div class="second-item">${operating_systems}</div>
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
                            ${pros
                              .map(
                                (item) =>
                                  `<li><span>${tickIcon}</span><strong>${item}</strong></li>`
                              )
                              .join('\n')}
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
                                  .map(
                                    (item) =>
                                      `<li><span>${crossIcon}</span><strong>${item}</strong></li>`
                                  )
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
            <div class="provider-description">${description}</div>
            ${poster ? `<div class="provider-poster">${poster}</div>` : ''}
            ${additionalInfo ? `${additionalInfo}` : ''}
        </div>
    `;

  return html.trim();
};

export default card;
