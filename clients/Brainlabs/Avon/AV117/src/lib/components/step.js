const steps = (id, idx, stepData) => {
  const { title, details } = stepData;
  const htmlStr = `
    <div class="${id}__step ${idx % 2 !== 0 ? `${id}__alignself--end` : ''}">
        <div class="${id}__step--title ${id}__${title.color}">${title.copy}</div>
        <div class="${id}__step--details">${details}</div>
    </div>`;

  return htmlStr;
};

export default steps;
