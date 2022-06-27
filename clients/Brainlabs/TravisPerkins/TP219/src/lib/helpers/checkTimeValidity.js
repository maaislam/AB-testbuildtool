const timeValidity = () => {
  const now = new Date();

  const currentTime = now.getHours();

  const currentDay = now.getDay();

  return currentTime >= 0 && currentTime < 16 && currentDay > 0 && currentDay < 5;
};

export default timeValidity;
