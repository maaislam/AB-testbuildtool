export const pollForGA = async(heading, value) => {
    console.log('pollforga');
    window.ga = window.ga || [];
    ga('create', 'UA-128766543-1', 'auto', 'optimize');
    if (window.ga !== undefined) {
        setTimeout(() => {
            ga('optimize.send', {
                hitType: 'event',
                eventCategory: 'Cart',
                eventAction: 'Increased quantity',
                eventLabel: heading,
                eventValue: value,
            });
        }, 1000);
    } else {
        setTimeout(pollForGA, 25);
    }
};