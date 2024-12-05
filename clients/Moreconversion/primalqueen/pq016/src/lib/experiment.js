import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const pdfUrl = 'https://cdn.shopify.com/s/files/1/0805/3971/3813/files/Primal_Queen_COA-combined.pdf?v=1733152358'; 
function setupPdfModal() {
  const pdfModal = document.createElement('div');
  pdfModal.id = 'pdf-modal';
  pdfModal.style = `
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 1000;
      justify-content: center;
      align-items: center;
  `;

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Close button
  const closeButton = document.createElement('button');
  closeButton.className = 'close-btn';
  closeButton.innerText = '×';
  closeButton.onclick = function () {
    pdfModal.style.display = 'none';
  };
  modalContent.appendChild(closeButton);

  // PDF container
  const pdfContainer = document.createElement('div');
  pdfContainer.id = 'pdf-container';
  modalContent.appendChild(pdfContainer);

  pdfModal.appendChild(modalContent);
  document.body.appendChild(pdfModal);


  // Close modal on clicking outside content
  pdfModal.onclick = function (event) {
    if (event.target === pdfModal) {
      pdfModal.style.display = 'none';
    }
  };
}

function renderPage(pdf, pageNum, container) {
  pdf.getPage(pageNum).then((page) => {
      // Get the default viewport and calculate the scale
      const viewport = page.getViewport({ scale: 1 });
      const containerWidth = container.clientWidth;

      // Dynamically scale to fit container width while maintaining aspect ratio
      const scale = containerWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      // Create canvas for rendering
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Adjust canvas resolution for high-DPI screens
      const outputScale = window.devicePixelRatio || 1;
      canvas.width = scaledViewport.width * outputScale;
      canvas.height = scaledViewport.height * outputScale;

      // Style the canvas for correct display
      canvas.style.width = `${scaledViewport.width}px`;
      canvas.style.height = `${scaledViewport.height}px`;

      // Scale the rendering context for high-resolution output
      context.scale(outputScale, outputScale);

      // Create a wrapper for the page (optional)
      const pageWrapper = document.createElement('div');
      pageWrapper.style = `
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
      `;
      pageWrapper.appendChild(canvas);
      container.appendChild(pageWrapper);

      // Render the page into the canvas
      const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
      };

      page.render(renderContext).promise.then(() => {
          console.log(`Page ${pageNum} rendered without clipping`);
      });
  }).catch((error) => {
      console.error(`Error rendering page ${pageNum}:`, error);
  });
}

function loadPdf(pdfUrl, container) {
  // Clear existing content
  container.innerHTML = '';

  pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
    console.log('PDF loaded', pdf);

    // Render all pages
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      renderPage(pdf, pageNum, container);
    }
  }).catch((error) => {
    console.error('Error loading PDF:', error);
  });
}

const init = () => {
  //Initialize experiment-specific functionality here
  const targetElement = document.querySelector('#join_pkg');
  targetElement.querySelectorAll('.package').forEach((item) => {
    if (!item.querySelector(`.${ID}__wrapper`)) {
      item
        .querySelector('.packge_button_outer')
        .insertAdjacentHTML(
          'afterend',
          `<div class="${ID}__wrapper">Lab Verified -&nbsp;
          <a id="openModel" href="https://cdn.shopify.com/s/files/1/0805/3971/3813/files/Primal_Queen_COA-combined.pdf?v=1733152358" target="_blank">View Results</a></div>`
        );
    }
  });
};

export default () => {
  setup();
  init();

  setupPdfModal();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__wrapper > a`)) {
      const pdfModal = document.getElementById('pdf-modal');
      const pdfContainer = document.getElementById('pdf-container');

      e.preventDefault(); //Prevent default link behavior
      pdfModal.style.display = 'flex';
      loadPdf(pdfUrl, pdfContainer);
      //scroll off the page
      document.documentElement.style.overflow = 'hidden';
    } else if (target.closest('.close-btn')) {
      const popup = document.getElementById('pdf-modal');
      popup.style.display = 'none'; //Hide the popup
      //scroll on the page
      document.documentElement.style.overflow = 'auto';
    } else if (target.closest('#pdf-modal')) {
      const popup = document.getElementById('pdf-modal');
      popup.style.display = 'none'; //Hide the popup
      document.documentElement.style.overflow = 'auto';
    }
  });
};
