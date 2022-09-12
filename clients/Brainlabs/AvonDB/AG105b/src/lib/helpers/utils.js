export const getCampaignID = () => {
  const date = new Date();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  return `C${month}_ZA_${year}`;
};

export const getMonth = () => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const dateConst = new Date();
  return month[dateConst.getMonth()];
};
