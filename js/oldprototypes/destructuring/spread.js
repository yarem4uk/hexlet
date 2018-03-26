import { cars } from './data';

const obj = (coll, fn) => {
  return coll.reduce((acc, item) => {
    return acc = {...acc, [fn(item)]: item }; 
  }, {});
};


console.log(obj(cars, car => car.model));
