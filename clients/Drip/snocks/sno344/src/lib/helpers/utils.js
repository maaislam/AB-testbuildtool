export const isCartDrawer = document.querySelector('#sidebar-cart');
export const isCartPage = location.pathname.indexOf('/cart') !== -1;

export const thingsToPollFor = isCartDrawer ? ['.Drawer__Container'] :
    isCartPage ? ['.PageContent'] :
    null;