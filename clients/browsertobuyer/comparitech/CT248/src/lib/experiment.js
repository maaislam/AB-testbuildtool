/*eslint-disable no-param-reassign */
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const translationData = {
  nordvpn: {
    en: 'The best VPN overall for <short subject>',
    es: 'La mejor VPN en general para <short subject>',
    de: 'Beste VPN insgesamt für <short subject>',
    ar: 'أفضل VPN بشكل عام لـ <short subject>',
    it: 'La migliore VPN in assoluto per <short subject>',
    fr: 'Meilleur VPN global pour <short subject>',
    ja: '<short subject> に最適な総合No.1 VPN',
    ko: '<short subject>에 가장 적합한 최고의 VPN'
  },
  surfshark: {
    en: 'Best for users on a budget',
    es: 'Ideal para usuarios con presupuesto limitado',
    de: 'Beste Wahl für sparsame Nutzer',
    ar: 'الأفضل للمستخدمين ذوي الميزانية المحدودة',
    it: 'La migliore per chi ha un budget limitato',
    fr: 'Idéal pour les petits budgets',
    ja: '予算重視ユーザーに最適',
    ko: '예산을 고려하는 사용자에게 최적'
  },
  ipvanish: {
    en: 'Best for security and privacy',
    es: 'La mejor opción para seguridad y privacidad',
    de: 'Beste Wahl für Sicherheit und Datenschutz',
    ar: 'الأفضل للأمان والخصوصية',
    it: 'La scelta migliore per sicurezza e privacy',
    fr: 'Meilleur choix pour sécurité et confidentialité',
    ja: 'セキュリティとプライバシーに最適な選択',
    ko: '보안 및 프라이버시에 가장 적합'
  },
  expressvpn: {
    en: 'Best for users who want a premium VPN',
    es: 'Ideal para quienes buscan una VPN premium',
    de: 'Beste Wahl für Nutzer, die eine Premium-VPN wollen',
    ar: 'الأفضل لمن يريدون VPN فاخر',
    it: 'Ideale per chi vuole una VPN premium',
    fr: 'Idéal pour ceux qui veulent une VPN haut de gamme',
    ja: 'プレミアムVPNを求める方に最適',
    ko: '프리미엄 VPN을 원하는 사용자에게 최적'
  },
  pia: {
    en: 'Good choice for technical users',
    es: 'Buena opción para usuarios técnicos',
    de: 'Gute Wahl für Technikaffine',
    ar: 'خيار جيد للمستخدمين التقنيين',
    it: 'Buona scelta per utenti esperti',
    fr: 'Bon choix pour les utilisateurs techniques',
    ja: '技術志向のユーザー向けにおすすめ',
    ko: '기술 지향 사용자를 위한 좋은 선택'
  },
  purevpn: {
    en: 'Good for users connecting from restrictive countries',
    es: 'Buena opción para usuarios en países restrictivos',
    de: 'Gut für Nutzer in restriktiven Ländern',
    ar: 'خيار جيد للمستخدمين من الدول المقيدة',
    it: 'Buona scelta per chi si connette da paesi restrittivi',
    fr: 'Bon choix pour les utilisateurs dans des pays restrictifs',
    ja: '制限の厳しい国からの接続に適した選択',
    ko: '제한적인 국가에서 접속하는 사용자에게 적합'
  },
  privatevpn: {
    en: 'Great choice for ease of use',
    es: 'Gran elección por su facilidad de uso',
    de: 'Hervorragend für einfache Bedienung',
    ar: 'خيار رائع لسهولة الاستخدام',
    it: 'Ottima scelta per la facilità d’uso',
    fr: 'Excellent pour une utilisation facile',
    ja: '使いやすさ重視の優れた選択肢',
    ko: '사용하기 쉬운 훌륭한 선택'
  },
  protonvpn: {
    en: 'Excellent choice for privacy-focused users',
    es: 'Excelente opción para los que priorizan la privacidad',
    de: 'Exzellente Wahl für Datenschutz-orientierte Nutzer',
    ar: 'خيار ممتاز لمحبي الخصوصية',
    it: 'Eccellente per chi punta sulla privacy',
    fr: 'Excellent choix pour les amateurs de confidentialité',
    ja: 'プライバシー重視ユーザーに最適',
    ko: '개인정보 보호를 중시하는 사용자에게 최적'
  },
  hotspotshield: {
    en: 'Good choice for streaming with dedicated servers',
    es: 'Buena opción para streaming con servidores dedicados',
    de: 'Gute Wahl für Streaming mit dedizierten Servern',
    ar: 'خيار جيد للبث مع خوادم مخصصة',
    it: 'Buona scelta per lo streaming con server dedicati',
    fr: 'Bon choix pour le streaming avec serveurs dédiés',
    ja: '専用サーバーでのストリーミングにおすすめ',
    ko: '전용 서버로 스트리밍에 적합한 선택'
  },
  cyberghost: {
    en: 'Great choice for beginners',
    es: 'Gran elección para principiantes',
    de: 'Großartige Wahl für Einsteiger',
    ar: 'خيار رائع للمبتدئين',
    it: 'Ottima scelta per principianti',
    fr: 'Excellent choix pour débutants',
    ja: '初心者に最適な選択肢',
    ko: '초보자에게 훌륭한 선택'
  },
  default: {
    en: 'Great choice for <short subject>',
    es: 'Gran elección para <short subject>',
    de: 'Großartige Wahl für <short subject>',
    ar: 'خيار رائع لـ <short subject>',
    it: 'Ottima scelta per <short subject>',
    fr: 'Excellent choix pour <short subject>',
    ja: '<short subject> に最適な選択肢',
    ko: '<short subject>에 훌륭한 선택'
  }
};

