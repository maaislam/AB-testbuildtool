const specialCase = window.location.pathname.includes(
  '/products/coned-chocolate-edibles-extra-strength'
);
export const variationOneInfo = {
  D8: [
    {
      title: 'EXTRA STRENGTH DELTA-8 THC',
      id: 'strength'
    },
    {
      title: `${specialCase ? '8 CONES PER BAG' : '6 CONES PER BAG'}`,
      id: 'perBag'
    },
    {
      title: '100MG PER CONE',
      id: 'perCorn'
    }
  ],
  D9: [
    {
      title: 'EXTRA STRENGTH DELTA-9 THC',
      id: 'strength'
    },
    {
      title: `${specialCase ? '8 CONES PER BAG' : '6 CONES PER BAG'}`,
      id: 'perBag'
    },
    {
      title: '25MG PER CONE',
      id: 'perCorn'
    }
  ]
};
