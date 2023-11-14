const scrollToQuantity = (selector) => {
    const yOffset = -150;
    const top = selector.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top, behavior: 'smooth'
    });
};
export default scrollToQuantity;
