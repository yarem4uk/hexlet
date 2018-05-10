import validate from 'validate.js';

const constraints = {
  username: {
    presence: true,
    exclusion: {
      within: ['sasha'],
      message: '`%{value}` is not allowed',
    },
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
  },
};

console.log(validate({ password: 'bad', }, constraints));
