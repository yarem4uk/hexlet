class Enumerable {
    constructor(collection, operations) {
        this.collection = collection;
        this.operations = operations || [];
    }

    where(...Args) {
        const newOpr = this.operations.slice();
        Args.map(item => {
            if (typeof item === 'function') {
                newOpr.push(coll => coll.filter(item));
            } else {
                newOpr.push(coll => coll.filter((obj) => Object.keys(item).every((fild => obj[fild] === item[fild]))));
            }
        });
        return new Enumerable(this.collection, newOpr);
    }

    select(fn) {
        const newOpr = this.operations.slice();
        newOpr.push(coll => coll.map(fn));
        return new Enumerable(this.collection, newOpr);
    }

    orderBy(fn, dir = 'asc') {
        const newOpr = this.operations.slice();
        newOpr.push(coll => coll.slice().sort((left, right) => {
            // const ordered = this.collection.slice().sort((left, right) => {
            if (fn(left) === fn(right)) {
                return 0;
            }
            if (dir === 'desc') {
                return fn(left) > fn(right) ? -1 : 1;
            } else if (dir === 'asc') {
                return fn(left) > fn(right) ? 1 : -1;
            }
        }));
        return new Enumerable(this.collection, newOpr);
    }

    get length() {
        return this.toArray().length;
    }


    toArray() {
        if (!this.memo) {
            this.memo = this.operations.reduce((acc, item) => {
                return item(acc);
            }, this.collection);
        }
        console.log(this.operations);
        return this.memo;
    }
}

export default Enumerable;
