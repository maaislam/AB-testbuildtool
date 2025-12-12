export const stopAllMedia = () => {
  //HTML5 videos
  document.querySelectorAll('video.player').forEach((v) => {
    v.pause();
    try {
      v.currentTime = 0;
    } catch (e) {}
    const card = v.closest('.video-card');
    if (card) {
      card.classList.remove('playing');
      const icon = card.querySelector('.video-card svg');
      if (icon) {
        icon.style.opacity = '1';
        icon.style.pointerEvents = 'auto';
      }
    }
  });
};

export const lightboxFunctionality = (lightboxSwiper) => {
  const lightbox = document.getElementById('lightbox');

  function openLightbox(atIndex = 0) {
    document.documentElement.style.overflow = 'hidden';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    lightboxSwiper.slideTo(atIndex, 0, false);
  }

  function closeLightbox() {
    stopAllMedia();
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
  }

  //helpers
  const hideIcon = (card) => {
    const icon = card.querySelector('.video-card svg');
    if (icon) {
      icon.style.opacity = '0';
      icon.style.pointerEvents = 'none';
    }
  };

  const showIcon = (card) => {
    const icon = card.querySelector('.video-card svg');
    if (icon) {
      icon.style.opacity = '1';
      icon.style.pointerEvents = 'auto';
    }
  };

  function playHTML5(card) {
    const v = card.querySelector('.player');
    if (!v) return;

    hideIcon(card);
    card.classList.add('playing');

    if (!v.dataset.endedHandlerAttached) {
      v.addEventListener('ended', () => {
        card.classList.remove('playing');
        showIcon(card);
      });
      v.dataset.endedHandlerAttached = '1';
    }

    v.play().catch(() => {});
  }

  function pauseHTML5(card) {
    const v = card.querySelector('.player');
    if (!v) return;
    v.pause();
    card.classList.remove('playing');
    showIcon(card);
  }

  document.addEventListener('click', (e) => {
    const { target } = e;

    const playTrigger = target.closest('.video-card svg');
    if (playTrigger) {
      const card = playTrigger.closest('.video-card');
      stopAllMedia(); //অন্য সব বন্ধ
      const slideType = card.closest('.swiper-slide')?.dataset.type;
      if (slideType === 'html5') playHTML5(card);
      return;
    }

    //2) ভিডিও কার্ডে ক্লিক (SVG না)
    const videoCard = target.closest('.video-card');
    if (videoCard) {
      const v = videoCard.querySelector('.player');
      const isPlaying = videoCard.classList.contains('playing') || (v && !v.paused && !v.ended);

      if (isPlaying) {
        //চলছে → pause + SVG দেখাও, modal না
        pauseHTML5(videoCard);
        return;
      }
      //চলছে না + SVG-এ ক্লিক না → lightbox open
      const slideEl = videoCard.closest('.swiper-slide');
      if (slideEl) {
        const index = Array.from(slideEl.parentElement.children).indexOf(slideEl);
        openLightbox(index);
      }
      return;
    }

    //3) স্লাইডের খালি অংশে ক্লিক → MODAL OPEN
    const slideEl = target.closest('.mySwiper2 .swiper-slide');
    if (slideEl) {
      const index = Array.from(slideEl.parentElement.children).indexOf(slideEl);
      openLightbox(index);
      return;
    }

    //4) Modal close
    if (target.closest('.lightbox__close') || target.classList.contains('lightbox__backdrop')) {
      closeLightbox();
    }
  });

  //Esc to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
  });
};
