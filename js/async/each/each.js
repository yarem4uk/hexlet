const noop = (...args) => {};

export const once = fn => {
  let called = false; 
  return (...args) => {
    if (called) {
      return;
    }
    called = true;
    fn(...args);
  };
};

export const callback = () => console.log('hellow');

const newCallback = once(callback);

// once(callback('hellow'));
// once(callback('bay'));
newCallback();
newCallback();
