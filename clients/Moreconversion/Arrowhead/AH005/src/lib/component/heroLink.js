export const heroLink = (id, VARIATION) => {
  const htmlV1 = `
    <div class="hero__link ${id}__hero-link">
        <a href="/collections/new-launches" class="btn">
        shop new launches
        </a>
        <a href="/collections/on-sale" class="btn">
        shop clearance
        </a>
    </div>
  `;

  const htmlV2 = `
  <div class="hero__link ${id}__hero-link">
      <a href="/collections/new-launches" class="btn new-launches">
      Explore New Launches
      </a>
      <a href="/collections/on-sale" class="btn">
      Shop Discounts and Clearance
      </a>
  </div>
`;

  const variation = VARIATION === '1' ? htmlV1 : htmlV2;
  return variation;
};