const backupShortSubject = {
  en: 'Great choice VPN',
  es: 'VPN muy recomendable',
  de: 'Starke VPN-Wahl',
  ar: 'VPN خيار رائع',
  it: 'VPN consigliata',
  fr: 'VPN fortement recommandée',
  ja: '優れた選択のVPN'
};
const nordvpnGuaranteeMessage = {
  en: "You can try it risk free with NordVPN's 30-day money-back guarantee.",
  es: 'Puedes probarlo sin riesgo con la garantía de devolución de 30 días de NordVPN.',
  de: 'Du kannst es risikofrei mit der 30-tägigen Geld-zurück-Garantie von NordVPN testen.',
  ar: 'يمكنك تجربته دون مخاطر مع ضمان استرداد الأموال لمدة 30 يومًا من NordVPN.',
  it: 'Puoi provarlo senza rischi con la garanzia di rimborso di 30 giorni di NordVPN.',
  fr: 'Vous pouvez l’essayer sans risque grâce à la garantie de remboursement de 30 jours de NordVPN.',
  ja: 'NordVPNの30日間返金保証でリスクなしでお試しいただけます。',
  ko: 'NordVPN의 30일 환불 보장으로 위험 없이 체험할 수 있습니다。'
};

const getLangCode = () => {
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  return pathSegments[0] && pathSegments[0].length === 2 ? pathSegments[0] : 'en'; //Fallback to 'en' if not found
};

export default () => {
  setup();
  const shortSubjectElem = document.querySelector('div.short-subject');
  const langCode = getLangCode();
  console.log('🚀 ~ langCode:', langCode);

  const shortSubject = shortSubjectElem?.textContent ? shortSubjectElem.innerText : null;
  console.log('🚀 ~ shortSubject:', shortSubject);

  document.querySelectorAll('ol > li').forEach((originalLi) => {
    const link = originalLi.querySelector('a');
    if (!link) return;

    const originalName = link.textContent.trim();
    const nameWithoutColon = originalName.replace(/:/g, '').trim();
    const nameLower = nameWithoutColon.replace(/\s+/g, '').toLowerCase();

    const vpnKey = nameLower.includes('privateinternetaccess') ? 'pia' : nameLower;

    const reasonTemplate = translationData[vpnKey]?.[langCode] || translationData.default[langCode];
    const reason = shortSubject
      ? reasonTemplate.replace('<short subject>', shortSubject)
      : backupShortSubject[langCode];

    const linkHref = link.getAttribute('href');

    console.log('🚀 ~ document.querySelectorAll ~ reason:', backupShortSubject[langCode]);

    //tore original TIP element text BEFORE clearing innerHTML
    let tipText = '';
    const tipEl = originalLi.querySelector('.ct187b');

    if (vpnKey === 'nordvpn' && tipEl) {
      tipText = tipEl.textContent
        .replace(/^TIP\s*:/i, '')
        .replace(/^TIP/i, '')
        .trim();
    }

    //Clear the original content and rebuild the list item
    originalLi.innerHTML = `<strong><a href="${linkHref}" target="_blank" rel="sponsored nofollow noopener">${originalName}</a></strong> — <strong>${reason}</strong>`;

    //Add back the TIP block with styling
    if (vpnKey === 'nordvpn' && tipText) {
      const tipDiv = document.createElement('div');
      tipDiv.classList.add(`${ID}__custom-tip-style`);
      tipDiv.innerHTML = `<strong>TIP:</strong> ${tipText} ${nordvpnGuaranteeMessage[langCode]}`;
      originalLi.appendChild(tipDiv);
    }
  });
};
