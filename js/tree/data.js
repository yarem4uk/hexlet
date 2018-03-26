import { mkdir, mkfile } from 'hexlet-immutable-fs-trees';

export const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

export const obj = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
      mkfile('lll', { size: 100 }),
    ]),
  ]),
  mkfile('hcosts', { size: 3500 }),
  mkfile('rescolve', { size: 1000 }),
]);

// export const obj = {
//   name: 'etc',
//   type: 'directory',
//   meta: {
//     key: 'value',
//   },
//   children: [
//     {
//       name: 'consul',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'config.json',
//           type: 'file',
//           meta: {
//             size: 1200,
//           },
//         },
//       ],
//     },
//     {
//       name: 'corba',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'yes.json',
//           type: 'file',
//           meta: {
//             size: 1200,
//           },
//         },
//       ],
//     },
//     {
//       name: 'fix',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'hellow.json',
//           type: 'file',
//           meta: {
//             size: 1200,
//           },
//         },
//       ],
//     },
//   ],
// };

// export const tree = ['A', [['B', [['E'], ['F']]], ['C'], ['D', [['G'], ['J']]]]];
//

// export const data = [
//   { key: 'a', type: 'file' },
//   { key: 'b', type: 'file' },
//   { key: 'c', type: 'directory' },
//   { key: 'd', type: 'directory' },
//   { key: 'e', type: 'directory' },
// ];
//

export const simple = [
  'a',
  'b',
  [
    'c',
    ['d'],
  ],
];
