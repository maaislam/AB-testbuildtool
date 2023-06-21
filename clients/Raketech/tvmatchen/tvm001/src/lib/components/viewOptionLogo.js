const viewOptionLogo = (id, data) => {
  const { imageAlt, imageLink, optionLink, viewType } = data;
  const aws = 'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/tvmatchen/';
  const paidCustomers = ['discovery+', 'c more live', 'viaplay.se', 'c more stream'];

  const isPromoted = paidCustomers.includes(imageAlt.toLowerCase());

  const htmlStr = `
    <a href="${optionLink}"  class="${id}__viewoption ${viewType}" data-viewtype="${viewType}" data-channelname="${imageAlt}" data-promoted="${isPromoted}">
        <div class="image">
            <img src="${
              aws + encodeURIComponent(imageAlt.replace(/ /g, '-').toLowerCase())
            }.png" alt="${imageAlt}">
        </div>
        <div class="content">
            <span class="text">${viewType === 'betting' ? '' : viewType}</span>
            <span class="arrow ${viewType !== 'Streama' ? `${id}__hide` : ''}">
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M8.1 3.98039C8.5 4.21133 8.5 4.78868 8.1 5.01962L1.65 8.74353C1.25 8.97447 0.750001 8.68579 0.750001 8.22391L0.750001 0.776091C0.750001 0.31421 1.25 0.0255352 1.65 0.256475L8.1 3.98039Z" fill="#6C6C70"/>
                </svg>
            </span>
        </div>
    </a>`;

  return htmlStr.trim();
};

export default viewOptionLogo;
