const generateStar = (rating) => {
  const colorConfig = {
    1: '#FF3722',
    2: '#FF8622',
    3: '#FFCE00',
    4: '#73CF11',
    5: '#00B67A',
    blank: '#DCDCE6'
  };

  const starRectangle = (fill, xposition) =>
    `<rect id="Rectangle-path" fill="${fill}" x="${xposition}" y="0" width="96" height="96"/>`;

  const generateColorStar = (ratings) => {
    const stars = [];
    for (let i = 1; i < 6; i += 1) {
      const fillColor = colorConfig[i > ratings ? 'blank' : ratings];
      const xTranslateConstant = 104;
      const xposition = 0 + xTranslateConstant * (i - 1);
      stars.push(starRectangle(fillColor, xposition));
    }
    return stars;
  };

  const starSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="104px" height="20px" viewBox="0 0 512 96" version="1.1">
    
        <g id="Trustpilot_ratings_${rating}star-RGB" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill-rule="nonzero">
                ${generateColorStar(rating).join('\n')}
                <path d="M48,64.7 L62.6,61 L68.7,79.8 L48,64.7 Z M81.6,40.4 L55.9,40.4 L48,16.2 L40.1,40.4 L14.4,40.4 L35.2,55.4 L27.3,79.6 L48.1,64.6 L60.9,55.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 L81.6,40.4 Z" id="Shape" fill="#FFFFFF"/>
                <path d="M152,64.7 L166.6,61 L172.7,79.8 L152,64.7 Z M185.6,40.4 L159.9,40.4 L152,16.2 L144.1,40.4 L118.4,40.4 L139.2,55.4 L131.3,79.6 L152.1,64.6 L164.9,55.4 L185.6,40.4 L185.6,40.4 L185.6,40.4 L185.6,40.4 Z" id="Shape" fill="#FFFFFF"/>
                <path d="M256,64.7 L270.6,61 L276.7,79.8 L256,64.7 Z M289.6,40.4 L263.9,40.4 L256,16.2 L248.1,40.4 L222.4,40.4 L243.2,55.4 L235.3,79.6 L256.1,64.6 L268.9,55.4 L289.6,40.4 L289.6,40.4 L289.6,40.4 L289.6,40.4 Z" id="Shape" fill="#FFFFFF"/>
                <path d="M360,64.7 L374.6,61 L380.7,79.8 L360,64.7 Z M393.6,40.4 L367.9,40.4 L360,16.2 L352.1,40.4 L326.4,40.4 L347.2,55.4 L339.3,79.6 L360.1,64.6 L372.9,55.4 L393.6,40.4 L393.6,40.4 L393.6,40.4 L393.6,40.4 Z" id="Shape" fill="#FFFFFF"/>
                <path d="M464,64.7 L478.6,61 L484.7,79.8 L464,64.7 Z M497.6,40.4 L471.9,40.4 L464,16.2 L456.1,40.4 L430.4,40.4 L451.2,55.4 L443.3,79.6 L464.1,64.6 L476.9,55.4 L497.6,40.4 L497.6,40.4 L497.6,40.4 L497.6,40.4 Z" id="Shape" fill="#FFFFFF"/>
            </g>
        </g>
    </svg>`;
  return starSvg;
};
export default generateStar;
