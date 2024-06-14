const linkButton = (id, text, className, type) => {
  const addAttribute = type === 'initial' ? `data-${type}=true` : '';
  const html = `<span class="${id}__linkButton ${className}" ${addAttribute}>${text}</span>`;
  return html;
};
export default linkButton;
