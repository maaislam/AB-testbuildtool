export const img = (id, data, index) => {
  const html = `
        <img class="lazyautosizes lazyloaded ${id}__image"
     style="max-height: 18rem; object-fit: cover;"
     data-widths="[540, 750, 900]"
     data-aspectratio="1.1111111111111112"
     data-sizes="auto"
     alt="perfectwhitetee essential tops and bottoms for womens"
     data-srcset="${data[`imageSrc_${index}_540`]} 540w, ${data[`imageSrc_${index}_750`]} 750w, ${
    data[`imageSrc_${index}_900`]
  } 900w"
     sizes="313px"
     srcset="${data[`imageSrc_${index}_540`]} 540w, ${data[`imageSrc_${index}_750`]} 750w, ${
    data[`imageSrc_${index}_900`]
  } 900w">
    `;
  return html;
};
