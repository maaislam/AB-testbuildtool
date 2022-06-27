import getCart from "./getCart";

export const observeDOM = async(targetSelectorString, callbackFunction, configObject) => {
    const target = document.querySelector(`${targetSelectorString}`);

    const observer = new MutationObserver((mutations) => {

        mutations.forEach(function(mutation) {
            callbackFunction(mutation);
        });
    });

    // configuration of the observer:

    const config = configObject || {
        attributes: true,
        childList: true,
        characterData: false,
        subtree: true,
    };

    observer.observe(target, config);
};