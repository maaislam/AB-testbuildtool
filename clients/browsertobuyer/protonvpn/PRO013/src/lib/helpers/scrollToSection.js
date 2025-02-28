const scrollToSection = (selector, offsetValue = 90) => {
    const element = document.querySelector(selector);
    if (element) {
        const offset = offsetValue;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementTop - offset, behavior: 'smooth'
        });
    }
};
export default scrollToSection;
