const pagebanner = (id, context) => {
  const config = {
    pages: {
      title: 'You are viewing the brochure pages',
      subtitle: 'Switch to a list of all products',
      clickTakesTo: 'scrollshop'
    },
    scrollshop: {
      title: 'You are now viewing a list of all products',
      subtitle: 'Switch to brochure pages',
      clickTakesTo: 'pages'
    }
  };

  const { title, subtitle, clickTakesTo } = config[context];
  const htmlStr = `
    <div class="${id}__pagebanner">
    <span class="${id}__pagebanner-close" data-location="${context}">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="15"
             height="15"
             viewBox="0 0 15 15"
             fill="none">
            <path fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.01612 0.262131C1.52576 -0.11915 0.816721 -0.0844884 0.366117 0.366117C-0.122039 0.854272 -0.122039 1.64573 0.366117 2.13388L5.73223 7.5L0.366117 12.8661L0.262131 12.9839C-0.11915 13.4742 -0.0844884 14.1833 0.366117 14.6339C0.854272 15.122 1.64573 15.122 2.13388 14.6339L7.5 9.26777L12.8661 14.6339L12.9839 14.7379C13.4742 15.1192 14.1833 15.0845 14.6339 14.6339C15.122 14.1457 15.122 13.3543 14.6339 12.8661L9.26777 7.5L14.6339 2.13388L14.7379 2.01612C15.1192 1.52576 15.0845 0.816721 14.6339 0.366117C14.1457 -0.122039 13.3543 -0.122039 12.8661 0.366117L7.5 5.73223L2.13388 0.366117L2.01612 0.262131Z"
                  fill="#181818" />
        </svg>
    </span>
    <div class="${id}__pagebanner-wrapper">
        <div class="title">${title}</div>
        <div class="subtitle" data-clicktakesto="${clickTakesTo}">${subtitle}</div>
    </div>
    </div>`;

  return htmlStr.trim();
};

export default pagebanner;
