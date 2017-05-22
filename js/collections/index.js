// import Enumerable from './fluent/enumerable';
import Enumerable from './fluent/LazyEnumerable';
const cars = [
    { brand: 'bmw', model: 'm5', year: 2014 },
    { brand: 'bmw', model: 'm4', year: 2013 },
    { brand: 'kia', model: 'sorento', year: 2014 },
    { brand: 'kia', model: 'rio', year: 2010 },
    { brand: 'kia', model: 'sportage', year: 2012 },
];

const coll = new Enumerable(cars);
// console.log(coll.where(car => car.brand === 'bmw' || car.brand == 'kia' & car.year > 2013).toArray());
console.log(coll.where(car => car.brand === 'bmw').toArray());
// console.log(coll.select(car => car.model).toArray());

// console.log(coll.orderBy(car => car.brand, 'desc').toArray());
// console.log(coll.orderBy(car => car.brand, 'desc').toArray().length());
