import { processForImageName } from '../helpers/utils';

const operatorLogo = (id, data) => {
  const { domainFlagSrc, link, gaLabel } = data;
  const imageName = gaLabel.toLowerCase().split(' ').join('-');

  const aws = 'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/betting.se/';
  const processedImgName = processForImageName(imageName);

  const imageFallbacks = [
    `${aws}${decodeURIComponent(processedImgName)}.svg`,
    `/uploads/operator/1/normal/300x160/${imageName}.jpg`,
    `/uploads/operator/16/normal/300x160/${imageName}.jpg`,
    `assets/images/min/operators/300x160/${imageName}.jpg`,
    `/uploads/operator/16/normal/300x160/sportsbetting/${imageName}.jpg`
  ];
  const htmlStr = `   
    <div class="${id}__operatorLogo ">
        <a target="_blank" href="${link}" data-ga-label="${gaLabel}">
            <span class="domain-flag-container">
                <img class="${id}__opimages" 
                src="" data-fallback1 = "${imageFallbacks[0]}" data-fallback2 = "${imageFallbacks[1]}" 
                data-fallback3="${imageFallbacks[2]}" data-fallback4="${imageFallbacks[3]}" data-fallback5="${imageFallbacks[4]}"/>
            </span>
        </a>
    </div>`;
  return htmlStr;
};

export default operatorLogo;
