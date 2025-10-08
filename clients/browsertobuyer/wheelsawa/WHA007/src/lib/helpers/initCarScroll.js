import { goodsIcon } from '../assets/icons';
import { pollerLite } from './utils';

const startCarAnimation = (ID) => {
  const car = document.querySelector('.car');
  const track = document.querySelector('.track-line');

  let progress = 0; //0 -> 100
  let triggered50 = false;
  let triggered99 = false;

  const trackWidth = track.offsetWidth - car.offsetWidth;

  function animate() {
    if (progress >= 100) return; //stop at end

    progress += 0.2;

    //car position update
    const carLeft = (progress / 100) * trackWidth;
    car.style.left = `${carLeft}px`;

    //track gradient update
    track.style.background = `linear-gradient(to right, white ${progress}%, orange ${progress}%)`;

    //trigger logs
    if (progress >= 50 && !triggered50) {
      console.log('Car reached 50%');
      document.querySelector('.card-icon').innerHTML = goodsIcon;
      document.querySelector('.card-content-text').textContent =
        "We've cleared nearly 44,000 tons of vehicles and paid out $23 MILLION";

      document.querySelector('.card-content-text + .card-content-text').style.display = 'none';
      triggered50 = true;
    }
    if (progress >= 99 && !triggered99) {
      console.log('Car reached 70%');
      const submitBtn = document.querySelector(
        `#makeForm button[type="submit"]:not(.${ID}__fakeBtn)`
      );

      if (submitBtn) {
        submitBtn.click();

        pollerLite([() => document.querySelector('#error-lookup-failed')], () => {
          const errorElem = document.querySelector('#error-lookup-failed');
          if (errorElem) {
            const mainWrapper = document.querySelector('[data-ref="hero-banner"]');
            mainWrapper.childNodes[1].removeAttribute('style');
            document.querySelector(`.${ID}__wrapper`)?.remove();
          }
        });
      }
      triggered99 = true;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
};

export default startCarAnimation;
