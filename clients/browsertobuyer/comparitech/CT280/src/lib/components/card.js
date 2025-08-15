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
    os,
    freetrailElement
  } = data;
  const html = `
        <div class="${id}__card">
            <div class="card-header">
                <div class="title-wrap">
                    <div>
                       ${nameWithUrl}
                    </div>
                    <div class="logo"><img src="${imageUrl}" alt="${name} logo"/></div>
                </div>
                
            </div>

            <p class="desc">
                ${description}
            </p>

            <div class="grid">
                <div class="${id}__item">
                    <div class="${id}__label first-item">Pricing</div>
                    <div class="second-item">${pricing}</div>
                </div>
                <div class="${id}__item">
                    <div class="${id}__label first-item">Pros</div>
                    <ul class="pros second-item">
                        ${pros.map((item) => `<li><strong>${item}</strong></li>`).join('\n')}
                    </ul>
                </div>
            
                <div class="${id}__item">
                    <div class="${id}__label first-item">Cons</div>
                    <ul class="cons second-item">
                        ${cons.map((item) => `<li><strong>${item}</strong></li>`).join('\n')}
                    </ul>
                </div>

                <div class="${id}__item">
                    <div class="${id}__label first-item">Features</div>
                    <div class="chips second-item">
                        ${features.map((item) => `<span class="chip">${item}</span>`).join('\n')}
                    </div>
                </div>

                <div class="${id}__item">
                    <div class="${id}__label first-item">SaaS/On-Premises</div>
                    <div class="second-item">${saasOnPremises}</div>
                </div>

                <div class="${id}__item">
                    <div class="${id}__label first-item">OS</div>
                    <div class="second-item">${os}</div>
                </div>

                <div class="${id}__item">
                    <div class="${id}__label first-item">Free trial</div>
                    <div class="second-item">${freetrailElement}</div>
                </div>
            </div>
        </div>
    `;

  return html.trim();
};

export default card;
