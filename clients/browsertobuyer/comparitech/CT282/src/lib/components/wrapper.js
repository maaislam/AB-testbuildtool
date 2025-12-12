import * as Icons from '../assets/icons';

const labels = ['firstIcon', 'secondIcon', 'thirdIcon'];

const wrapper = (id, data, variation) => {
  const html = `
        <div class="${id}__trusted-card">
            <div class="trusted-top">
                ${data.title ? `<h1 class="trusted-title">${data.title}</h1>` : ''}
                ${data.subtitle ? `<p class="trusted-sub">${data.subtitle}</p>` : ''}
            </div>

            <div class="trusted-features">
                ${data.list
                  .map((item, index) => {
                    const iconKey = `v${variation}_${labels[index]}`;
                    const IconSVG = Icons[iconKey];
                    return `
                        <div class="feature">
                            <div class="feature-icon">
                                ${IconSVG}
                            </div>
                            <div class="feature-text">
                                ${
                                  item.title
                                    ? `<span class="feature-title">${item.title}</span>`
                                    : ''
                                }
                                ${
                                  item.subtext
                                    ? `<span class="feature-desc">${item.subtext}</span>`
                                    : ''
                                }
                                
                            </div>
                        </div>
                    `;
                  })
                  .join('\n')}
            </div>
        </div>
    
    `;

  return html.trim();
};

export default wrapper;
