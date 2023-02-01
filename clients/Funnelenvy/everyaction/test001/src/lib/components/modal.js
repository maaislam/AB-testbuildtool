const modal = (id) => {
  const angleIcon = `<svg class="${id}__arrow" xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path class="${id}__arrow" d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>`;

  const htmlStr = `
    <div class="${id}__modal open">
        <div class="${id}__modal--header "><span class="${id}__arrow">${angleIcon}</span></div>
        <div class="${id}__modal--body">
            <h2>See EveryAction In Action</h2>
            <p>
                Find out how you can empower your organization 
                <br> 
                with <b>best-in-class</b> case management.
            </p>
        </div>
        <div class="${id}__modal--btncontainer">
            <a class="${id}__modal--btn" href="/get-demo/">Get a Demo</a>
        </div>
    </div>`;

  return htmlStr.trim();
};

export default modal;
