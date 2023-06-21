import viewOptionLogo from './viewOptionLogo';

const viewOptionLogos = (id, options) => {
  //console.log('🚀 ~ file: viewOptionLogos.js:4 ~ viewOptionLogos ~ options:', options);
  const htmlStr = `
        <div class="${id}__viewoptions">
            ${options.map((option) => viewOptionLogo(id, option)).join('\n')}
        </div>
    `;

  return htmlStr.trim();
};

export default viewOptionLogos;
