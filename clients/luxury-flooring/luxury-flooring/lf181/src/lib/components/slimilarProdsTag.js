const slimilarProdsTag = (id) => {
  const html = `
        <div class="${id}__slimilarProdsTag">
            <div class="${id}__icon">
                <img src="https://luxuryflooring.co.uk/media/.thumbswysiwyg/ab_tests/test181/icon_goldarrows.png?rand=1741088129"/>
            </div>
            <div class="${id}__text">Compare similar floors</div>
        </div>
    `;

  return html.trim();
};

export default slimilarProdsTag;
