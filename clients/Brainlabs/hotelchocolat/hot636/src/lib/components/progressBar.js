const progressBar = (id, progressWidth) => {
  const htmlStr = `<div class='${id}__discountProgress'>
      <div class='${id}__discountProgressBar'>
        <div class="${id}__barStatus" style='${progressWidth}'></div>
      </div>
    </div>`;

  return htmlStr;
};

export default progressBar;
