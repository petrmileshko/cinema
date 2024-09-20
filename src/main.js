console.log('Hello');

const obj = {
  a: {
    b: false
  },
};

const c = obj?.a?.b?.c;
console.log(c);
