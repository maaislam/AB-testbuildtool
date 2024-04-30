export const image = (ID, className, url) => {
  const html = `<img class="hero__image ${ID}__hero__image ${ID}__hero-bg-${className} lazyautosizes lazyloaded" src="${url}"/>`;
  return html;
};
