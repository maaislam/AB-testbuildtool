const percentage = (id, number) => {
  const html = `
        <p class="${id}__percentage">${number}% OFF</p>
    `;
  return html.trim();
};

export default percentage;
