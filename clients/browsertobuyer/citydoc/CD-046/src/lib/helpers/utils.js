/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
export const pollerLite = (conditions, callback, maxTime = 10000) => {
  const POLLING_INTERVAL = 25;
  const startTime = Date.now();
  const interval = setInterval(() => {
    const allConditionsMet = conditions.every((condition) => {
      if (typeof condition === 'function') {
        return condition();
      }
      return !!document.querySelector(condition);
    });
    if (allConditionsMet) {
      clearInterval(interval);
      callback();
    } else if (Date.now() - startTime >= maxTime) {
      clearInterval(interval);
      console.error('Polling exceeded maximum time limit');
    }
  }, POLLING_INTERVAL);
};
export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);

  if (!target) return;
  //configuration of the observer:

  const config = configObject || {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
    characterDataOldValue: true
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      //console.log(mutation);
      observer.disconnect();

      callbackFunction(mutation);
      observer.observe(target, config);
    });
  });

  observer.observe(target, config);
};

const translationConfig = {
  vpnOfferText: {
    nordvpn: {
      en: 'Best value: up to 77% off 2-year plans + 3 months extra FREE',
      es: 'Hasta 77% de descuento en planes de 2 años + 3 meses gratis',
      de: 'Bis zu 77 % Rabatt auf 2-Jahres-Pläne + 3 Monate gratis',
      ar: 'خصم حتى 77٪ على خطط عامين + 3 أشهر مجانية',
      it: 'Fino al 77% di sconto sui piani biennali + 3 mesi gratis',
      fr: 'Jusqu’à 77 % de réduction + 3 mois offerts',
      ja: '2年プラン最大77％オフ＋3か月無料',
      ko: '2년 플랜 최대 77% 할인 + 3개월 무료'
    },
    ipvanish: {
      en: 'Save 84% on 2-year plans',
      es: 'Ahorra un 84% en planes de 2 años',
      de: '84 % sparen bei 2-Jahres-Plänen',
      ar: 'وفر 84٪ على خطط مدتها عامين',
      it: 'Risparmia l’84% su piani di 2 anni',
      fr: 'Économisez 84 % sur les plans de 2 ans',
      ja: '年額プラン84％オフ＋3か月無料',
      ko: '연간 플랜 84% 할인 + 3개월 무료'
    },
    surfshark: {
      en: 'Extra 3 months free with one and two-year starter plans',
      es: '3 meses gratis con planes de 1 o 2 años',
      de: '3 Monate gratis bei 1- oder 2-Jahres-Plänen',
      ar: '3 أشهر مجانية مع خطط عام أو عامين',
      it: '3 mesi gratis con piani di 1 o 2 anni',
      fr: '3 mois gratuits avec plans 1 ou 2 ans',
      ja: '1年・2年プランで3か月無料',
      ko: '1년·2년 플랜 3개월 무료'
    },
    totalvpn: {
      en: '80% off the annual plan (with AV protection and ad-blocker)',
      es: '80% menos en el plan anual (con AV y bloqueador)',
      de: '80 % Rabatt auf Jahresplan (mit AV & Werbeblocker)',
      ar: 'خصم 80٪ على الخطة السنوية (مع حماية AV)',
      it: '80% di sconto sul piano annuale (con AV e blocco annunci)',
      fr: '80 % sur le plan annuel (AV + bloqueur)',
      ja: '年額プラン80％オフ（AV保護付き）',
      ko: '연간 플랜 80% 할인 (AV 보호 포함)'
    },
    expressvpn: {
      en: '73% off and 4 months free on long-term plans',
      es: '73% menos y 4 meses gratis en planes largos',
      de: '73 % Rabatt + 4 Monate gratis bei Langzeitplänen',
      ar: 'خصم 73٪ و4 أشهر مجانية للخطط الطويلة',
      it: '73% di sconto + 4 mesi gratis sui piani lunghi',
      fr: '73 % de réduction + 4 mois gratuits',
      ja: '長期プラン73％オフ＋4か月無料',
      ko: '장기 플랜 73% 할인 + 4개월 무료'
    },
    pia: {
      en: '83% off a 3-yr plan with 3 months extra free',
      es: '83% menos en plan de 3 años + 3 meses gratis',
      de: '83 % Rabatt auf 3-Jahres-Plan + 3 Monate gratis',
      ar: 'خصم 83٪ على خطة 3 سنوات + 3 أشهر مجانية',
      it: '83% di sconto sul piano triennale + 3 mesi gratis',
      fr: '83 % sur 3 ans + 3 mois offerts',
      ja: '3年プラン83％オフ＋3か月無料',
      ko: '3년 플랜 83% 할인 + 3개월 무료'
    },
    purevpn: {
      en: 'Save 85% on a 2-year standard plan with 3 mo free',
      es: 'Ahorra 85% en plan de 2 años + 3 meses gratis',
      de: '85 % sparen beim 2-Jahres-Plan + 3 Monate gratis',
      ar: 'وفّر 85٪ على خطة عامين + 3 أشهر مجانية',
      it: 'Risparmia 85% su piano 2 anni + 3 mesi gratis',
      fr: '-85 % sur 2 ans + 3 mois offerts',
      ja: '2年プラン85％オフ＋3か月無料',
      ko: '2년 플랜 85% 할인 + 3개월 무료'
    },
    privatevpn: {
      en: '24 months extra free with a 12 month plan',
      es: '24 meses gratis con plan de 12 meses',
      de: '24 Monate gratis beim 12-Monats-Plan',
      ar: '24 شهرًا مجانًا مع خطة 12 شهرًا',
      it: '24 mesi gratis con piano 12 mesi',
      fr: '24 mois gratuits avec plan 12 mois',
      ja: '12か月プランで24か月無料',
      ko: '12개월 플랜 + 24개월 무료'
    },
    protonvpn: {
      en: '75% off a 24 month plan',
      es: '75% menos en plan de 24 meses',
      de: '75 % Rabatt auf 24-Monats-Plan',
      ar: 'خصم 75٪ على خطة 24 شهرًا',
      it: '75% di sconto sul piano 24 mesi',
      fr: '-75 % sur plan 24 mois',
      ja: '24か月プラン75％オフ',
      ko: '24개월 플랜 75% 할인'
    },
    hotspotshield: {
      en: '77% off a 1-year plan',
      es: '77% menos en plan de 1 año',
      de: '77 % Rabatt auf 1-Jahres-Plan',
      ar: 'خصم 77٪ على خطة عام واحد',
      it: '77% di sconto sul piano 1 anno',
      fr: '-77 % sur plan 1 an',
      ja: '1年プラン77％オフ',
      ko: '1년 플랜 77% 할인'
    },
    cyberghost: {
      en: '$2.19 per month (2 year plan) plus 2 months free',
      es: '$2.19/mes (plan 2 años) + 2 meses gratis',
      de: '$2,19/Monat (2-Jahres-Plan) + 2 Monate gratis',
      ar: '2.19 دولار شهريًا (خطة سنتين) + شهرين مجانًا',
      it: '$2,19/mese (piano 2 anni) + 2 mesi gratis',
      fr: '$2.19/mois (2 ans) + 2 mois gratuits',
      ja: '月額$2.19（2年プラン）＋2か月無料',
      ko: '월 $2.19 (2년 플랜) + 2개월 무료'
    }
  },
  tableTexts: {
    titleWithShortSubject: {
      en: 'Best Black Friday Deals 2025 for <short subject>',
      es: 'Las mejores ofertas del Black Friday 2025 para <short subject>',
      de: 'Beste Black Friday-Angebote 2025 für <short subject>',
      ar: 'أفضل عروض الجمعة السوداء 2025 لـ <short subject>',
      it: 'Le migliori offerte del Black Friday 2025 per <short subject>',
      fr: 'Meilleures offres Black Friday 2025 pour <short subject>',
      ja: '<short subject>向けの2025年ブラックフライデー特価',
      ko: '<short subject>을(를) 위한 2025 블랙프라이데이 최고 할인'
    },
    titleWithoutShortSubject: {
      en: 'Best Black Friday Deals 2025',
      es: 'Las mejores ofertas del Black Friday 2025',
      de: 'Beste Black Friday-Angebote 2025',
      ar: 'أفضل عروض الجمعة السوداء 2025',
      it: 'Le migliori offerte del Black Friday 2025',
      fr: 'Meilleures offres Black Friday 2025',
      ja: '2025年ブラックフライデー特価',
      ko: '2025 블랙프라이데이 최고 할인'
    },
    tip: {
      en: 'TIP: The NordVPN “Basic” plan is our top recommendation for <short subject>',
      es: 'CONSEJO: El plan “Basic” de NordVPN es nuestra mejor recomendación para <short subject>',
      de: 'TIPP: Der NordVPN-„Basic“-Tarif ist unsere Top-Empfehlung für <short subject>',
      ar: 'نصيحة: خطة "Basic" من NordVPN هي توصيتنا الأولى لـ <short subject>',
      it: 'CONSIGLIO: Il piano “Basic” di NordVPN è la nostra scelta migliore per <short subject>',
      fr: 'ASTUCE : Le plan “Basic” de NordVPN est notre recommandation n°1 pour <short subject>',
      ja: 'ヒント：NordVPNの「Basic」プランは<short subject>向けに最もおすすめです',
      ko: '팁: NordVPN “Basic” 요금제는 <short subject>에 가장 추천됩니다'
    }
  },
  rightSideNavTexts: {
    navitemWithSubject: {
      en: '<span class="bf">Black Friday</span> deals for <short-subject>',
      es: 'Ofertas de <span class="bf">Black Friday</span> para <short-subject>',
      de: '<span class="bf">Black Friday</span>-Angebote für <short-subject>',
      ar: 'عروض <span class="bf">الجمعة السوداء</span> لـ <short-subject>',
      it: 'Offerte di <span class="bf">Black Friday</span> per <short-subject>',
      fr: 'Offres <span class="bf">Black Friday</span> pour <short-subject>',
      ja: '<short-subject>向けの<span class="bf">ブラックフライデー</span>セール',
      ko: '<short-subject>을(를) 위한 <span class="bf">블랙프라이데이</span> 특가'
    },
    navitemWithoutSubject: {
      en: '<span class="bf">Black Friday</span> deals',
      es: 'Ofertas de <span class="bf">Black Friday</span>',
      de: '<span class="bf">Black Friday</span>-Angebote',
      ar: 'عروض <span class="bf">الجمعة السوداء</span>',
      it: 'Offerte di <span class="bf">Black Friday</span>',
      fr: 'Offres <span class="bf">Black Friday</span>',
      ja: '<span class="bf">ブラックフライデー</span>セール',
      ko: '<span class="bf">블랙프라이데이</span> 특가'
    }
  },

  extraParagraphs: {
    title: {
      en: 'Is now the right time to buy a Black Friday VPN deal?',
      es: '¿Es este el mejor momento para comprar una oferta VPN de Black Friday?',
      de: 'Ist jetzt der richtige Zeitpunkt, um ein Black-Friday-VPN-Angebot zu kaufen?',
      ar: 'هل هذا هو الوقت المناسب لشراء عرض VPN في Black Friday؟',
      it: 'È il momento giusto per acquistare un’offerta VPN del Black Friday?',
      fr: 'Est-ce le bon moment pour acheter une offre VPN Black Friday ?',
      ja: '今はブラックフライデーVPNセールを購入するベストタイミングですか？',
      ko: '지금이 블랙프라이데이 VPN 특가를 구매할 최적의 시기인가요?'
    },
    content: {
      en: 'All the major VPNs have already launched their Black Friday deals. These are the best prices we’ve seen all year and are unlikely to get any lower.',
      es: 'Las principales VPN ya han lanzado sus ofertas de Black Friday. Son los mejores precios del año y es poco probable que bajen más.',
      de: 'Alle großen VPN-Anbieter haben ihre Black-Friday-Deals bereits gestartet. Das sind die besten Preise des Jahres und sie werden kaum noch günstiger.',
      ar: 'جميع مزودي الـVPN الرئيسيين أطلقوا بالفعل عروض Black Friday. هذه أفضل الأسعار طوال العام ومن غير المحتمل أن تصبح أقل.',
      it: 'Tutte le principali VPN hanno già lanciato le offerte Black Friday. Sono i migliori prezzi dell’anno e difficilmente scenderanno ulteriormente.',
      fr: 'Toutes les grandes VPN ont déjà lancé leurs offres Black Friday. Ce sont les meilleurs prix de l’année et ils ne devraient pas descendre davantage.',
      ja: '主要VPNはすでにブラックフライデーセールを開始しています。今年最安レベルで、これ以上安くなる可能性は低いです。',
      ko: '주요 VPN들이 이미 블랙프라이데이 특가를 시작했습니다. 올해 본 가격 중 가장 저렴하며, 더 낮아질 가능성은 거의 없습니다.'
    }
  }
};
