import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(async (entry) => {
        if (!entry.isIntersecting) return;

        const card = entry.target;
        obs.unobserve(card);

        const link = card.querySelector('a[href*="/products/"]');
        if (!link) return;

        const productURL = link.href.startsWith('http')
          ? link.href
          : window.location.origin + link.getAttribute('href');

        try {
          const res = await fetch(productURL);
          const html = await res.text();
          const doc = new DOMParser().parseFromString(html, 'text/html');

          const ratingElement = doc.querySelector('.jdgm-prev-badge');
          const reviewText = ratingElement
            ? ratingElement.querySelector('.jdgm-prev-badge__text').innerText.trim()
            : '';

          const match = reviewText ? reviewText.match(/^(\d+)\s+review(s)?/i) : null;
          const reviewNumberOnly = match ? match[1] : '';

          const badge = document.createElement('div');
          badge.classList.add(`${ID}__badge`);
          badge.dataset.link = `${productURL}#judgeme_product_reviews`;

          if (ratingElement) {
            badge.innerHTML = ratingElement.outerHTML;
          }

          card.querySelector('a + div > a').insertAdjacentElement('afterend', badge); //insert above card content
          card.querySelector('.jdgm-prev-badge__text').innerText = `(${reviewNumberOnly})`;
        } catch (err) {
          console.error('Fetch or parse failed:', err);
        }
      });
    },
    {
      rootMargin: '100px',
      threshold: 0.1
    }
  );

  const observeCards = () => {
    document.querySelectorAll('product-card:not([data-observed])').forEach((card) => {
      observer.observe(card);
      card.setAttribute('data-observed', 'true');
    });
  };

  observeCards();

  const mutationObserver = new MutationObserver(() => {
    observeCards();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('load-more a')) {
      console.log('Load more clicked – mutation observer will handle new cards.');
    } else if (e.target.closest(`.${ID}__badge`)) {
      const clickedItem = e.target.closest(`.${ID}__badge`);
      const { link } = clickedItem.dataset;
      if (link) window.location.href = link;
    }
  });
  init();
};
