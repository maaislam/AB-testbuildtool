export const isHomePg = () => window.location.href === 'https://blackroll.com/de' || window.location.href === 'https://blackroll.com' || window.location.href === 'https://blackroll.com/fr' || window.location.href === 'https://blackroll.com/nl';
export const isPLP = () => window.location.pathname.indexOf('/collections') !== -1 || window.location.pathname.indexOf('/shop') !== -1;
export const isPDP = () => window.location.pathname.indexOf('/products') !== -1;
export const isWissen = () => window.location.pathname.indexOf('/wissen') !== -1;
export const isUbung = () => window.location.pathname.indexOf('/uebungen') !== -1;
export const isSale = () => window.location.pathname.indexOf('/sale') !== -1;
export const isCartPg = () => window.location.pathname.indexOf('/cart') !== -1;
export const deviceType = () => (window.innerWidth >= 1024 ? 'desktop' : 'mobile');
