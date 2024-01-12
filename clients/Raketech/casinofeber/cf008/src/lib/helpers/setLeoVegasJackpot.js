const setLeoVegasJackpot = (id, casinoElem, casino, isMobile) => {
    const name = casino.name.toLowerCase();
    const isLeoVegas = name.toLowerCase().includes('leo-vegas');
    if (!isLeoVegas || isMobile) return;

    casinoElem.classList.add(`${id}__leoVegas`);
};
export default setLeoVegasJackpot;
