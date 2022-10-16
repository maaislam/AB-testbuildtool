const v2Skus = [
  'F1438598',
  'F1491580',
  'F1482381',
  'F1491581',
  'F1454882',
  'F1405673',
  'F1445493',
  'F1386792',
  'F1390589'
];

const v2SkusFilter = v2Skus.map((v2sku) => {
  return {
    action: 'IS',
    value: v2sku
  };
});

export const realtimeRulesV2 = [
  {
    id: -2,
    query: {
      conditions: [
        {
          field: 'name', //Condition
          arguments: [
            {
              action: 'CONTAINS', //Action type IS / IS_NOT / CONTAINS / EQ / GT / GTE / LT / LTE
              value: 'sample' //Value of condition
            }
          ]
        },
        {
          field: 'sku', //Condition
          arguments: v2SkusFilter
        },
        {
          field: 'in_stock', //Condition
          arguments: [
            {
              action: 'IS',
              value: true
            }
          ]
        }
      ]
    },
    type: 'pinned', //Include or exclude
    slots: [] //Position in widget
  }
];

export const realtimeRulesV1 = [
  {
    id: -2,
    query: {
      conditions: [
        {
          field: 'name', //Condition
          arguments: [
            {
              action: 'CONTAINS', //Action type IS / IS_NOT / CONTAINS / EQ / GT / GTE / LT / LTE
              value: 'Sample' //Value of condition
            }
          ]
        },
        {
          field: 'name', //Condition
          arguments: [
            {
              action: 'CONTAINS',
              value: 'cream'
            }
          ]
        },
        {
          field: 'in_stock', //Condition
          arguments: [
            {
              action: 'IS',
              value: true
            }
          ]
        }
      ]
    },
    type: 'pinned', //Include or exclude
    slots: [] //Position in widget
  }
];
