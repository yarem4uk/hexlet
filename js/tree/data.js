export const obj = {
  name: 'etc',
  type: 'directory',
  meta: {
    key: 'value',
  },
  children: [
    {
      name: 'consul',
      type: 'directory',
      meta: {},
      children: [
        {
          name: 'config.json',
          type: 'file',
          meta: {
            size: 1200,
          },
        },
      ],
    },
  ],
};

export const tree = [
  'A',
  [['B', [['E'], ['F']]], ['C'], ['D', [['G'], ['J']]], ]
];
