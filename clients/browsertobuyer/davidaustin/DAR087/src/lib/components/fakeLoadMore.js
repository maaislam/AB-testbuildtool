const fakeLoadMore = (id, total) => {
  const html = `
        <div class="${id}__loadMoreWrapper">
            <button class="
    appearance-none outline-none transition-colors inline-flex items-center justify-center gap-[10px]
    button-primary-outline py-[12px] px-lg border text-caps-lg
  
    border-button-background text-button-background bg-transparent supports-hover:hover:bg-button-background
    supports-hover:hover:border-button-background supports-hover:hover:text-button-text
  
    rounded-sm

 min-w-grid max-w-full w-full">Load More</button>
            <span class="mt-[15px] text-sm text-center tablet:w-full">Showing 24 of ${total}</span>
        </div>
    `;

  return html.trim();
};

export default fakeLoadMore;
