/*eslint-disable no-undef */
/*eslint-disable no-unused-vars */
//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { pollerLite } from '../../../../../../globalUtil/util';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  console.log('ID: ', ID);
  document.querySelector('body').classList.add(`${ID}`);

  if (VARIATION === 'control') {
    return;
  }

  const upsellSection = `
  <div class="${ID}__upsellSection">
    <p class="${ID}__upsellTitle">Zubehör für Ihr perfektes Kocherlebnis</p>
    <div class="${ID}__carousel">
      
    </div>
    <div class="${ID}__overlayLeft"></div>
    <div class="${ID}__overlayRight"></div>
  </div>
`;

  const sliderPositionObserver = () => {
    //right button
    document.querySelector('.hof03__carousel .flickity-prev-next-button.next') && document.querySelector('.hof03__carousel .flickity-prev-next-button.next').addEventListener('click', () => {
      document.querySelector('.hof03__carousel .flickity-slider').classList.add('flickity-slider-new');
    });

    if (document.querySelector('.hof03__carousel .hof03__carousel-cell.is-selected')) {
      //left button
      const targetNode = document.querySelector('.hof03__carousel .hof03__carousel-cell.is-selected') && document.querySelector('.hof03__carousel .hof03__carousel-cell.is-selected');

      const config = {
        attributes: true, childList: true, subtree: true
      };

      const callback = () => {
        if (document.querySelectorAll('.hof03__carousel-cell')[0].classList.contains('is-selected')) {
            document.querySelector('.hof03__carousel .flickity-slider').classList.remove('flickity-slider-new');
        }
      };

      const observer = new MutationObserver(callback);

      observer.observe(targetNode, config);
    }
  };

  const btnChangeAfterClick = () => {
    document.querySelectorAll('.hof03__addToCartButtonSection i a').forEach((btn, index) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.hof03__addToCartButtonSection i a')[index].innerText = 'HINZUGEFÜGT';
        document.querySelectorAll('.hof03__addToCartButtonSection i a')[index].style = 'background: #008001;border: 1px solid #008001; color: #fff';
      });
    });
  };

  //title fetch function from PDP page
  const fetchTitleFromPDP = (waitForElem) => {
    pollerLite([() => waitForElem], () => {
      document.querySelectorAll('.hof03__carousel .flickity-slider .hof03__carousel-cell').forEach((i, index) => {
        let titleAsPDP;
        fetch(document.querySelectorAll('.hof03__carousel .hof03__carouselInfoContainer .hof03__carouselImage a')[index].href).then((response) => {
          return response.text();
        }).then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          titleAsPDP = doc.querySelector('.ProductMeta .ProductMeta__Title').innerText;
          document.querySelectorAll('.hof03__carouselProductTitle a')[index].innerText = titleAsPDP;
          document.querySelectorAll('.hof03__carouselProductTitle a')[index].style = 'animation: fade-in 1s';
          document.querySelectorAll('.hof03__skeleton-box-section')[index].style.display = 'none';
        }).catch((err) => {
          console.warn('Something went wrong.', err);
        });
      });
    });
  };

  const sliderAdd = () => {
    if (document.querySelector('.cu-container .slick-track') && document.querySelectorAll('.cu-container .slick-track .slick-slide:not(.slick-cloned)').length > 0) {
      setTimeout(() => {
        document
        .querySelector('.section.cu-hoffmann-badges') && document
        .querySelector('.section.cu-hoffmann-badges')
        .insertAdjacentHTML('beforebegin', upsellSection);
        //slider
        document.querySelector('.cu-container .slick-track') &&
        document.querySelectorAll('.cu-container .slick-track .slick-slide:not(.slick-cloned)').forEach((i, index) => {
            if (document.querySelector('.hof03__carousel')) {
              document.querySelector('.hof03__carousel').insertAdjacentHTML(
                'afterbegin',
                `<div class="${ID}__carousel-cell">
                    <div class="${ID}__carouselInfoContainer">
                      <div class="${ID}__carouselImage">
                        ${document.querySelectorAll('.upsell-wrapper .cu-item-image')[index].innerHTML}
                      </div>
                      <div class="${ID}__carouselProductDetails">
                        <div class="${ID}__carouselProductTitle">
                          <div class="${ID}__skeleton-box-section">
                            <span class="${ID}__skeleton-box" style="width:100%;"></span>
                            <span class="${ID}__skeleton-box" style="width:80%;"></span>
                          </div>
                          <a href=""></a>
                        </div>
                        <div class="${ID}__carouselProductPrice">
                          ${
                            document.querySelectorAll('.upsell-wrapper .cu-item-subdescription')[index]
                              .innerText
                          }
                          <span> inkl. MwSt.</span>
                        </div>
                      </div>
                    </div>
                    <div class="${ID}__addToCartButtonSection">
                      <i onclick=${document.querySelectorAll('.upsell-wrapper .add-upsell')[index].children[0].getAttribute('onclick')} style="cursor:pointer; font-size:30px;" data-action="update-item-quantity" id="add-upsell-4"><a >Hinzufügen </a></i>
                    </div>
                  </div>`
              );
            }
          });
        //-----------------------------
        //Write experiment code here
            //eslint-disable-next-line no-undef
        const flkty = new Flickity('.hof03__carousel', {
            freeScroll: false
        });
        sliderPositionObserver();
        btnChangeAfterClick();
        fetchTitleFromPDP('.hof03__carouselProductTitle');
      }, 500);
    }
  };

  if (!document.querySelector('.hof03__upsellSection')) {
    sliderAdd();
  }

  const titleClickFunc = () => {
    setTimeout(() => {
      document.querySelectorAll('.hof03__carouselProductTitle a').forEach((title, index) => {
        //eslint-disable-next-line no-param-reassign
        title.href = document.querySelectorAll('.hof03__carouselImage a')[index].href;
      });
    }, 500);
  };

  const sliderAddForVisibleCartPage = () => {
    if (document.querySelector('.PageOverlay.is-visible')) {
      setTimeout(() => {
        if (document.querySelectorAll('.cu-container .slick-track .slick-slide:not(.slick-cloned)').length > 0) {
          if (!document.querySelector('.hof03__upsellSection')) {
            document
            .querySelector('.section.cu-hoffmann-badges') && document
            .querySelector('.section.cu-hoffmann-badges')
            .insertAdjacentHTML('beforebegin', upsellSection);
        //slider
        document.querySelector('.cu-container .slick-track') &&
          document.querySelectorAll('.cu-container .slick-track .slick-slide:not(.slick-cloned)').forEach((i, index) => {
            if (document.querySelector('.hof03__carousel')) {
              document.querySelector('.hof03__carousel').insertAdjacentHTML(
                'afterbegin',
                `<div class="${ID}__carousel-cell">
                    <div class="${ID}__carouselInfoContainer">
                      <div class="${ID}__carouselImage">
                        ${document.querySelectorAll('.upsell-wrapper .cu-item-image')[index].innerHTML}
                      </div>
                      <div class="${ID}__carouselProductDetails">
                        <div class="${ID}__carouselProductTitle">
                        <div class="${ID}__skeleton-box-section">
                          <span class="${ID}__skeleton-box" style="width:100%;"></span>
                          <span class="${ID}__skeleton-box" style="width:80%;"></span>
                        </div>
                          <a href=''></a>
                        </div>
                        <div class="${ID}__carouselProductPrice">
                          ${
                            document.querySelectorAll('.upsell-wrapper .cu-item-subdescription')[index]
                              .innerText
                          }
                          <span> inkl. MwSt.</span>
                        </div>
                      </div>
                    </div>
                    <div class="${ID}__addToCartButtonSection">
                      <i onclick=${document.querySelectorAll('.upsell-wrapper .add-upsell')[index].children[0].getAttribute('onclick')}><a >Hinzufügen</a></i>
                    </div>
                  </div>`
              );
            }
          });
          //eslint-disable-next-line no-undef
        const flkty = new Flickity('.hof03__carousel', {
          freeScroll: false
        });
        titleClickFunc();
        sliderPositionObserver();
        btnChangeAfterClick();
        fetchTitleFromPDP('.hof03__carouselProductTitle');
        }
      }
      }, 200);
    }
  };

  const sliderRemove = () => {
    setTimeout(() => {
      document.querySelector('.hof03__upsellSection') && document.querySelector('.hof03__upsellSection').remove();
    }, 200);
  };

  document.querySelector('.HorizontalList__Item [data-action="open-drawer"]').addEventListener('click', () => {
    (function pollForWithBenefits() {
      if (document.querySelector('#sidebar-cart .section.cu-hoffmann-badges')) {
        sliderAdd();
        titleClickFunc();
      } else {
          setTimeout(pollForWithBenefits, 25);
      }
    }());
  });

  document.querySelectorAll('.Drawer__Close.Icon-Wrapper--clickable')[1] && document.querySelectorAll('.Drawer__Close.Icon-Wrapper--clickable')[1].addEventListener('click', () => {
    sliderRemove();
  });

  document.querySelectorAll('a.Header__Icon.Icon-Wrapper.Icon-Wrapper--clickable')[1] && document.querySelectorAll('a.Header__Icon.Icon-Wrapper.Icon-Wrapper--clickable')[1].addEventListener('click', () => {
    sliderAdd();
    titleClickFunc();
  });
  document.querySelector('.PageOverlay').addEventListener('click', () => {
    sliderRemove();
  });

  pollerLite(['.hof03__carousel', () => {
    const flkty = new Flickity('.hof03__upsellSection .hof03__carousel');
    flkty.on('dragEnd', () => {
      if (!document.querySelectorAll('.hof03__carousel-cell')[0].classList.contains('is-selected')) {
        document.querySelector('.hof03__carousel .flickity-slider').classList.add('flickity-slider-new');
      }
    });
  }]);

  const targetNodeForm = document.querySelector('.HorizontalList__Item a.Heading.u-h8:not(.Link)') && document.querySelector('.HorizontalList__Item a.Heading.u-h8:not(.Link)').closest('.Header__FlexItem--fill');

  const configForm = {
    attributes: true, childList: true, subtree: true
  };

  const callbackForm = () => {
    sliderAddForVisibleCartPage();
  };

  const observerForm = new MutationObserver(callbackForm);

  observerForm.observe(targetNodeForm, configForm);
  //-----------------------------
  //...
};
