const whyModal = (id) => {
  const htmlStr = `
        <div class="${id}__modalcontent why">
            <span class="${id}__modalclose">&times;</span>
            <div class="${id}__whymodal">
                <h2>Why my private info is public?</h2>
                <p>
                    Data brokers crawl the web searching for information, and use it to build a profile of you.
                    They find this from government and other public records, self-reported information, social media, and other data brokers.
                </p>
            </div>
        </div>`;

  return htmlStr.trim();
};

export default whyModal;
