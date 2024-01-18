import setup from './services/setup';
import shared from './shared/shared';
import techConnect from './components/techConnect';
import { heartIcon } from './assets/svg';

const { ID } = shared;

const init = () => {
  //tech connect component add
  if (!document.querySelector(`.${ID}__techConnectContainer`)) {
    const techConnectAnchorPoint = document.querySelector('.sales-form-title');
    techConnectAnchorPoint.insertAdjacentHTML('afterbegin', techConnect(ID));
  }

  //header logo src
  const headerLogo = document.querySelector('.header-inner .header-logo');
  headerLogo.href = 'https://www.dice.com/hiring';

  //form section
  const salesForm = document.querySelector('.sales-form-holder');
  salesForm.classList.add(`${ID}__salesForm`);

  const progressCounter = () => {
    const htmlStr = `<div class="${ID}__progressCounter">
        Step <span class='${ID}__incrementalText'>1</span> of 3
    </div>`;
    return htmlStr;
  };
  const feProgressBar = document.querySelector('.fe-progress-bar');
  if (!feProgressBar.querySelector(`.${ID}__progressCounter`)) {
    feProgressBar.insertAdjacentHTML('afterend', progressCounter());
  }

  //logo section
  const feLogo = document.querySelector('.logo-section');
  feLogo.classList.add(`${ID}__logoSection`);

  const imgSrcs = [
    'https://s3-alpha-sig.figma.com/img/432e/a682/4b6b71f97a4fc815ff9a5ca626fc78ad?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o~bTbViGduEVjlw6PyVeGWmYGqoi1UfRSv9aHprPhQV89TP16oR9albZ5g6Y-R2fQToG7mBkZVcSMM5GUfb4QcdbqFaB~UJU0GLNRuGHZVmf2PD7BfnIK87EDsrec69417~VFIre5QFBnO-vyzEfllZxBGnx9LiEtJ2NPLtQ5SbbB~Qt0PY9Z0BpLD~WZodF5khKGN4bwYs7L28C7DvsA-3GCHeTHTQDopAo-KbjsX9JueyOFEFKlcUMrTagFrCyBEUEt6gm5sJPXYYujwnbAA1Z3Dz~qM61FrbSO-A53cRLvfohI4XsNZkD3WpXf8dyrsnoljyqCKMtv~jQ-Q5Fag__',
    'https://s3-alpha-sig.figma.com/img/15b3/8b6c/f15b9875cd8778d5db6fd331a4de689a?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rh3c8EwQYGnuVIjwrHA~Jfth11V~ibCSgaS9olPXsoH3JyyuO-jTpNKjTTXbrVZYvJ8Yb8z1maSpNqaYDDZU3ABFhAWi-ZF9inme8NKvRoPc~uh5PdiuhlWfV5R96U5UY-T2rIrkg2onza~BRJi6bx5yrbKqV9nLMSBMF8Pb4GXqNnVJWunuIfhZ03rur1DqxcfFuLnlsA3YOG6e9bSiyNqBa~Urvw2HrhO~OLc1FYhiFOnRynk9MLy6Tikssu4jzPpUa-4wKnBdf6RuYkbExD3XDN0U6Qe436EmJKw4UA6KACAad-u7Mh9-y4aajLcLaG-lJda-aGmiijv23gdHCw__',
    'https://s3-alpha-sig.figma.com/img/167d/5256/539b1fdfbda6fde10a1378c66dab378a?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HgcdczrXMrRqYnKxSzu0vkyL33c87yZYbtGAloUGCIqNCkgACeDskvMJI071krgDMoBcQt8rDzvtpxFJMBF5abkv5lwDu2~k6Ypf48pGN1fksQySIBiyOfwRf9FtViZIPIxlPioVnDh42FEmB3pFz3i3jr7Sie1A9KHepOUUwMI6t96Fm3Vf9Msm15nKl6l2wTywkKCeyF4mCg56qpWg5rj4lFMRa3Tl8pvv23cDcFADNQrokN6G5GTqCjCzq~VurIc3-Sxw9eKv~OmzZEmOJ1yYDaXAFfpE12ITJyqpaAc5osG1Fih2enLiZyszaXrSY~PQnzPoryQlA9paj-zRYg__',
    'https://s3-alpha-sig.figma.com/img/39cd/e6ad/2483d2f73bb9d7366d9e52d2ab6fcfb5?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p72N0JfT6jSYgAWJLO~Jblfs~1lXqvA0Im1Ph8iGQgxpoKLAWWGSiUuAaNxuf~mUevQ6Ykb6N6rD71FmbSKo7Mh6k1OCB~23XF1gtdZAiA4TVZZaS0e1nAn-JDkRn2ndwbGaFx4NLYODWcKPAZDT0xJzEoHiiLtoYi3mbeeHvCLfCfnW1uO50j6ESHh7LJ3X~Ub~JSQvhPo~-Kvn6UvkQ4CVs2IFxDsw9U1UZAYk8RKLLQmFAc~Vz6wjwSJmdWywZXSWLh0YY-RCwpK53pak-fMgUrGNPFIPy8SuRXXFs8mtjOjkwg7xffjn4GYIIWwEoPn~phnPGE46cMA18uhuSQ__',
    'https://s3-alpha-sig.figma.com/img/205e/d12a/b562b76d1beba14bde1e9d016c31159b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ADxeMPMwVe-2jRELAYOcVXdmQl7b5SstsyE-ZZFOAX41AztZMyxLQTIg9oZM3dabZuBwwJucWcLMgUsI3TgI6jDQUVihten73UYcSjlMdPh~l0ItNl4-1Md2le7-XIexcDohso3WWROY1HsLP60t7oqPc6iEBX5AjlWJfgEnnoUAlSbQnBGbyZO9M3pK~zIkxspuXvu~mMNmZ0-NOoM930iS6zoloLi0qfkgTSBhRlM~1v9U0pnacJ1YlH55fozWhFQo8R49HAoAXciX2m-csmH26plzEkMG0JahzuO1E2Hu4inAv7yvCmg7LlqR7yElFPuAg8SXT4s3xSzR46c~OQ__'
  ];
  feLogo.querySelectorAll('.logos img').forEach((img, index) => {
    img.src = imgSrcs[index];
  });

  //we know tech section
  const weKnowSection = document.querySelector('.bm_we_know_section');
  weKnowSection.classList.add(`${ID}__weKnowSection`);

  const bmTechSectionElem = document.querySelector('.bm_tech_position_text');
  bmTechSectionElem.insertAdjacentHTML('afterbegin', heartIcon);

  const bmTechSection = `<section class='${ID}__bmTechSection'>
    ${bmTechSectionElem.outerHTML}
  </section>`;

  if (!document.querySelector(`.${ID}__bmTechSection`)) {
    weKnowSection.insertAdjacentHTML('afterend', bmTechSection);
  }

  //contact us
  const feFooter = document.querySelector('.fotter_section');
  feFooter.classList.add(`${ID}__footerSection`);
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('#fe-next-one') || target.closest('.mktoButtonWrap')) {
      const incrementalTextElem = document.querySelector(`.${ID}__incrementalText`);

      const DELAY = 200;
      setTimeout(() => {
        const feProgressBar = document.querySelector('.fe-progress-bar');
        const bmFormHeading = document.querySelector('.bm_form_heading');

        if (feProgressBar.classList.contains('fe-step1-complete') && !bmFormHeading.classList.contains('step1Complete')) {
          incrementalTextElem.textContent = '2';
        } else if (bmFormHeading.classList.contains('step1Complete')) {
          incrementalTextElem.textContent = '3';
        }
      }, DELAY);
    }
  });
};
