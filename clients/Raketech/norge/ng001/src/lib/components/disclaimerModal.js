import closeIcon from './closeIcon';

const disclaimerModal = (id) => {
  const htmlString = `
        <div class="${id}__modal">
            <div class="${id}__disclaimer">
                <div class="${id}__disclaimer-close">${closeIcon(id)}</div>
                <div class="${id}__disclaimer-wrapper">
                    <div class="${id}__disclaimer--content">
                        <div class="age-warning">
                            <div class="age-warning-logo">
                                <img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/Norge+Casino/age-restrict.png" alt="age restriction logo" />
                            </div>
                            <div class="age-warning-text">
                                Vi tar spillersikkerhet og spillrelatert problematikk på alvor. Denne nettsiden inneholder informasjon om gambling og betting, og derfor ber vi deg bekrefte at du er 18 år eller eldre, før du får tilgang til nettstedet.
                            </div>
                        </div>
                        <div class="geo-warning">
                            <div class="geo-warning-logo">
                                <img src="https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/Norge+Casino/eu-flag.png" alt="eu logo" />
                            </div>
                            <div class="geo-warning-text">
                                Selv om mange av tjenestene som beskrives på denne siden kan brukes mens du er i Norge, er nettsidens innhold laget for norskspråklige individer som reiser- eller er bosatt utenfor Norges landegrenser. Hvis du befinner deg i Norge, anbefaler vi at du spiller hos Norsk Tipping.
                            </div>
                        </div>
                    </div>
                    <div class="${id}__disclaimer--cta">Jeg er 18+ år</div>
                </div>
            </div>
        </div>`;
  return htmlString;
};

export default disclaimerModal;
