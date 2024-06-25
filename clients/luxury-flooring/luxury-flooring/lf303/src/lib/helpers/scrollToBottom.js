import { pollerLite } from './utils';

const scrollToBottom = (listContainer, list) => {
    pollerLite(
        ['body:not(.ajax-loading)', () => !listContainer.classList.contains('_block-content-loading')],
        () => {
            list.scrollTo({
                top: list.scrollHeight,
                behavior: 'smooth'
            });
        }
    );
};

export default scrollToBottom;
