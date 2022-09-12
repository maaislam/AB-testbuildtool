const howitworkStep = (id, { img, paragraph }) => {
  const htmlStr = `<li class="${id}__howitwork--step">
    <span class="step-image">${img}</span>
    <span class="step-paragraph">${paragraph}</span>
</li>`;

  return htmlStr.trim();
};

export default howitworkStep;
