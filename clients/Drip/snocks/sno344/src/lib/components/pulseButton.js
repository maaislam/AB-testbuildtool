import { plusIcon } from './asset';

const renderPulseButton = (id) => {
    const htmlStr = `
    <div class="${id}__pulse--container">	
        <div class="${id}__pulse--teal">${plusIcon}</div>
    </div>
    
    `;

    return htmlStr;
};

export default renderPulseButton;