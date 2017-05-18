const arr = ['aNd', 'fOr', 'OR', 'THREE', 'three', 'the', 'for', 'world', 'a', 'hello', 'CAT', 'dog', 'DOG', 'caT', 'cat', 'and', 'CAt', ''];

const stopWords = ['and', 'or', 'a', 'the', ''];

// const count = arr.reduce((acc, item) => 
//     acc.has(item.toLowerCase()) ? acc.set(item.toLowerCase(), acc.get(item.toLowerCase()) + 1) : acc.set(item.toLowerCase(), 1),
// new Map());


const wordsCount = (words, stop) => 
    words.reduce((acc, item) => {
        if (stop.includes(item.toLowerCase())) {
            return acc;
        } else {
            return acc.has(item.toLowerCase()) ? acc.set(item.toLowerCase(), acc.get(item.toLowerCase()) + 1) : acc.set(item.toLowerCase(), 1);
        }
    }, new Map());

// console.log(wordsCount(arr, stopWords));

