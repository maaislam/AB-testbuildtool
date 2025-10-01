const initCT281 = () => {
  convert.$(document).ready(() => {
    const shared = {
      ID: 'CT281',
      VARIATION: '1',
      CLIENT: 'browsertobuyer',
      SITE: 'comparitech'
    };
    const { ID } = shared;
    const getLangCode = () => {
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      return pathSegments[0] && pathSegments[0].length === 2 ? pathSegments[0] : 'en';
    };

    const questionsObj = {
      '/blog/vpn-privacy/watch-pornhub-vpn/': 'How do I watch Pornhub with a VPN?',
      '/blog/vpn-privacy/uk-porn-ban-vpn/': 'How do I beat the UK porn ban?',
      '/blog/vpn-privacy/vpn-gambling-abroad/': 'How do I access betting websites abroad?',
      '/blog/vpn-privacy/watch-youtube-tv-abroad-vpn/': 'How do I watch YouTube TV from abroad?',
      '/blog/vpn-privacy/beat-the-usa-porn-ban/': 'How do I beat the USA porn ban?',
      '/blog/vpn-privacy/unblock-and-watch-sky-go-abroad-with-a-vpn-dns/':
        'What is the best VPN for Sky Go?',
      '/blog/vpn-privacy/best-vpn-for-porn/': 'What is the best VPN for Porn?',
      '/blog/vpn-privacy/watch-pornhub-vpn/': 'How do I watch Pornhub privately with a VPN?',
      '/blog/vpn-privacy/change-netflix-region/': 'How do I change Netflix region?',
      '/sports-streaming/watch-ncaa-college-football-online-live-stream/':
        'How do I watch NCAA College Football online?',
      '/de/blog/vpn-datenschutz/deutsches-tv-now-uberall-gucken/':
        'Wie kann ich RTL+ im Ausland sehen?',
      '/tv-streaming/vpn-now-tv-abroad/': 'What is the best VPN for Now TV?',
      '/blog/vpn-privacy/unblock-draftkings-with-vpn/':
        'How do I Unblock DraftKings Fantasy Sports with a VPN?',
      '/fr/blog/vpn-confidentialite/vpn-canal-plus/':
        "Quel est le meilleur VPN pour regarder MyCanal/Canal+ à l'étranger?",
      '/de/blog/vpn-datenschutz/joyn-im-ausland-sehen/': 'Wie nutze ich Joyn im Ausland?',
      '/blog/vpn-privacy/watch-stan-vpn/': 'What is the best VPN to watch Stan abroad?',
      '/blog/vpn-privacy/access-bet365-abroad-with-a-vpn/': 'How do I Bet365 abroad with a VPN?',
      '/blog/vpn-privacy/how-to-get-a-chinese-ip-address/':
        'How do I get a Chinese IP address with a VPN?',
      '/it/blog/vpn-e-privacy-blog/migliori-vpn-sky-go-italia/':
        'Quali sono le migliori VPN per Sky Go Italia?',
      '/blog/vpn-privacy/best-vpn-uk-expats/': 'What is the best VPN for UK expats?',
      '/blog/vpn-privacy/rte-player-vpn-abroad/': 'How do I stream RTE Player abroad?',
      '/blog/vpn-privacy/geospoofing/': 'How do you change your location online?',
      '/blog/vpn-privacy/bypass-texas-pornhub-ban/': 'How do I watch porn in Texas?',
      '/es/blog/vpn-privacidad/mejor-vpn-movistarplus/':
        '¿Cuál es la mejor VPN para MoviStar Plus?',
      '/sports-streaming/vpn-nfl-game-pass-watch-abroad/':
        'What is the best VPN for NFL Game Pass?',
      '/blog/vpn-privacy/bbc-iplayer-vpn-not-working/': 'How do I fix VPN Problems?',
      '/blog/vpn-privacy/watch-british-tv-spain/': 'How do I watch British TV in Spain?',
      '/blog/vpn-privacy/best-vpn-for-linux/': 'What is the best VPN for Linux?',
      '/blog/vpn-privacy/best-vpn-paramount-plus/': 'What is the best VPN for Paramount?',
      '/blog/vpn-privacy/bypass-vpn-blocks/': 'How do I Bypass VPN blocks?',
      '/blog/vpn-privacy/best-vpn-turkey/': 'What is the best VPN for Turkey?',
      '/it/blog/vpn-e-privacy-blog/vpn-raitv-raiplay/':
        "Qual è la migliore VPN per guardare la Rai all'estero?",
      '/blog/vpn-privacy/watch-10-play-abroad/': 'How do I watch 10 Play (Channel 10) abroad?',
      '/blog/vpn-privacy/hulu-vpn-blocked-best-vpns-that-work-with-hulu/':
        'What is the best VPN for Hulu in 2025?',
      '/blog/vpn-privacy/best-vpn-us-expats/': 'What is the best VPN for US expats?',
      '/blog/vpn-privacy/best-vpn-7plus/': 'What is the best VPN for 7plus?',
      '/blog/vpn-privacy/best-vpn-iptv/': 'What is the best VPN for IPTV?',
      '/blog/vpn-privacy/best-vpn-amazon-prime/': 'What is the best VPN for Amazon Prime?',
      '/blog/vpn-privacy/best-dazn-vpns/': 'What is the best VPN for DAZN?',
      '/blog/vpn-privacy/best-vpn-espn/': 'What is the best VPN for ESPN?',
      '/blog/vpn-privacy/best-vpns-dubai-uae/': 'What is the best VPN for Dubai UAE?',
      '/blog/vpn-privacy/best-vpn-australian-tv/': 'What is the Best VPN for Austrailian TV?',
      '/blog/vpn-privacy/best-vpn-australia/': 'What is the best VPN for Austrailia?',
      '/blog/vpn-privacy/nordvpn-coupon-discount/': 'How do I save money with NordVPN?',
      '/blog/vpn-privacy/how-to-set-up-a-vpn-on-meta-quest/':
        'How do I  set up a VPN on Meta Quest?',
      '/tv-streaming/watch-bbc-in-usa-iplayer/': 'How do I watch BBC iPlayer in the USA?',
      '/ko/vpn-프라이버시/최고의-중국-vpn/': '중국에서 가장 좋은 VPN은 무엇입니까?',
      '/blog/vpn-privacy/dazn-not-working-with-vpn/': 'How do I use DAZN with a VPN?',
      '/blog/vpn-privacy/vpn-dedicated-ip-static-ip/':
        'What is the best VPN for static and dedicated IPs?',
      '/blog/vpn-privacy/russian-ip-address-vpn/': 'How do I get a Russian IP address in 2025?',
      '/blog/vpn-privacy/watch-directv-stream/': 'How do I watch DIRECTV STREAM outside the US?',
      '/blog/vpn-privacy/best-vpn-for-windows-10/': 'What is the best VPNs for Windows 10?',
      '/blog/vpn-privacy/canadian-ip-address/': 'How do I get a Canadian IP address for free?',
      '/blog/vpn-privacy/best-vpn-dd-wrt-router/': 'What is the best VPNs for DD-WRT Routers?',
      '/de/blog/vpn-datenschutz/vpns-fuer-dazn/': 'Mit welchen VPNs man DAZN überall schauen',
      '/es/blog/vpn-privacidad/vpn-baratas/': '¿Cuál es la mejor VPN barata?',
      '/es/blog/vpn-privacidad/mejores-vpn-venezuela/': '¿Cuál es la mejor VPN para Venezuela?',
      '/fr/blog/vpn-confidentialite/tv-canadienne-vpn/':
        'Quel est le meilleur VPN pour regarder la télévision canadienne à l’étranger ?',
      '/fr/blog/vpn-confidentialite/vpn-linux/': 'Quel est le meilleur VPN pour Linux?',
      '/blog/vpn-privacy/singapore-ip-address/': 'How do I get an IP address in Singapore?',
      '/blog/vpn-privacy/ip-address-denmark/': 'How do I get an IP address in Denmark?',
      '/blog/vpn-privacy/czech-republic-ip-address-vpn/':
        'How do I get an IP address  the Czech Republic?'
    };

    const expertSummary = {
      en: 'Expert Summary',
      es: 'Resumen del experto',
      de: 'Expertenfazit',
      ar: 'ملخص الخبير',
      it: 'Sintesi dell’esperto',
      fr: 'Résumé de l’expert',
      ja: '専門家のまとめ',
      ko: '전문가 요약'
    };

    //Poller util
    const pollerLite = (conditions, callback, maxTime = 10000) => {
      const POLLING_INTERVAL = 25;
      const startTime = Date.now();
      const interval = setInterval(() => {
        const allMet = conditions.every((cond) =>
          typeof cond === 'function' ? cond() : !!document.querySelector(cond)
        );
        if (allMet) {
          clearInterval(interval);
          callback();
        } else if (Date.now() - startTime >= maxTime) {
          clearInterval(interval);
          console.error('Polling exceeded maximum time limit');
        }
      }, POLLING_INTERVAL);
    };

    //GA4 tracking helper
    const trackGA4Event = (category, action, label) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'gaCustomEvent',
        eventCategory: category,
        eventAction: action,
        eventLabel: label
      });
      console.log('GA4 event tracked', category, action, label);
    };

    //Main init
    const init = () => {
      //B) Grab the In-Short container
      const inShort = document.querySelector('.in_short_container:not(.fallback)');
      if (!inShort) return;
      document.documentElement.classList.add('ct281');
      //B1) add a dynamic class for QA / CSS targeting
      inShort.classList.add(`${ID}__expert-summary`);

      //B2) rename headers
      inShort.querySelectorAll('.in_short_mobile_header, .in_short_header').forEach((h) => {
        h.textContent = questionsObj[decodeURIComponent(window.location.pathname)]
          ? `${expertSummary[getLangCode()]}: ${
              questionsObj[decodeURIComponent(window.location.pathname)]
            }`
          : `${expertSummary[getLangCode()]}:`;
      });

      const controlShortElement = document.querySelector('.in_short_content');
      if (controlShortElement) controlShortElement.className = 'in_short_content-update';

      //C) move box to top of article
      const entry = document.querySelector('.entry-content');
      entry.insertAdjacentElement('beforebegin', inShort);

      const mobileHeader = inShort.querySelector('.in_short_mobile_header');
      const contentContainer = inShort.querySelector('.in_short_content');

      if (mobileHeader) {
        mobileHeader.classList.add('active');
      }
      if (contentContainer) {
        contentContainer.style.display = 'block';
      }
      pollerLite(['.fallback'], () => {
        const fallbackElem = document.querySelector(`.${ID}__expert-summary2.fallback`);
        console.log('fallbackElem', fallbackElem);
        fallbackElem?.remove();
      });

      //D) wire up GA4 click tracking on the recommendation link
      const expertLink = inShort.querySelector('a.go-link');
      if (expertLink) {
        expertLink.addEventListener('click', () => {
          trackGA4Event(
            'Expert Summary Clicks', //category
            'Expert Summary Click', //action
            '' //label
          );
        });
      }
    };

    const renderFallbackSummary = () => {
      const nordLinkElem = document.querySelector('[href*="/go/nordvpn"]');
      const { postid, clickid } = nordLinkElem.dataset;

      const recommendationsPart1 = {
        en: 'NordVPN is our number 1 recommendation following extensive tests.',
        es: 'NordVPN es nuestra recomendación número uno tras exhaustivas pruebas.',
        de: 'NordVPN ist unsere Empfehlung Nummer eins nach umfangreichen Tests.',
        ar: 'NordVPN هو توصيتنا الأولى بعد اختبارات مكثفة.',
        it: 'NordVPN è la nostra prima scelta dopo test approfonditi.',
        fr: 'NordVPN est notre recommandation numéro un après de nombreux tests.',
        ja: 'NordVPNは徹底的なテストの結果、当社の第1推奨です。',
        ko: 'NordVPN은 철저한 테스트 후 저희가 가장 추천하는 서비스입니다.'
      };

      const recommendationsPart2 = {
        en: 'It has a strong security offering that uses powerful encryption and a true zero-logs policy to keep your activities private.',
        es: 'Ofrece gran seguridad con potente cifrado y una verdadera política de cero registros para mantener tu privacidad.',
        de: 'Es bietet starke Sicherheit mit leistungsstarker Verschlüsselung und einer echten No-Logs-Politik zum Schutz Ihrer Privatsphäre.',
        ar: 'يقدم أمانًا قويًا مع تشفير قوي وسياسة صارمة لعدم الاحتفاظ بالسجلات لحماية خصوصيتك.',
        it: 'Offre sicurezza elevata con potente crittografia e una vera politica no-log per proteggere la tua privacy.',
        fr: 'Il offre une sécurité renforcée avec un chiffrement puissant et une vraie politique de non-journalisation pour protéger votre vie privée.',
        ja: '強力な暗号化と完全なログなしポリシーであなたのプライバシーを守ります。',
        ko: '강력한 암호화와 진정한 무로그 정책으로 개인 활동을 안전하게 보호합니다.'
      };
      const shortRecPart1 = {
        en: 'NordVPN is our top recommendation for <short subject>.',
        es: 'NordVPN es nuestra principal recomendación para <short subject>.',
        de: 'NordVPN ist unsere Top-Empfehlung für <short subject>.',
        ar: 'NordVPN هو توصيتنا الأولى لـ <short subject>.',
        it: 'NordVPN è la nostra prima scelta per <short subject>.',
        fr: 'NordVPN est notre premier choix pour <short subject>.',
        ja: 'NordVPNは<short subject>に最適なおすすめです。',
        ko: 'NordVPN은 <short subject>에 가장 추천하는 서비스입니다.'
      };

      const shortRecPart2 = {
        en: 'It offers great speeds from servers located throughout the world and you can currently save 72%.',
        es: 'Ofrece gran velocidad con servidores en todo el mundo y ahora puedes ahorrar un 72%.',
        de: 'Es bietet hohe Geschwindigkeiten mit Servern weltweit und Sie können derzeit 72 % sparen.',
        ar: 'يوفر سرعات رائعة من خوادم حول العالم ويمكنك الآن التوفير بنسبة 72%.',
        it: 'Offre ottime velocità da server in tutto il mondo e ora puoi risparmiare il 72%.',
        fr: 'Il offre d’excellentes vitesses grâce à des serveurs dans le monde entier et vous pouvez actuellement économiser 72 %.',
        ja: '世界各地のサーバーから高速接続を提供し、現在72％割引で利用できます。',
        ko: '전 세계 서버에서 빠른 속도를 제공하며 현재 72% 할인받을 수 있습니다.'
      };

      const langCode = getLangCode();
      const pageHasShortSybject =
        document.querySelector('.short-subject') &&
        document.querySelector('.short-subject').innerText !== '';

      const shortSubjectElem = document.querySelector('.short-subject');
      const shortSubjectText = pageHasShortSybject && shortSubjectElem.innerText;

      const partOneCopy = pageHasShortSybject
        ? shortRecPart1[langCode].replace('<short subject>', shortSubjectText)
        : recommendationsPart1[langCode];
      const partTwoCopy = pageHasShortSybject
        ? shortRecPart2[langCode]
        : recommendationsPart2[langCode];

      const newHtml = `${
        questionsObj[decodeURIComponent(window.location.pathname)]
          ? `&nbsp;${questionsObj[decodeURIComponent(window.location.pathname)]}`
          : ''
      }`;

      const fallbackHtml = `<div class="in_short_container CT281__expert-summary2 fallback">
        <div class="in_short_mobile_header header-text active">${expertSummary[langCode]}</div>
        <div class="in_short_header-wrapper">
        	<div class="in_short_header header-text">${expertSummary[langCode]}:${newHtml}</div>
        	
        </div>
        <div class="in_short_content" style="display:block">
          
            <ul>
                <li class="adjust-font"><a href="${nordLinkElem.href}"
                      target="_blank"
                      rel="sponsored nofollow noopener"
                      data-postid="${postid}"
                      data-clickid="${clickid}"
                      class="go-link">${partOneCopy}</a>. ${partTwoCopy}</li>
            </ul>
      
        </div>
      </div>`;
      const entry = document.querySelector('.entry-content');
      entry.insertAdjacentHTML('beforebegin', fallbackHtml);
      document.documentElement.classList.add('ct281');
      const controlShortElement = document.querySelector('.in_short_content');
      if (controlShortElement) controlShortElement.className = 'in_short_content-update';
      document.querySelectorAll('.in_short_container.fallback').forEach((item) => {
        item.addEventListener('click', (event) => {
          const inShort = event.currentTarget.querySelector('.in_short_mobile_header');
          if (inShort.classList.contains('active')) {
            inShort.classList.remove('active');
            $(inShort).siblings('.in_short_content').slideUp(500);
          } else {
            inShort.classList.add('active');
            $(inShort).siblings('.in_short_content').slideDown(500);
          }
        });
      });
    };
    pollerLite(['.entry-content ol'], renderFallbackSummary);
    //wait for the .entry-content ol to appear then run init
    pollerLite(
      [
        '.entry-content ol',
        '.in_short_container',
        '.in_short_container:not(.fallback) li a[href*="nordvpn"]'
      ],
      init
    );
  });
};

export default initCT281;
