import navTab from './navTab';

const header = (id, showTabs = false, activeTabIndex = 0) => {
  const htmlStr = `
    <div class="${id}__header">
        <div class="${id}__header--logo">
            <a href="/"> <img src="/wp-content/themes/deleteme/assets/svgs/deleteme-color.svg" alt="deleteme logo" /></a>
            ${showTabs ? navTab(id, activeTabIndex) : ''}
        </div>
    </div>`;

  return htmlStr.trim();
};

export default header;
