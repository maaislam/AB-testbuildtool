export const isValidCategory = () => {
  const validCategories = [
    {
      category: 'Bare Units',
      url: '/c/tools/drills/cat7230005'
    },
    {
      category: 'Drills',
      url: '/c/tools/drills/cat830704'
    },
    {
      category: 'Saws',
      url: '/c/tools/drills/cat830716'
    }
  ];
  const dataObjs = window.dataLayer.filter((item) => {
    return typeof item === 'object';
  })[0];
  const isValidPdp = validCategories.find((item) => {
    return dataObjs.prodCategory.includes(item.category);
  });
  console.log(isValidPdp);

  if (isValidPdp) {
    return {
      isValidPdp: true,
      categoryInfo: isValidPdp
    };
  }

  return null;
};
