const updatePaginationUI = (id, currentPage, itemsPerPage) => {
    const allCards = document.querySelectorAll(`.${id}__productCard`);
    const rangeText = document.getElementById('rangeText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const total = allCards.length;
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    //Show/hide with active class
    allCards.forEach((card, i) => {
        if (i >= start && i < end) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    //Range Text update
    const rangeStart = start + 1;
    const rangeEnd = Math.min(end, total);
    if (rangeText) {
        rangeText.textContent = `${rangeStart}–${rangeEnd} of ${total}`;
    }

    //Button disable
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = end >= total;
};

export default updatePaginationUI;
