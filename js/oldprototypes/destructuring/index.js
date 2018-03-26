import { cars } from './data';

const getCars = (coll) => {
  const iter = (data, acc) => {
    const [head, ...rest] = data;
    if (!head) {
      return acc;
    }
    const { year } = head;
    if (!acc[year]) {
     return iter(rest, { ...acc, [year]: 1 });
    }
    return iter(rest, { ...acc, [year]: acc[year] + 1 });
  };
  return iter(coll, {});
};

console.log(getCars(cars));
