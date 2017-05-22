class Enumerable {
    constructor(collection) {
        this.collection = collection;
    }

    where(fn) {
        const filtered = this.collection.filter(fn);
        return new Enumerable(filtered);
    }

    select(fn) {
        const selected = this.collection.map(fn);
        return new Enumerable(selected);
    }

    orderBy(fn, dir = 'asc') {
        const ordered = this.collection.slice().sort((left, right) => {
            if (fn(left) === fn(right)) {
                return 0;
            }
            if (dir === 'desc') {
                return fn(left) > fn(right) ? -1 : 1;
            } else if (dir === 'asc') {
            return fn(left) > fn(right) ? 1 : -1;
            }
        });
        return new Enumerable(ordered);
    }

    toArray() {
        return this.collection;
    }
}

export default Enumerable;

// const cars = [
//     { brand: 'bmw', model: 'm5', year: 2014 },
//     { brand: 'bmw', model: 'm4', year: 2013 },
//     { brand: 'kia', model: 'sorento', year: 2014 }
// ];

// const coll = new Enumerable(cars);
