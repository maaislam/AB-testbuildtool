/*eslint-disable no-plusplus */
export const getFormattedDeliveryDate = () => {
  const startDate = new Date();
  let endDate = '';
  let noOfDaysToAdd = 1;
  let count = 0;
  const date = startDate.getDate();
  let month = startDate.getMonth();
  month = parseInt(month) + 1;
  const year = startDate.getFullYear();
  const compareDateString = `${year}-${month}-${date}, 11:00:00`;
  const compareDate = new Date(compareDateString.replace(/-/g, '/'));

  if (startDate.getTime() > compareDate.getTime()) {
    noOfDaysToAdd = 2;
  }

  while (count < noOfDaysToAdd) {
    endDate = new Date(startDate.setDate(startDate.getDate() + 1));
    if (endDate.getDay() !== 0 && endDate.getDay() !== 6) {
      count++;
    }
  }

  const options = {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  };
  const formattedDate = endDate.toLocaleDateString('en-gb', options);
  const parts = formattedDate.split(' ');
  const result = `${parts[0]} ${parts[1]} ${parts[2]}`;

  return result;
};
