const getProductInfo = (url) => {
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      //Search for <label> elements with class 'custom-child-upsel-checkbox' inside a <form>
      const form = doc.querySelector('form');
      const labels = form.querySelectorAll('label.custom-child-upsel-checkbox');
      let radioVal;
      //Check if there are more than one label
      if (labels.length > 1) {
        const secondToLastLabel = labels[labels.length - 2]; //Get the second-to-last label

        const radioInput = secondToLastLabel.querySelector("input[type='radio']");

        if (radioInput) {
          radioVal = radioInput.value;
          console.log('Radio Value:', radioVal);
        }
        console.log('No radio input found in the second-to-last label.');
      } else {
        console.log('There are not enough labels to retrieve the second-to-last radio input.');
        radioVal = 0;
      }
      return radioVal;
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
};

export default getProductInfo;
