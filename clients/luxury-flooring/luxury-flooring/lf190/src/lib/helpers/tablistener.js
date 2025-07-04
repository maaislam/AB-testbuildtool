const tablistener = (ID) => {
  const tabs = document.querySelectorAll('.product-accordion-tab');
  const firstPane = tabs[0].nextElementSibling;
  firstPane.style.height = `${firstPane.scrollHeight}px`;
  firstPane.dataset.open = 'true';

  //Collapse a pane and return a Promise that resolves when transition ends
  const collapsePane = (pane) => {
    return new Promise((resolve) => {
      pane.style.height = `${pane.scrollHeight}px`;
      requestAnimationFrame(() => {
        pane.style.height = '0px';
      });

      const onTransitionEnd = (e) => {
        if (e.propertyName === 'height') {
          pane.dataset.open = 'false';
          pane.removeEventListener('transitionend', onTransitionEnd);
          resolve();
        }
      };

      pane.addEventListener('transitionend', onTransitionEnd);
    });
  };

  //Click handler
  tabs.forEach((tab) => {
    tab.addEventListener('click', async () => {
      const pane = tab.nextElementSibling;
      const isOpen = pane.dataset.open === 'true';

      const otherOpenPanes = [
        ...document.querySelectorAll('.product-accordion-pane[data-open="true"]')
      ].filter((p) => p !== pane);

      await Promise.all(otherOpenPanes.map(collapsePane));

      const yOffset = -100;
      const y = tab.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });

      if (!isOpen) {
        pane.style.height = `${pane.scrollHeight}px`;
        pane.dataset.open = 'true';

        const resetHeight = (e) => {
          if (e.propertyName === 'height') {
            pane.style.height = 'auto';
            pane.removeEventListener('transitionend', resetHeight);
          }
        };

        pane.addEventListener('transitionend', resetHeight);
      } else {
        await collapsePane(pane);
      }
    });
  });
};

export default tablistener;
