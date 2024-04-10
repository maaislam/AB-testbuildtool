import { bulkMessage } from '../components/bulkMessage';

const setPercentage = (ID, productData) => {
  const { variants } = productData;

  const lowestSaver = variants.reduce((acc, curr) => {
    if (acc > curr.saving) {
      //eslint-disable-next-line no-param-reassign
      acc = curr.saving;
    }
    return curr.qty;
  }, 0);

  const existingBulkOptions = Array.from(
    document.querySelectorAll('body label.custom-child-upsel-checkbox')
  );

  existingBulkOptions.forEach((existingBulk) => {
    const quantity = parseInt(existingBulk.querySelector('input').value);

    //eslint-disable-next-line array-callback-return
    const modifiedData = [...variants].find((data) => {
      return data.qty === quantity;
    });

    if (modifiedData) {
      bulkMessage(existingBulk, ID, modifiedData, lowestSaver);
    }
  });
};

export default setPercentage;
